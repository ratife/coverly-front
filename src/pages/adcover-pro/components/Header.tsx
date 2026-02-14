
import React from 'react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="h-20 flex items-center justify-between px-8 border-b border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
          <input 
            className="w-full bg-slate-100 dark:bg-surface-dark border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary transition-all text-slate-900 dark:text-white"
            placeholder="Rechercher par style, niche ou plateforme..."
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4 ml-8">
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-surface-dark p-1 rounded-lg">
          <button className="px-3 py-1.5 text-xs font-semibold rounded-md bg-white dark:bg-background-dark shadow-sm">À la une</button>
          <button className="px-3 py-1.5 text-xs font-semibold rounded-md text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors">Nouveautés</button>
          <button className="px-3 py-1.5 text-xs font-semibold rounded-md text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors">Populaires</button>
        </div>
        
        <div className="h-8 w-[1px] bg-slate-200 dark:bg-border-dark"></div>
        
        <button className="p-2 text-slate-500 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        
        <div className="size-9 rounded-full bg-slate-200 dark:bg-surface-dark overflow-hidden border-2 border-primary cursor-pointer hover:opacity-80 transition-opacity">
          <div 
            className="w-full h-full bg-center bg-cover" 
            style={{ backgroundImage: `url('https://picsum.photos/seed/user/100/100')` }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
