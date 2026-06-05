import { Component, input } from '@angular/core';
import { Act, Step } from '../../models/leveling-data';
import { ProgressService } from '../../services/progress.service';
import { StepItem } from '../step-item/step-item';

@Component({
  selector: 'app-act-detail',
  imports: [StepItem],
  templateUrl: './act-detail.html',
  styleUrl: './act-detail.scss'
})
export class ActDetail {
  act = input.required<Act>();

  constructor(protected progress: ProgressService) {}

  zoneGroups(): { zone: string; steps: Step[] }[] {
    const act = this.act();
    const groups: { zone: string; steps: Step[] }[] = [];
    const seen = new Set<string>();

    for (const step of act.steps) {
      if (!seen.has(step.zone)) {
        seen.add(step.zone);
        groups.push({ zone: step.zone, steps: act.steps.filter(s => s.zone === step.zone) });
      }
    }

    return groups;
  }

  actProgress(): { completed: number; total: number; percent: number } {
    return this.progress.getProgress(this.act());
  }
}
