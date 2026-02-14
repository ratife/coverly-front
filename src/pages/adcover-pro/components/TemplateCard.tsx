
import React from 'react';
import type { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  onPreview: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onPreview }) => {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] bg-slate-200 dark:bg-surface-dark rounded-2xl overflow-hidden mb-4 shadow-xl shadow-black/5">
        <div 
          className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" 
          style={{ backgroundImage: `url('${template.image}')` }}
        />
        
        {template.badge && (
          <div className="absolute top-4 left-4">
            <span className={`${template.badgeColor || 'bg-primary'} text-white text-[10px] font-black uppercase px-2 py-1 rounded tracking-wider shadow-lg`}>
              {template.badge}
            </span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 backdrop-blur-[2px]">
          <button 
            onClick={onPreview}
            className="w-40 py-2.5 bg-white text-slate-900 rounded-xl font-bold text-sm shadow-xl flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">visibility</span>
            Aperçu Rapide
          </button>
          <button className="w-40 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-lg">edit</span>
            Appliquer à l'Éditeur
          </button>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg leading-none mb-1 text-slate-900 dark:text-white">{template.title}</h3>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
            <span className="material-symbols-outlined text-base">
              {template.platform === 'TikTok' ? 'music_note' : template.platform === 'YouTube' ? 'videocam' : 'camera_alt'}
            </span>
            <span>{template.platform} • {template.format}</span>
          </div>
        </div>
        <button className="text-slate-400 hover:text-pink-500 transition-colors">
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
