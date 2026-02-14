
import React from 'react';
import { Calendar, Globe, Send, CheckCircle } from 'lucide-react';

interface CampaignHeaderProps {
  onApply: () => void;
}

const CampaignHeader: React.FC<CampaignHeaderProps> = ({ onApply }) => {
  return (
    <div className="bg-[#161a27] border border-gray-800/50 rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden group">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity"></div>
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="flex gap-6 items-center">
          <div className="w-20 h-20 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center overflow-hidden shrink-0 shadow-2xl">
            <div className="text-center">
              <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold">tech</span>
              <span className="block text-blue-400 font-bold text-lg leading-none mt-1">NOVA</span>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Summer Tech Launch 2024</h1>
              <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded uppercase tracking-wider flex items-center gap-1">
                <CheckCircle className="w-2.5 h-2.5" />
                Open
              </span>
            </div>
            <p className="text-gray-400 mb-4 font-medium">by <span className="text-purple-400 hover:underline cursor-pointer">TechNova Solutions</span></p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>Deadline: 30 Oct, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
          <button 
            onClick={onApply}
            className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20 active:scale-95 group/btn"
          >
            Apply Now
            <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </button>
          <p className="text-xs text-gray-500 text-center md:text-right">
            <span className="text-gray-300 font-semibold">342 creators</span> have already applied
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignHeader;
