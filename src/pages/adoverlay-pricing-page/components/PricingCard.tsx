import React from 'react';
import type { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isAnnual }) => {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const priceDisplay = typeof price === 'number' ? `${price}€` : price;

  return (
    <div 
      className={`relative flex flex-col p-8 rounded-xl border transition-all duration-300 hover:-translate-y-2
        ${plan.isPopular 
          ? 'border-2 border-primary bg-white dark:bg-card-dark pro-glow scale-105 z-10' 
          : 'border-slate-200 dark:border-border-dark bg-white dark:bg-card-dark'
        }`}
    >
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
          Plus Populaire
        </div>
      )}
      
      <div className="mb-8">
        <h3 className={`text-lg font-bold mb-2 ${plan.isPopular ? 'text-primary' : ''}`}>
          {plan.name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
          {plan.description}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black">{priceDisplay}</span>
          {typeof price === 'number' && (
            <span className="text-slate-500 dark:text-slate-400 text-sm">/mois</span>
          )}
        </div>
      </div>

      <button 
        className={`w-full py-3 px-4 rounded-lg font-bold text-sm mb-8 transition-all
          ${plan.ctaVariant === 'primary' 
            ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:opacity-90' 
            : plan.ctaVariant === 'secondary'
            ? 'bg-slate-100 dark:bg-border-dark hover:bg-slate-200 dark:hover:bg-opacity-80'
            : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90'
          }`}
      >
        {plan.ctaText}
      </button>

      <div className="space-y-4">
        {plan.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 text-sm">
            <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;