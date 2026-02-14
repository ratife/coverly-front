
import { Category, type Campaign, type NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard' },
  { id: 'content', label: 'Mes Contenus', icon: 'video_library' },
  { id: 'marketplace', label: 'Marketplace', icon: 'campaign', active: true },
  { id: 'analytics', label: 'Analytiques', icon: 'monitoring' },
];

export const GESTION_ITEMS: NavItem[] = [
  { id: 'revenues', label: 'Revenus', icon: 'account_balance_wallet' },
  { id: 'settings', label: 'Paramètres', icon: 'settings' },
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    title: 'Zenith Watches',
    brand: 'Zenith Watches',
    brandLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_Qktmdzzb3KGfdcj5QbK5GiCFjv4e1qwQK9tEl6rVGmS8tSIWcej0Z5K-7z8OhaI3useFMQk_FQbS3FnGBUuSSr8B2jSnlrSk6prwhU_nYIEEQDxWNzdV1p8RJNHj7X9P2EarhYLVQ65AgMK6eE0zFNlqIMrPqR_PnsXGkXk9iGe0CUadmkZAs2hNI2OouKzrKASjS0GTG9_PvbIov4jBfzDtJT3d7uSnMCFL_q4ku69_fOpT2-nSrBKOkHk7jBm8uSjiftyKq2nu',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjt6YLtTMd5n_9S-oAQDrnWjGzpMGaYQvPICVJO0SnovygFK00HQQpyicHZWreH5UiTX2-xXI4-vkyOcMnml0TWjWJdfzasPY1IbeBH92qdZWcGR7B3sJQ3RFQLccIgzC-bupzBRkW_Rgk1iy8lwKNp99S-Ux6Btr_6wN_5lEsBUvQRGT8zv_5hIn-YnxShDlrRdFcHuNbZJV7Sog62-V-TWc4_-925RbbhiK_FQZ4iwzPj2oWXVcIL9QvGyTuYIMDHflxozZnFCFo',
    description: 'Intégrez nos nouveaux cadrans solaires à vos vidéos lifestyle. Format Overlay interactif disponible.',
    tags: ['ENGAGEMENT ÉLEVÉ', 'STORY & FEED'],
    payout: '450 €',
    payoutSuffix: '/ 10k vus',
    isLive: true,
    category: Category.MODE,
    campaignLabel: 'Campagne Prestige 2024'
  },
  {
    id: '2',
    title: 'Velocity Pro',
    brand: 'Velocity Pro',
    brandLogo: 'bolt',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlL-Yb2iGc9oCcPJWd7ZR1KJNgkvuuBngK0wfk1Zt7O0ULMcnaXxy7P8_-3QEggzu2NGI_UH8YAbUkF-Dbi7cEHtnZvpkhEndmuWh1MO3Rk2PZMEloOrL8uHntlJl437_xbLeud6WtfOnsb2NuVtssdmQffwXBT_Pm_2coZgCAXAvtRkKBuTXJVA4h7xheBZ6_yWNxg4cuSJzaG6Dw9-QyNYjpLlE-xq68fWuiuWU3jFETRS5TFOuOvZk5bLAGcimIwBtLHy0tF_Fr',
    description: "Pour les créateurs tech et gaming. Overlay dynamique qui s'adapte à vos sessions de jeu intenses.",
    tags: ['VALIDATION AUTO', 'TWITCH OVERLAY'],
    payout: '280 €',
    payoutSuffix: '/ fixe',
    category: Category.TECH,
    campaignLabel: 'Sponsoring Gaming',
    brandColor: 'bg-indigo-600'
  },
  {
    id: '3',
    title: 'NeoFood Express',
    brand: 'NeoFood Express',
    brandLogo: 'restaurant',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBcy9FdEyNUw_aGTrmmON5rBDlpS-yDRGekvIqoBf4QXPV0SCJYvDSFoddzfJhxLE10fMH203IFA_voXx96RIXZmeCcOsX5pLYJeADroj1-G69AWrcNqvhEyk15epl1nQ5kax39RRKvPbyBC4hXJRchyV4MNtu_pXhdF7cmV6njERRnY2kblr9lQrAnxeTA3jRa7oEBDYPCs-RWOEJAtsIBASgc_yIlCpQK5XTS9ZAhofuqh8D8UuhZKl_EoDeRw7XrWfCD-yVhDWf',
    description: 'Campagne pour influenceurs food. Profitez de commissions bonus sur chaque commande passée via votre overlay.',
    tags: ['CONVERSION MAX', 'VIDEO IN-FEED'],
    payout: '15% CPA',
    payoutSuffix: '+ 50€ fixe',
    category: Category.CUISINE,
    campaignLabel: 'Food & Lifestyle',
    brandColor: 'bg-amber-500'
  },
  {
    id: '4',
    title: 'Cloud Scale',
    brand: 'Cloud Scale',
    brandLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_Qktmdzzb3KGfdcj5QbK5GiCFjv4e1qwQK9tEl6rVGmS8tSIWcej0Z5K-7z8OhaI3useFMQk_FQbS3FnGBUuSSr8B2jSnlrSk6prwhU_nYIEEQDxWNzdV1p8RJNHj7X9P2EarhYLVQ65AgMK6eE0zFNlqIMrPqR_PnsXGkXk9iGe0CUadmkZAs2hNI2OouKzrKASjS0GTG9_PvbIov4jBfzDtJT3d7uSnMCFL_q4ku69_fOpT2-nSrBKOkHk7jBm8uSjiftyKq2nu',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGGOv6WnKwR7m5U6gDOhE-x4js8bDmKxoK82OLVIp606i2gicsCYr1icaPCTlE6sx-nNCLTnc_CaaJ7_TmZ62kcMi-He4vNy09pH_5Iguf_VImjN3XfznzhY7dsCeKgVNemarNNQZZr-X_YLCQHPSWVSSZ555JSCg3b5xJbfIXgXzoymFX9mYrP9hy4OxPdX65Sbe4IfKSHaM5ldiPZAnNwPEAehsNfUdAT3dNpg3jFhyA5UC6NmmRiZfCoD0cPLsLAKJP94ggH2Vy',
    description: 'Partagez votre flux de travail en utilisant Cloud Scale. Campagne haut de gamme pour audiences professionnelles.',
    tags: ['B2B FOCUS', 'CONTENU LONG'],
    payout: '720 €',
    payoutSuffix: '/ campagne',
    category: Category.TECH,
    campaignLabel: 'Software & SaaS'
  },
];
