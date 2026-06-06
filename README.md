# POE Leveling Clone

A step-by-step Path of Exile campaign leveling guide — check off instructions as you speed through all 10 acts.

**Clone of [poe-leveling.com](https://poe-leveling.com/)** with persistence, progress tracking, and a dark POE-themed UI.

```
┌─────────────┐  ┌──────────────────────────────────────────────┐
│  Act 1  12% │  │ Act 3 — The City of Sarn                    │
│  Act 2   8% │  │ ████████████░░░░░░░░░░ 14 / 22 (64%)       │
│  Act 3  64% │  │                                              │
│  Act 4   0% │  │ THE SLUMS                                    │
│  Act 5   0% │  │ ☐ Go north help Clarissa                    │
│  ...        │  │                                              │
│  Act 10  0% │  │ THE CREMATORIUM                              │
│             │  │ ☑ Trial kill Piety pick up Tolman's …       │
│             │  │ ☐ Talk to Clarissa for Sewer Keys           │
│ [Reset All] │  │                                              │
└─────────────┘  └──────────────────────────────────────────────┘
```

## Features

- **All 10 acts** — the full Path of Exile campaign, zone by zone
- **Step types** — waypoints, quests, bosses, trials, directions, rewards, notes — each color-coded
- **Check as you go** — tap any step to mark it done, progress bars update in real-time
- **Persistent progress** — checked steps survive page reloads (localStorage)
- **Zone grouping** — steps grouped by zone for quick scanning
- **Dark theme** — POE-inspired colors (`#121215` background, `#af6025` accent)
- **Offline-first** — no backend, no API calls, all data is hardcoded

## What's intentionally excluded

- Gem recommendations
- Build advice
- Passive tree suggestions

This is purely a campaign routing tool — the original site's scope, preserved.

## Tech stack

- **Framework:** Angular 20 (standalone components, no NgModules)
- **Language:** TypeScript 5.8 (strict mode)
- **Styling:** SCSS (hand-written, no UI library)
- **State:** Signals + localStorage
- **No routing** — single-page, act selection via signal

## Development

```bash
npm install
npm start          # http://localhost:4200/
npm run build      # production build → dist/
npm test           # Karma + Jasmine
```

## Architecture

```
AppComponent (root, two-column flex layout)
├── ActList (left sidebar, 250px)
│   ├── 10 act buttons with mini progress bars
│   └── Reset All Progress button
└── ActDetail (right panel, scrollable)
    └── Steps grouped by zone → StepItem per instruction

ProgressService (singleton, providedIn: 'root')
  └── signal<Set<string>> ↔ localStorage
```

**Component communication:** `input()/output()` signals — no `@Input()`/`@Output()` decorators. Modern Angular API throughout.

## Data model

```typescript
type StepType = 'waypoint' | 'quest' | 'direction' | 'boss' | 'trial' | 'reward' | 'note';

interface Step {
  id: string;        // unique across all acts (e.g. 'a3-7')
  instruction: string;
  zone: string;
  type: StepType;
}

interface Act {
  id: number;        // 1–10
  name: string;
  steps: Step[];
}
```

All leveling data lives in `src/app/data/acts.data.ts` — ~240 lines covering the entire campaign.

## Project structure

```
src/app/
├── app.ts                      # Root: holds ACTS, selectedActId signal
├── app.html                    # Two-column flex layout
├── app.scss                    # Dark theme host
├── app.config.ts               # Providers (Router + zone config)
├── models/
│   └── leveling-data.ts        # Step, Act, StepType
├── data/
│   └── acts.data.ts            # All 10 acts with step-by-step instructions
├── services/
│   └── progress.service.ts     # Check state + localStorage persistence
└── components/
    ├── act-list/               # Sidebar with act buttons + progress mini-bars
    ├── act-detail/             # Zone-grouped steps + progress bar
    └── step-item/              # Checkable instruction row with type badge
```
