import React from 'react';
import type { PricingPlan, FAQItem, ComparisonRow } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Pour les créateurs qui débutent.',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      '5% commission sur gains',
      'Templates de base',
      '1 compte social'
    ],
    ctaText: 'Commencer gratuitement',
    ctaVariant: 'secondary'
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Pour les créateurs en pleine croissance.',
    monthlyPrice: 49,
    annualPrice: 39, // approx 20% discount
    isPopular: true,
    features: [
      '3% commission sur gains',
      'Templates premium',
      'Multi-comptes (jusqu\'à 5)',
      'Support prioritaire'
    ],
    ctaText: 'Essayer Pro',
    ctaVariant: 'primary'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Solutions pour agences et studios.',
    monthlyPrice: 'Sur mesure',
    annualPrice: 'Sur mesure',
    features: [
      'Manager dédié 24/7',
      'Formats pub sur mesure',
      'Accès API complet',
      'Options White-label'
    ],
    ctaText: 'Contacter la vente',
    ctaVariant: 'outline'
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  { feature: 'Commission sur revenus', starter: '5%', pro: '3%', enterprise: 'Négociable' },
  { feature: 'Nombre de comptes', starter: '1', pro: '5', enterprise: 'Illimité' },
  { feature: 'Bibliothèque de templates', starter: 'Basique', pro: 'Premium', enterprise: 'Sur-mesure' },
  { feature: 'Analyse en temps réel', starter: false, pro: true, enterprise: true },
  { feature: 'Support technique', starter: 'Email', pro: 'Prioritaire 24/5', enterprise: 'Dédié 24/7' },
  { feature: 'Personnalisation marque blanche', starter: false, pro: false, enterprise: true }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Comment fonctionne la commission sur les gains ?',
    answer: 'Nous prélevons un petit pourcentage sur les revenus générés via nos overlays publicitaires. Ce montant est automatiquement déduit lors du versement de vos gains. Plus votre plan est élevé, moins la commission est importante.'
  },
  {
    question: 'Puis-je changer de forfait à tout moment ?',
    answer: 'Oui, vous pouvez passer à un forfait supérieur ou inférieur à tout moment depuis vos paramètres. Les modifications de facturation seront appliquées prorata temporis.'
  },
  {
    question: 'Quels réseaux sociaux sont supportés ?',
    answer: 'AdOverlay supporte actuellement Twitch, YouTube Live, Facebook Gaming et Kick. De nouveaux réseaux sont ajoutés régulièrement.'
  }
];

export const LogoIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
  </svg>
);