import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="text-center mb-32">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-12">
        <h2 className="text-4xl font-bold mb-6">Prêt à maximiser vos revenus ?</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          Rejoignez plus de 10 000 créateurs qui utilisent déjà AdOverlay pour monétiser leurs contenus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-xl shadow-primary/30">
            Essayer gratuitement pendant 14 jours
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-all">
            Voir une démo
          </button>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-500 mt-8">
          Aucune carte de crédit requise • Annulation à tout moment
        </p>
      </div>
    </section>
  );
};

export default CTASection;