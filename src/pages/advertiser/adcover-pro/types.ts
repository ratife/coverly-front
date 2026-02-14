export interface Template {
  id: string;
  title: string;
  platform: 'TikTok' | 'Instagram' | 'YouTube';
  format: '9:16' | '1:1' | '16:9';
  image: string;
  badge?: string;
  badgeColor?: string;
  category: string;
  style?: string;
  animations?: string;
  complexity?: 'Basse' | 'Moyenne' | 'Élevée';
}

export type CategoryType = 'Gaming' | 'Style de vie' | 'Tech' | 'Minimaliste' | 'Audacieux';