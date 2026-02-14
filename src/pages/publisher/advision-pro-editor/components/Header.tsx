
import React from 'react';

interface HeaderProps {
  campaignName: string;
  lastModified: string;
}

export const Header: React.FC<HeaderProps> = ({ campaignName, lastModified }) => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-panel-dark/80 backdrop-blur-md border-b border-slate-800 z-10">
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h2 className="text-sm font-bold text-white">Campagne : {campaignName}</h2>
          <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Dernière modification : {lastModified}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
          <span className="size-2 rounded-full bg-accent-success animate-pulse"></span>
          <span className="text-xs font-medium text-slate-300">Synchronisé</span>
        </div>
        <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all border border-slate-700">
          <span className="material-symbols-outlined text-lg">play_circle</span>
          Prévisualiser
        </button>
        <button className="flex items-center gap-2 bg-neon-blue hover:brightness-110 text-slate-900 px-6 py-2 rounded-lg font-bold transition-all shadow-lg shadow-neon-blue/20">
          Exporter la Cover
        </button>
      </div>
    </header>
  );
};
