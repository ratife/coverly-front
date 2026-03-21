
import React from 'react';
import ThemeButton from '../../../../layouts/ThemeButton';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-background-dark/80 backdrop-blur-md border-b border-slate-800">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Marketplace des Campagnes</h2>
        <p className="text-sm text-slate-500">Trouvez les meilleurs partenariats publicitaires pour vos contenus.</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-card-dark rounded-lg px-3 py-2 border border-slate-700">
          <span className="material-symbols-outlined text-slate-500 text-xl">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-64 text-slate-200"
            placeholder="Filtrer par marque ou catégorie..."
            type="text"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <ThemeButton />
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full"></span>
        </button>
        <div className="size-10 rounded-full border-2 border-primary/30 p-0.5">
          <div
            className="size-full rounded-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdZZvr3fL38icjDeQCimLaF11AwQOGfRQOcJmfComVi5Z5lVmxyiMuGmcnMT7k_JbM0hcgmpll_a64pbaXP5nzBM4NiWh2yDriqXHk0ivOVgG2eKKd8Io0SzeMQeC6riuSKBe0J_V8md-rmEGscfqglnt3oWxrqZ0QrQf0I-D6AXxaor6qSiKisSJtCei5MJV3X5fOxbwHSZeTzYDY79uw_npSMef3gswYHHQPwWZ7CHVJiSCFXKYVeJS8p8oeFOfU-k4tuL0t73gv')",
            }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
