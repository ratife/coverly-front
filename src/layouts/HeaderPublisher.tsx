import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderStandard() {
  const [open, setOpen] = useState(false);

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
            <Link to="/adoverlay-pricing" className="font-medium hover:text-primary transition-colors">Fonctionnalités</Link>
            <Link to="/adoverlay-pricing" className="font-medium hover:text-primary transition-colors">Tarifs</Link>
            <Link to="/adoverlay-pricing" className="font-medium hover:text-primary transition-colors">Ressources</Link>
          </div>
          <div className="flex items-center gap-3">
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
