import { Injectable, signal } from '@angular/core';
import { Act } from '../models/leveling-data';

const STORAGE_KEY = 'poe-leveling-progress';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private checkedIds = signal<Set<string>>(this.loadFromStorage());

  private loadFromStorage(): Set<string> {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return new Set(JSON.parse(stored));
      }
    } catch {
      // corrupted data — reset
    }
    return new Set();
  }

  private persist(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...this.checkedIds()]));
  }

  isChecked(stepId: string): boolean {
    return this.checkedIds().has(stepId);
  }

  toggle(stepId: string): void {
    const current = new Set(this.checkedIds());
    if (current.has(stepId)) {
      current.delete(stepId);
    } else {
      current.add(stepId);
    }
    this.checkedIds.set(current);
    this.persist();
  }

  getProgress(act: Act): { completed: number; total: number; percent: number } {
    const total = act.steps.length;
    const completed = act.steps.filter(s => this.checkedIds().has(s.id)).length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percent };
  }

  reset(act?: Act): void {
    if (act) {
      const current = new Set(this.checkedIds());
      act.steps.forEach(s => current.delete(s.id));
      this.checkedIds.set(current);
    } else {
      this.checkedIds.set(new Set());
    }
    this.persist();
  }
}
