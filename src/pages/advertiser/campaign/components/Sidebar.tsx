import React from 'react';

export const Sidebar: React.FC = () => {
  const navItems = [
    { icon: 'dashboard', label: 'Tableau de bord', active: false },
    { icon: 'rocket_launch', label: 'Campagnes', active: true },
    { icon: 'perm_media', label: 'Médiathèque', active: false },
    { icon: 'insights', label: 'Analyses', active: false },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-surface border-r border-white/5 flex flex-col p-4 gap-2 font-body text-sm font-medium z-40">
      <div className="mb-6 px-2">
        <h2 className="text-primary font-bold text-lg">AdOverlay Pro</h2>
        <p className="text-slate-500 text-xs">Espace Annonceur</p>
      </div>
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${
              item.active 
                ? 'text-primary bg-primary/10' 
                : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <span 
              className="material-symbols-outlined text-xl group-hover:translate-x-1 duration-300"
              style={item.active ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span>{item.label}</span>
          </a>
        ))}
        <div className="mt-auto border-t border-white/5 pt-4">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:text-slate-200 hover:bg-white/5 rounded-lg transition-all group">
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 duration-300">settings</span>
            <span>Paramètres</span>
          </a>
        </div>
      </nav>
    </aside>
  );
};
