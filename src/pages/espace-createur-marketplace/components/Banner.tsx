
import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-indigo-900 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
      <div className="relative z-10 space-y-4 max-w-xl">
        <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase text-white tracking-widest border border-white/20">
          Nouveauté
        </span>
        <h3 className="text-3xl font-bold text-white leading-tight">Optimisez vos gains avec les Smart Overlays™</h3>
        <p className="text-white/80">
          Nos nouveaux formats publicitaires détectent automatiquement les zones vides de votre vidéo pour ne jamais masquer votre visage ou les éléments clés de l'image.
        </p>
        <div className="flex gap-4 pt-2">
          <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
            Découvrir les formats
          </button>
          <button className="bg-black/20 backdrop-blur text-white border border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-black/30 transition-colors">
            Voir la démo
          </button>
        </div>
      </div>
      <div className="relative z-10 flex-1 flex justify-center">
        <div className="size-48 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 flex items-center justify-center rotate-3 shadow-2xl">
          <span className="material-symbols-outlined text-[80px] text-white opacity-50">auto_awesome</span>
        </div>
      </div>
      <div className="absolute top-0 right-0 size-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 size-32 bg-indigo-500/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
    </div>
  );
};

export default Banner;
