
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Portefeuille et Retraits</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Gérez vos gains et configurez vos méthodes de paiement.</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-slate-100 dark:bg-card-dark hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg font-bold transition-all border border-slate-200 dark:border-slate-700">
          <span className="material-symbols-outlined text-xl">download</span>
          Exporter (.csv)
        </button>
        <div className="size-10 rounded-full border-2 border-primary p-0.5 cursor-pointer">
          <div 
            className="size-full rounded-full bg-cover bg-center" 
            style={{ backgroundImage: `url('https://picsum.photos/seed/creator/100/100')` }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
