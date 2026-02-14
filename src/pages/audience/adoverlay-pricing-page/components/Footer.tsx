import React from 'react';
import { LogoIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-border-dark bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LogoIcon />
              <h3 className="text-xl font-bold">AdOverlay</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Des outils puissants pour maximiser vos revenus publicitaires sur tous vos contenus.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Produit</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tarifs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Ressources</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tutoriels</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Statut</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Entreprise</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Presse</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-border-dark mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © 2024 AdOverlay. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              Conditions
            </a>
            <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;