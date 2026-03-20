import { Link } from "react-router-dom";

export const MenuPublic = () => {
  return (  
       <>
            <Link to="/" className="font-medium hover:text-primary transition-colors">Acceuil</Link>
            <Link to="/pricing" className="font-medium hover:text-primary transition-colors">Tarifs</Link>
            <Link to="/l_adpro" className="font-medium hover:text-primary transition-colors">Annonceur</Link>
            <Link to="/l_pub" className="font-medium hover:text-primary transition-colors">Créateur de contenu</Link>
            <div className="relative group">
                <button className="font-medium hover:text-primary transition-colors flex items-center gap-1">
                Nouveautés
                <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                    <Link to="/contact" className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/5">Contact</Link>
                    <Link to="/about" className="block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/5">Apropos</Link>
                </div>
                </div>
            </div>
        </>
  );
}
