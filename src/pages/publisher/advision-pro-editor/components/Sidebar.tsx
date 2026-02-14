
import React from 'react';

interface SidebarProps {
  renderingProgress: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ renderingProgress }) => {
  return (
    <aside className="w-20 lg:w-64 flex-shrink-0 border-r border-slate-800 bg-panel-dark flex flex-col z-20">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center text-white shadow-lg shadow-neon-blue/20">
          <span className="material-symbols-outlined text-2xl">layers</span>
        </div>
        <div className="hidden lg:block">
          <h1 className="font-bold text-lg leading-none">Éditeur</h1>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Mode Créatif</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800 text-neon-blue font-semibold border border-neon-blue/20 neon-border-blue transition-all" href="#">
          <span className="material-symbols-outlined">edit_square</span>
          <span className="hidden lg:inline">Éditeur Principal</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined">video_library</span>
          <span className="hidden lg:inline">Ma Bibliothèque</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined">analytics</span>
          <span className="hidden lg:inline">Stats de l'Overlay</span>
        </a>

        <div className="pt-6 pb-2 px-4 hidden lg:block">
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-600">Composants</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-2">
          {['Texte', 'Image', 'Bouton', 'Forme'].map((item, idx) => (
            <button key={item} className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-800/40 border border-slate-700 hover:border-neon-purple transition-all group">
              <span className="material-symbols-outlined text-slate-400 group-hover:text-neon-purple">
                {['text_fields', 'image', 'smart_button', 'shape_line'][idx]}
              </span>
              <span className="text-[10px] mt-1 hidden lg:inline">{item}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Rendu Cloud</p>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mb-2 overflow-hidden">
            <div 
              className="bg-neon-purple h-full rounded-full shadow-[0_0_8px_rgba(188,19,254,0.5)] transition-all duration-500" 
              style={{ width: `${renderingProgress}%` }}
            ></div>
          </div>
          <p className="text-[10px] text-slate-500">{renderingProgress}% Prêt</p>
        </div>
      </div>
    </aside>
  );
};
