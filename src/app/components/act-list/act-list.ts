import { Component, input, output } from '@angular/core';
import { Act } from '../../models/leveling-data';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-act-list',
  imports: [],
  templateUrl: './act-list.html',
  styleUrl: './act-list.scss'
})
export class ActList {
  acts = input.required<Act[]>();
  selectedActId = input.required<number>();
  selectAct = output<number>();

  constructor(protected progress: ProgressService) {}
}
