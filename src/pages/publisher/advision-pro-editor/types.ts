
export type ElementType = 'text' | 'image' | 'button' | 'shape';

export interface OverlayElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  opacity: number;
  title: string;
  subtitle?: string;
  buttonText?: string;
  imageUrl?: string;
  backgroundType: 'mica' | 'solid';
  isVisible: boolean;
  behavior: 'hover' | 'always' | 'end';
}

export interface ImpactAnalysis {
  score: number;
  reasoning: string;
}

export interface ProjectState {
  campaignName: string;
  lastModified: string;
  renderingProgress: number;
  elements: OverlayElement[];
  selectedElementId: string | null;
  currentTime: string;
  totalTime: string;
}
