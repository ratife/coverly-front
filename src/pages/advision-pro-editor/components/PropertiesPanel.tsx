
import React from 'react';
import type { OverlayElement, ImpactAnalysis } from '../types';

interface PropertiesPanelProps {
  element?: OverlayElement;
  impact: ImpactAnalysis;
  onUpdate: (updates: Partial<OverlayElement>) => void;
  onDelete: () => void;
}

export const PropertiesPanel: React.FC<PropertiesPanelProps> = ({ element, impact, onUpdate, onDelete }) => {
  if (!element) return (
    <aside className="w-80 border-l border-slate-800 bg-panel-dark flex flex-col hidden xl:flex p-6">
      <div className="text-slate-500 italic text-center mt-20">Sélectionnez un élément pour voir ses propriétés</div>
    </aside>
  );

  return (
    <aside className="w-80 border-l border-slate-800 bg-panel-dark flex flex-col hidden xl:flex">
      <div className="p-6 border-b border-slate-800">
        <h3 className="font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-neon-purple">settings_suggest</span>
          Propriétés de l'Élément
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
        {/* Geometry */}
        <section className="space-y-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Géométrie</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-slate-400">Position X</label>
              <input 
                className="w-full bg-slate-900 border-slate-800 text-white rounded-lg text-xs focus:border-neon-blue focus:ring-0" 
                type="number" 
                value={element.x} 
                onChange={(e) => onUpdate({ x: parseInt(e.target.value) || 0 })}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-slate-400">Position Y</label>
              <input 
                className="w-full bg-slate-900 border-slate-800 text-white rounded-lg text-xs focus:border-neon-blue focus:ring-0" 
                type="number" 
                value={element.y} 
                onChange={(e) => onUpdate({ y: parseInt(e.target.value) || 0 })}
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="space-y-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Contenu</p>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label className="text-xs text-slate-400">Titre</label>
              <input 
                className="w-full bg-slate-900 border-slate-800 text-white rounded-lg text-xs focus:border-neon-blue focus:ring-0" 
                type="text" 
                value={element.title}
                onChange={(e) => onUpdate({ title: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-slate-400">Sous-titre</label>
              <input 
                className="w-full bg-slate-900 border-slate-800 text-white rounded-lg text-xs focus:border-neon-blue focus:ring-0" 
                type="text" 
                value={element.subtitle || ''}
                onChange={(e) => onUpdate({ subtitle: e.target.value })}
              />
            </div>
          </div>
        </section>

        {/* Style */}
        <section className="space-y-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Style Visuel</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs text-slate-400">Opacité</label>
              <span className="text-[10px] text-neon-blue font-bold">{element.opacity}%</span>
            </div>
            <input 
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-neon-blue" 
              type="range" 
              min="0" 
              max="100" 
              value={element.opacity}
              onChange={(e) => onUpdate({ opacity: parseInt(e.target.value) })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-slate-400">Arrière-plan</label>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => onUpdate({ backgroundType: 'mica' })}
                className={`flex-1 py-2 border text-[10px] font-bold rounded-lg transition-colors ${element.backgroundType === 'mica' ? 'bg-slate-900 border-neon-blue text-neon-blue' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
              >Mica Effect</button>
              <button 
                onClick={() => onUpdate({ backgroundType: 'solid' })}
                className={`flex-1 py-2 border text-[10px] font-bold rounded-lg transition-colors ${element.backgroundType === 'solid' ? 'bg-slate-900 border-neon-blue text-neon-blue' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
              >Solide</button>
            </div>
          </div>
        </section>

        {/* Behavior */}
        <section className="space-y-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Comportement</p>
          <select 
            value={element.behavior}
            onChange={(e) => onUpdate({ behavior: e.target.value as any })}
            className="w-full bg-slate-900 border-slate-800 text-white rounded-lg text-xs focus:border-neon-purple focus:ring-0"
          >
            <option value="hover">Apparition au Survol</option>
            <option value="always">Toujours Visible</option>
            <option value="end">Fin de Vidéo</option>
          </select>
        </section>

        {/* AI Impact Score */}
        <div className="mt-8 p-4 bg-gradient-to-br from-neon-purple/10 to-transparent rounded-2xl border border-neon-purple/20 group relative cursor-help">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-neon-purple text-sm">auto_graph</span>
            <span className="text-xs font-bold text-white">Impact Estimé (AI)</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">+{impact.score}%</span>
            <span className="text-[10px] text-slate-400">Engagement</span>
          </div>
          <p className="mt-2 text-[10px] text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">
            {impact.reasoning}
          </p>
        </div>
      </div>

      <div className="p-6 border-t border-slate-800">
        <button 
          onClick={onDelete}
          className="w-full py-3 bg-slate-800 text-white rounded-xl text-sm font-bold hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/50 border border-transparent transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">delete</span>
          Supprimer le Calque
        </button>
      </div>
    </aside>
  );
};
