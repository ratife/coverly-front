export type CampaignStatus = 'active' | 'paused' | 'completed';

export interface Campaign {
  id: string;
  name: string;
  type: string;
  startDate: string;
  status: CampaignStatus;
  mediaUrl: string;
  spent: number;
  budget: number;
}

export interface Stat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
  color: string;
}

export interface MediaFile {
  id: string;
  name: string;
  size: string;
  date: string;
  type: 'image' | 'video' | 'archive';
}
