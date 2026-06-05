export type StepType = 'waypoint' | 'quest' | 'direction' | 'boss' | 'trial' | 'reward' | 'note';

export interface Step {
  id: string;
  instruction: string;
  zone: string;
  type: StepType;
}

export interface Act {
  id: number;
  name: string;
  steps: Step[];
}
