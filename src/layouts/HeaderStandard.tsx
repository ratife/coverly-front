import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function HeaderStandard() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white">ads_click</span>
            </div>
            <h1 className="text-2xl font-bold">Coverly</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Acceuil</Link>
            <Link to="/adoverlay-pricing" className="font-medium hover:text-primary transition-colors">Tarifs</Link>
            <Link to="/annonceur-campaign" className="font-medium hover:text-primary transition-colors">Annonceur</Link>
            <Link to="/espace-createur" className="font-medium hover:text-primary transition-colors">Créateur</Link>
            <div className="relative group">
              <button className="font-medium hover:text-primary transition-colors flex items-center gap-1">
                Nouveautés
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/adcover-pro" className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/5">AdCover Pro</Link>
                  <Link to="/adoverlay-market" className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/5">Marketplace</Link>
                  <Link to="/creatorconnect" className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/5">CreatorConnect</Link>
                  <Link to="/advision-pro-editor" className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/5">AdVision Editor</Link>
                  <Link to="/espace-createur-portfolio" className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/5">Portfolio Créateur</Link>
                  <Link to="/espace-createur-marketplace" className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/5">Marketplace Créateur</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Bouton de changement de thème */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-300 dark:border-border-dark hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
              aria-label={`Changer en thème ${theme === 'dark' ? 'clair' : 'sombre'}`}
              title={`Changer en thème ${theme === 'dark' ? 'clair' : 'sombre'}`}
            >
              {theme === 'dark' ? (
                <span className="material-symbols-outlined text-yellow-500">light_mode</span>
              ) : (
                <span className="material-symbols-outlined text-slate-700">dark_mode</span>
              )}
            </button>
            
            <button className="hidden sm:block px-5 py-2 text-sm font-bold border border-slate-300 dark:border-border-dark rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
              Connexion
            </button>
            <button className="px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20">
              S'inscrire
            </button>
          </div>
        </div>
      </nav>
    </header>


  );
}
