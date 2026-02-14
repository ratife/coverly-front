
import { type Campaign, CampaignBadge } from './types';

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    title: 'Série Glow-Up Été',
    brand: 'Lumière Cosmetics',
    brandLogo: 'https://picsum.photos/id/45/100/100',
    industry: 'Beauté & Bien-être',
    rate: 35,
    bonus: '+15% Bonus',
    platform: 'TikTok',
    format: 'Reel 15s / Overlay Vidéo',
    duration: '14 Jours',
    description: 'Présentez le nouveau sérum Summer Glow avec notre filtre AR overlay. Idéal pour les créateurs lifestyle et beauté.',
    badge: CampaignBadge.TENDANCE,
    requirements: [
      'Minimum 10k vues mensuelles sur TikTok.',
      'Inclure le tag de la marque @LumiereCosmetics.',
      'Utiliser la piste audio officielle de la campagne.'
    ],
    viewsTarget: '35$ / 1k vues'
  },
  {
    id: '2',
    title: 'NeoNode: Assistant IA',
    brand: 'NeoNode Tech',
    brandLogo: 'https://picsum.photos/id/60/100/100',
    industry: 'Tech & Gaming',
    rate: 42,
    bonus: 'Sans Limite',
    platform: 'YouTube',
    format: 'Placement Produit YouTube Shorts',
    duration: 'En continu',
    description: 'Montrez comment NeoNode améliore votre flux de travail créatif dans un format court de 60s.',
    badge: CampaignBadge.HAUT_REVENU,
    requirements: [
      'Minimum 50k Abonnés.',
      'Démonstration en direct de l\'outil.',
      'Lien d\'affiliation dans la description.'
    ],
    viewsTarget: '42$ / 1k vues'
  },
  {
    id: '3',
    title: 'Lancement PureBite Snacks',
    brand: 'HealthyCo.',
    brandLogo: 'https://picsum.photos/id/102/100/100',
    industry: 'Alimentation',
    rate: 18,
    bonus: 'Paiement Rapide',
    platform: 'Instagram',
    format: 'Story Instagram + Lien Bio',
    duration: '24h',
    description: 'Test simple des barres PureBite. Parfait pour les micro-influenceurs fitness ou nutrition.',
    badge: CampaignBadge.NOUVEAU,
    requirements: [
      'Minimum 5k followers.',
      'Avis honnête face caméra.',
      'Partage du code promo unique.'
    ],
    viewsTarget: '18$ / 1k vues'
  },
  {
    id: '4',
    title: 'CyberShift VPN 2.0',
    brand: 'CyberShift Global',
    brandLogo: 'https://picsum.photos/id/201/100/100',
    industry: 'Logiciel',
    rate: 25,
    platform: 'YouTube',
    format: 'Intégration YouTube Long-format',
    duration: '60s Integration',
    description: 'Spot publicitaire intégré de 60s dans des vidéos tech longue durée. Budget élevé pour les grandes chaînes.',
    requirements: [
      'Chaîne focalisée sur la cybersécurité ou tech.',
      'Explication claire des fonctionnalités VPN.',
      'Appel à l\'action pour l\'essai gratuit.'
    ],
    viewsTarget: '25$ / 1k vues'
  },
  {
    id: '5',
    title: 'Verdant Home Living',
    brand: 'Verdant Co.',
    brandLogo: 'https://picsum.photos/id/302/100/100',
    industry: 'Déco & Maison',
    rate: 20,
    platform: 'TikTok',
    format: 'Campagne TikTok Duet',
    duration: 'Campagne de 7 jours',
    description: 'Nous recherchons des créateurs au mode de vie durable pour faire un duo avec notre vidéo de lancement.',
    badge: CampaignBadge.ECO_RESPONSABLE,
    requirements: [
      'Focus sur le minimalisme ou l\'écologie.',
      'Utilisation du hashtag #EcoLiving.',
      'Créativité dans le montage du duo.'
    ],
    viewsTarget: '20$ / 1k vues'
  },
  {
    id: '6',
    title: 'PixelFlow Design Suite',
    brand: 'PixelFlow Software',
    brandLogo: 'https://picsum.photos/id/400/100/100',
    industry: 'Design & Création',
    rate: 30,
    bonus: '+ Affiliation',
    platform: 'Multi-Plateforme',
    format: 'Multi-Plateforme (IG/TT)',
    duration: 'Indéterminée',
    description: 'Contenu éducatif montrant comment vous utilisez PixelFlow pour vos designs sur les réseaux sociaux.',
    requirements: [
      'Portfolio design visible.',
      'Tutoriel de 30-45 secondes.',
      'Engagement actif avec les commentaires.'
    ],
    viewsTarget: '30$ / 1k vues'
  }
];

export const RECOMMENDED_CAMPAIGNS = MOCK_CAMPAIGNS.slice(3, 5);
