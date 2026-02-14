
import React from 'react';
import { Info, HelpCircle, Users, MapPin, ExternalLink } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col gap-6 lg:w-80">
      {/* Earnings and Conditions */}
      <div className="bg-gradient-to-br from-[#4f46e5] to-[#3730a3] rounded-2xl p-6 shadow-xl shadow-indigo-900/20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-100">Earnings & Conditions</h3>
          <Info className="w-4 h-4 text-indigo-200" />
        </div>
        
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs text-indigo-100/70 block mb-1">Estimated Payment</span>
            <span className="text-3xl font-bold text-white">2 450 €</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-indigo-100/70 block mb-1">CPM Rate</span>
            <span className="text-lg font-semibold text-white">12,50 €</span>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-white/10">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-indigo-100/60 mb-2">Payment Timeline</h4>
          <div className="flex items-start gap-3">
            <div className="mt-1 flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-indigo-400"></div>
              <div className="w-0.5 h-6 bg-white/20 my-0.5"></div>
            </div>
            <p className="text-xs text-white/90">20% Downpayment <span className="text-white/50 block">(Upon signature)</span></p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-300/30 border-2 border-indigo-300/40"></div>
            </div>
            <p className="text-xs text-white/60">80% Net-30 <span className="text-white/40 block">(After final delivery)</span></p>
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="bg-[#161a27] border border-gray-800 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-bold text-white">Target Audience</h3>
        </div>

        <div className="space-y-5">
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-400">18-24 years</span>
              <span className="text-white font-bold">45%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full w-[45%] shadow-[0_0_8px_rgba(168,85,247,0.4)]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-400">25-34 years</span>
              <span className="text-white font-bold">35%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-[35%] shadow-[0_0_8px_rgba(99,102,241,0.4)]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-400">Other</span>
              <span className="text-white font-bold">20%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gray-600 rounded-full w-[20%]"></div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-3.5 h-3.5 text-gray-500" />
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Primary Locations</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {['USA', 'UK', 'Canada', 'Germany', 'France'].map(loc => (
              <span key={loc} className="px-2 py-1 bg-[#1a1d2d] border border-gray-700 rounded text-[10px] font-medium text-gray-300">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="bg-[#161a27] border border-gray-800 border-dashed rounded-2xl p-6 text-center">
        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="w-5 h-5 text-gray-400" />
        </div>
        <h3 className="text-sm font-bold text-white mb-2">Any questions?</h3>
        <p className="text-xs text-gray-500 mb-4 leading-relaxed">
          Chat with our campaign manager to clarify guidelines.
        </p>
        <button className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 mx-auto transition-colors">
          Contact Manager <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
