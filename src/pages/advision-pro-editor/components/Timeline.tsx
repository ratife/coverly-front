
import React from 'react';

interface TimelineProps {
  currentTime: string;
  totalTime: string;
}

export const Timeline: React.FC<TimelineProps> = ({ currentTime, totalTime }) => {
  return (
    <div className="h-48 bg-panel-dark border-t border-slate-800 flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800/50">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button className="material-symbols-outlined text-slate-400 hover:text-white">skip_previous</button>
            <button className="material-symbols-outlined text-white size-8 bg-slate-800 rounded-full flex items-center justify-center">play_arrow</button>
            <button className="material-symbols-outlined text-slate-400 hover:text-white">skip_next</button>
          </div>
          <div className="text-xs font-mono text-neon-blue">{currentTime} / {totalTime}</div>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-slate-500 text-sm">zoom_out</span>
          <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-slate-600"></div>
          </div>
          <span className="material-symbols-outlined text-slate-500 text-sm">zoom_in</span>
        </div>
      </div>

      <div className="flex-1 relative overflow-x-auto custom-scrollbar flex items-center">
        <div className="min-w-full px-6 space-y-2">
          {/* Video Track */}
          <div className="h-10 bg-slate-800/30 rounded border border-slate-700/50 flex items-center relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-slate-700/50 border-r border-slate-600"></div>
            <span className="ml-4 text-[10px] font-bold text-slate-500 uppercase z-10">Vidéo Source</span>
          </div>
          
          {/* Overlay Track */}
          <div className="h-10 bg-neon-purple/5 rounded border border-neon-purple/30 flex items-center relative overflow-hidden group">
            <div className="absolute left-[15%] top-0 bottom-0 w-[60%] bg-neon-purple/20 border-x-2 border-neon-purple neon-border-purple flex items-center justify-between px-3 cursor-pointer">
              <span className="text-[10px] font-bold text-neon-purple uppercase">Overlay Pub : TechGear</span>
              <div className="flex gap-1">
                <div className="size-1 bg-neon-purple rounded-full"></div>
                <div className="size-1 bg-neon-purple rounded-full"></div>
              </div>
            </div>
            <span className="ml-4 text-[10px] font-bold text-slate-600 uppercase">Animations Pub</span>
          </div>
        </div>

        {/* Playhead */}
        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-white z-20 shadow-[0_0_10px_white]">
          <div className="absolute -top-1 -translate-x-1/2 size-3 bg-white rotate-45"></div>
        </div>
      </div>
    </div>
  );
};
