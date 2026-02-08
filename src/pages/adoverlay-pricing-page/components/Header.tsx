import React from 'react';
import { LogoIcon } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-primary transition-transform group-hover:scale-110">
            <LogoIcon />
          </div>
          <h2 className="text-xl font-bold tracking-tight">AdOverlay</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Produits</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Fonctionnalités</a>
          <a className="text-sm font-medium text-primary" href="#">Tarifs</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Ressources</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-5 py-2 text-sm font-bold border border-slate-300 dark:border-border-dark rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
            Connexion
          </button>
          <button className="px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            S'inscrire
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;