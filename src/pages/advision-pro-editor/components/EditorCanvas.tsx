
import React from 'react';
import type { OverlayElement } from '../types';

interface EditorCanvasProps {
  element?: OverlayElement;
  onUpdate: (updates: Partial<OverlayElement>) => void;
}

export const EditorCanvas: React.FC<EditorCanvasProps> = ({ element, onUpdate }) => {
  if (!element) return <div className="flex-1 flex items-center justify-center text-slate-500 italic">Aucun élément sélectionné</div>;

  return (
    <div className="flex-1 flex items-center justify-center p-12">
      <div className="relative max-w-4xl w-full aspect-video bg-black rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 group">
        {/* Mock Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80" 
          style={{ backgroundImage: `url('https://picsum.photos/seed/ad-background/1280/720')` }}
        ></div>

        {/* The Overlay Element */}
        <div 
          className={`absolute p-6 border-2 border-dashed border-neon-blue rounded-2xl flex items-center gap-6 cursor-move group/overlay neon-border-blue transition-all`}
          style={{ 
            left: `${element.x}px`, 
            top: `${element.y}px`,
            opacity: element.opacity / 100,
            backgroundColor: element.backgroundType === 'mica' ? 'rgba(15, 23, 42, 0.9)' : 'rgba(15, 23, 42, 1)',
            backdropFilter: element.backgroundType === 'mica' ? 'blur(16px)' : 'none'
          }}
        >
          <div className="absolute -top-3 -left-3 size-6 bg-neon-blue rounded-full flex items-center justify-center text-slate-900 scale-0 group-hover/overlay:scale-100 transition-transform">
            <span className="material-symbols-outlined text-xs font-bold">open_with</span>
          </div>

          {element.imageUrl && (
            <div className="size-16 bg-white rounded-lg p-2 shadow-xl shrink-0">
              <img alt="Brand Logo" className="size-full object-contain" src={element.imageUrl} />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h4 className="text-white font-bold text-lg truncate">{element.title}</h4>
            <p className="text-slate-400 text-sm truncate">{element.subtitle}</p>
          </div>

          {element.buttonText && (
            <button className="bg-neon-blue text-slate-900 px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-widest shadow-lg shadow-neon-blue/30 whitespace-nowrap">
              {element.buttonText}
            </button>
          )}
        </div>

        {/* Alignment Guides */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neon-purple/30"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-neon-purple/30"></div>
        </div>
      </div>
    </div>
  );
};
