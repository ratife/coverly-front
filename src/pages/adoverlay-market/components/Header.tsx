
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-slate-200 dark:border-[#292348] bg-white dark:bg-panel-dark z-50 shrink-0">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-primary p-1.5 rounded-lg shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-xl">layers</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">AdOverlay <span className="text-primary">Market</span></h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a className="text-primary font-semibold border-b-2 border-primary pb-1" href="#">Marketplace</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors pb-1" href="#">Mes Campagnes</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors pb-1" href="#">Analyses</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors pb-1" href="#">Paiements</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative group hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl">search</span>
          <input 
            className="bg-slate-100 dark:bg-[#292348] border-none rounded-lg pl-10 pr-4 py-2 w-64 focus:ring-2 focus:ring-primary text-sm transition-all outline-none" 
            placeholder="Rechercher des marques..." 
            type="text"
          />
        </div>
        <button className="p-2 rounded-lg bg-slate-100 dark:bg-[#292348] hover:bg-slate-200 dark:hover:bg-[#352d5e] transition-colors relative">
          <span className="material-symbols-outlined text-xl">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
          <img className="w-full h-full object-cover" src="https://picsum.photos/id/64/100/100" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
