
export enum Category {
  ALL = 'Toutes les Campagnes',
  MODE = 'Mode',
  TECH = 'Tech',
  CUISINE = 'Cuisine'
}

export interface Campaign {
  id: string;
  title: string;
  brand: string;
  brandLogo: string;
  image: string;
  description: string;
  tags: string[];
  payout: string;
  payoutSuffix: string;
  isLive?: boolean;
  category: Category;
  campaignLabel: string;
  brandColor?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}
