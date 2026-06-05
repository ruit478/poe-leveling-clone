import { Component, input, output } from '@angular/core';
import { Step } from '../../models/leveling-data';

@Component({
  selector: 'app-step-item',
  imports: [],
  templateUrl: './step-item.html',
  styleUrl: './step-item.scss'
})
export class StepItem {
  step = input.required<Step>();
  checked = input.required<boolean>();
  toggle = output<void>();
}
