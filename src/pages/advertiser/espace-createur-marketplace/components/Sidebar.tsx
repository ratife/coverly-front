
import React from 'react';
import { NAV_ITEMS, GESTION_ITEMS } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-800 bg-background-dark hidden lg:flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-2xl">layers</span>
        </div>
        <div>
          <h1 className="font-bold text-lg leading-none">Espace Créateur</h1>
          <span className="text-xs text-slate-500">Marketplace Campagnes</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
              item.active
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-slate-400 hover:bg-card-dark'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </a>
        ))}

        <div className="pt-4 pb-2 px-4">
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Gestion</span>
        </div>

        {GESTION_ITEMS.map((item) => (
          <a
            key={item.id}
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-card-dark transition-colors"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-card-dark p-4 rounded-xl border border-slate-800">
          <p className="text-xs font-medium mb-2">Statut de Certification</p>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-accent-success text-sm">verified</span>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Créateur Vérifié</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
