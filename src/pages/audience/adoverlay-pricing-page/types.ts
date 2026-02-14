export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | 'Sur mesure';
  annualPrice: number | 'Sur mesure';
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  ctaVariant: 'secondary' | 'primary' | 'outline';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  pro: string | boolean;
  enterprise: string | boolean;
}