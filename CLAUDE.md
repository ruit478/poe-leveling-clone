# CLAUDE.md — POE Leveling Clone

## Overview

A clone of [poe-leveling.com](https://poe-leveling.com/) — a step-by-step Path of Exile campaign leveling guide. The app displays all 10 acts with zone-by-zone instructions (waypoints, quests, bosses, trials, directions). Each step is checkable and progress persists in `localStorage`. The text content is copied directly from the original site.

**Scope:** Gem picking and build options are intentionally excluded per project owner decision.

## Tech Stack

- **Angular 22** (standalone components, no NgModules)
- **TypeScript 6.0** (strict mode)
- **SCSS** for styling
- **No external UI libraries** — pure Angular with custom dark POE-themed styles
- **No backend / no API calls** — all leveling data is hardcoded

## Commands

```bash
npm start              # Dev server → http://localhost:4200/
npm run build          # Production build → dist/
npm test               # Unit tests (Karma/Jasmine)
npx ng generate component components/name  # Scaffold new component
```

## Architecture

Single-page app with two-column layout. No routing — act selection is managed via a signal in `App`.

```
AppComponent (root layout)
├── ActListComponent (left sidebar, 250px)
│   └── Lists all 10 acts with mini progress bars
└── ActDetailComponent (right main panel, flex: 1)
    └── Steps grouped by zone, each rendered as StepItemComponent
```

### Data Flow

```
acts.data.ts (hardcoded Act[])
  → App.acts
    → ActList.acts (input) → selectAct event → App.selectedActId signal
    → ActDetail.act (input, derived from selectedActId index into acts array)
      → zoneGroups() → StepItem[] per zone

ProgressService (providedIn: 'root', singleton)
  → localStorage-backed Set<string> of checked step IDs
  → Injected into ActList, ActDetail — both read/write through it
```

## File Structure

```
src/
├── index.html                    # <app-root> shell
├── main.ts                       # bootstrapApplication()
├── styles.scss                   # Global reset + dark theme + scrollbar
└── app/
    ├── app.ts                    # Root: holds ACTS, selectedActId signal
    ├── app.html                  # Two-column flex layout
    ├── app.scss                  # Host block, flex container
    ├── app.config.ts             # Router + zone config providers
    ├── app.routes.ts             # Empty routes array (not used)
    ├── models/
    │   └── leveling-data.ts      # Step, Act interfaces + StepType union
    ├── data/
    │   └── acts.data.ts          # ACTS constant: all 10 acts with steps
    ├── services/
    │   └── progress.service.ts   # Checkbox state + localStorage persistence
    └── components/
        ├── act-list/             # Sidebar: act buttons + reset
        ├── act-detail/           # Main panel: zone groups + progress bar
        └── step-item/            # Single checkable row
```

## Key Patterns

### All components are standalone
No `NgModule` classes. Components declare their own imports. `AppComponent` imports `ActList` and `ActDetail` directly, and `ActDetail` imports `StepItem`.

### Signal-based inputs and outputs (modern Angular — not legacy)
This project uses the **current** Angular API, not the old decorator-based one:
- `input.required<T>()` replaces `@Input()` — these are signals, so access values via `this.myInput()` not `.myInput`
- `output<T>()` replaces `@Output()` — emit via `.emit(value)` same as before
- `signal<T>()` replaces manual `BehaviorSubject` or plain properties for reactive state

These APIs were introduced in Angular 17 (dev preview), stabilized in 18/19, and are the **recommended approach** in Angular 20. The `@Input()` / `@Output()` decorators are the legacy pattern (pre-v17). No `@Input()` or `@Output()` decorators are used anywhere in this codebase.

### ProgressService is a singleton
`@Injectable({ providedIn: 'root' })` — there is exactly one instance. It uses a `signal<Set<string>>` to track checked step IDs. Changes are immediately persisted to `localStorage` under key `poe-leveling-progress`.

### Zone grouping is computed in ActDetail
`zoneGroups()` iterates the act's steps and groups them by `step.zone` (preserving order of first appearance). This is called from the template's `@for` loop.

### Data model constraints
- `Step.id` must be unique across all acts (used as localStorage key)
- `Step.type` must be one of: `waypoint | quest | direction | boss | trial | reward | note`
- `Act.id` is 1-indexed (1-10) and used for `acts[selectedActId() - 1]` array access
- `Step.sideArea` was removed — if re-added, update `StepItemComponent` template too

## Styling Conventions

- Dark theme: background `#121215`, text `#ddd`, accent `#af6025` (POE orange)
- Sidebar width: 250px (fixed in `act-list.scss :host`)
- No CSS framework — all styles are hand-written SCSS
- Scrollbar styling is global in `styles.scss`
- Component styles are scoped via `:host` and component-specific classes
