import { Search, PlusCircle } from 'lucide-react';
import ThemeButton from '../../../layouts/ThemeButton';

export default function Header() {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-background-dark/50 backdrop-blur-md sticky top-0 z-10 border-b border-border-dark">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold tracking-tight">Gestion des Campagnes</h2>
        <p className="text-sm text-text-muted">Gérez et optimisez vos campagnes publicitaires</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Rechercher une campagne..."
            className="pl-10 pr-4 py-2 bg-border-dark border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/50 transition-all outline-none text-white"
          />
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20">
          <PlusCircle className="w-5 h-5" />
          Créer une Campagne
        </button>
        <ThemeButton/>
        <div className="flex items-center gap-4 ml-8">
          
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
      </div>
    </header>
  );
}