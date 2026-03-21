import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50 flex items-center justify-between px-6 h-16 font-headline">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold tracking-tight text-primary">AdOverlay</span>
        <div className="hidden md:flex items-center gap-6">
          <span className="text-primary font-semibold cursor-pointer">Campagnes</span>
          <span className="text-slate-400 hover:bg-white/5 transition-colors px-3 py-1 rounded cursor-pointer">Analyses</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-slate-400 hover:text-primary p-2 transition-colors">notifications</button>
        <button className="material-symbols-outlined text-slate-400 hover:text-primary p-2 transition-colors">help_outline</button>
        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-white/10">
          <img 
            alt="User Avatar" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfgLxyqqWg_ZQeXUKP8B6Q4uwB-QRH0Vaqs_aUKiIuseCTjcSPpoUQCyGJhx_vo1ZDNFKN27DDanBDSffEHkqShZUTi6X89KINYIO7QaOdfH8s1gnlPFG0w8D12ESCwOlKvG5MGLCPp1lBgtfv9GwLLARO9qWNk1zOAIpIH2qWDaKKrn3pcTFpeSr2zubcuspdmc_WC5TML1w8jhXOM5949hz8BVNpqbhkfl8dw0awrhHVdqmiX1aDMGRwStTrn9W8jevzP1anD6dj"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
};
