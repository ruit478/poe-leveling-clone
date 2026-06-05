import { Component, signal } from '@angular/core';
import { ACTS } from './data/acts.data';
import { ActList } from './components/act-list/act-list';
import { ActDetail } from './components/act-detail/act-detail';

@Component({
  selector: 'app-root',
  imports: [ActList, ActDetail],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected acts = ACTS;
  protected selectedActId = signal(1);
}
