import React, { useState } from 'react';
import Header from './components/Header';
import PricingCard from './components/PricingCard';
import ComparisonTable from './components/ComparisonTable';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { PRICING_PLANS } from './constants';

const AdOverlayPricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white selection:bg-primary selection:text-white">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24 overflow-hidden">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Des tarifs adaptés à votre croissance
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Maximisez vos revenus publicitaires avec des outils puissants d'overlay. 
            Choisissez le plan qui correspond à votre audience.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-primary' : 'text-slate-500'}`}>
              Mensuel
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex items-center cursor-pointer focus:outline-none"
              aria-label="Toggle billing cycle"
            >
              <div className={`w-14 h-7 rounded-full transition-colors duration-200 ${isAnnual ? 'bg-primary' : 'bg-slate-200 dark:bg-border-dark'}`}>
                <div className={`absolute top-[2px] left-[2px] bg-white w-6 h-6 rounded-full transition-transform duration-200 shadow-sm ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
              </div>
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-primary' : 'text-slate-500'}`}>
                Annuel
              </span>
              <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-full uppercase tracking-wider">
                -20%
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
          ))}
        </section>

        {/* Comparison Section */}
        <ComparisonTable />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default AdOverlayPricingPage;