
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark hidden lg:flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
        </div>
        <div>
          <h1 className="font-bold text-lg leading-none">Espace Créateur</h1>
          <span className="text-xs text-slate-500 dark:text-slate-400">Portefeuille & Finances</span>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        <NavItem icon="dashboard" label="Tableau de bord" />
        <NavItem icon="video_library" label="Mes Contenus" />
        
        <div className="pt-4 pb-2 px-4">
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Personnel</span>
        </div>
        
        <NavItem icon="payments" label="Revenus & Retraits" active />
        <NavItem icon="receipt_long" label="Factures" />
        <NavItem icon="settings" label="Paramètres" />
      </nav>

      <div className="p-6 mt-auto">
        <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
          <p className="text-xs font-bold text-primary uppercase mb-1">Niveau de Compte</p>
          <p className="text-sm font-medium mb-2">Vérifié • Pro</p>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[100%] rounded-full"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => (
  <a 
    href="#" 
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
      active 
        ? 'bg-primary/10 text-primary font-semibold' 
        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-card-dark'
    }`}
  >
    <span className="material-symbols-outlined">{icon}</span>
    {label}
  </a>
);

export default Sidebar;
