import type { Campaign, MediaFile, Stat } from './types';

export const STATS: Stat[] = [
  {
    label: 'ROI Global',
    value: '285%',
    change: '+12.4%',
    trend: 'up',
    icon: 'DollarSign',
    color: 'text-primary',
  },
  {
    label: 'Total Impressions',
    value: '1 248 302',
    change: '+5.2%',
    trend: 'up',
    icon: 'Eye',
    color: 'text-blue-500',
  },
  {
    label: 'Portée Totale',
    value: '850 420',
    change: '+8.1%',
    trend: 'up',
    icon: 'Users',
    color: 'text-purple-500',
  },
  {
    label: 'CTR Moyen',
    value: '3.2%',
    change: '-2.4%',
    trend: 'down',
    icon: 'MousePointerClick',
    color: 'text-amber-500',
  },
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    name: 'Rush Été 2024',
    type: 'Overlay Gaming',
    startDate: '12 Mai',
    status: 'active',
    mediaUrl: 'https://picsum.photos/seed/summer/200/200',
    spent: 1420,
    budget: 2000,
  },
  {
    id: '2',
    name: 'Tech Unboxing Pre-roll',
    type: 'Lifestyle',
    startDate: '28 Avr',
    status: 'paused',
    mediaUrl: 'https://picsum.photos/seed/tech/200/200',
    spent: 3800,
    budget: 5000,
  },
  {
    id: '3',
    name: 'Promo App Fitness',
    type: 'Santé',
    startDate: '01 Juin',
    status: 'active',
    mediaUrl: 'https://picsum.photos/seed/fitness/200/200',
    spent: 120,
    budget: 1000,
  },
];

export const MEDIA_FILES: MediaFile[] = [
  {
    id: '1',
    name: 'banniere-laterale-v2.png',
    size: '1.2 Mo',
    date: '24 Oct 2023',
    type: 'image',
  },
  {
    id: '2',
    name: 'pre-roll-influencer-intro.mp4',
    size: '24.8 Mo',
    date: '22 Oct 2023',
    type: 'video',
  },
  {
    id: '3',
    name: 'mobile-overlay-final.jpg',
    size: '840 Ko',
    date: '18 Oct 2023',
    type: 'image',
  },
  {
    id: '4',
    name: 'assets-marque.zip',
    size: '14.2 Mo',
    date: '15 Oct 2023',
    type: 'archive',
  },
];
