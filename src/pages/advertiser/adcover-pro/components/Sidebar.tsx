
import React from 'react';

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onCategoryChange }) => {
  const navItems = [
    { label: 'Tous les Modèles', icon: 'grid_view' },
    { label: 'Tendances', icon: 'trending_up' },
  ];

  const categories = [
    { label: 'Gaming', icon: 'sports_esports', color: 'text-purple-500' },
    { label: 'Style de vie', icon: 'favorite', color: 'text-pink-500' },
    { label: 'Tech', icon: 'memory', color: 'text-blue-500' },
    { label: 'Minimaliste', icon: 'horizontal_rule', color: 'text-emerald-500' },
    { label: 'Audacieux', icon: 'content_cut', color: 'text-amber-500' },
  ];

  return (
    <aside className="w-64 flex flex-col border-r border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-1.5 rounded-lg">
          <span className="material-symbols-outlined text-white text-2xl">layers</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight">AdCover Pro</h2>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
        <div className="pb-4">
          <p className="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Bibliothèque</p>
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={() => onCategoryChange(item.label)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium ${
                activeCategory === item.label 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-surface-dark'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="pb-4 pt-2">
          <p className="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Catégories</p>
          {categories.map(cat => (
            <button
              key={cat.label}
              onClick={() => onCategoryChange(cat.label)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeCategory === cat.label 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-surface-dark'
              }`}
            >
              <span className={`material-symbols-outlined ${cat.color}`}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-border-dark">
        <div className="bg-gradient-to-br from-primary to-indigo-600 p-4 rounded-xl text-white">
          <p className="text-xs font-bold uppercase mb-1">Passer à Pro</p>
          <p className="text-sm opacity-90 mb-3">Accédez à tous nos modèles de covers premium.</p>
          <button className="w-full bg-white text-primary text-sm font-bold py-2 rounded-lg hover:bg-opacity-90 transition-all">
            Mettre à niveau
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
