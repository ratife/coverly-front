
export enum CampaignBadge {
  TENDANCE = 'Tendance',
  HAUT_REVENU = 'Haut Revenu',
  NOUVEAU = 'Nouveau',
  ECO_RESPONSABLE = 'Éco-responsable',
}

export interface Campaign {
  id: string;
  title: string;
  brand: string;
  brandLogo: string;
  industry: string;
  rate: number;
  bonus?: string;
  platform: string;
  format: string;
  duration: string;
  description: string;
  badge?: CampaignBadge;
  requirements: string[];
  viewsTarget: string;
  isEliteOnly?: boolean;
}

export interface CreatorStats {
  totalEarnings: string;
  activeAds: number;
}
