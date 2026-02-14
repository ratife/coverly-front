import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CampaignCard from './components/CampaignCard';
import DetailDrawer from './components/DetailDrawer';
import { MOCK_CAMPAIGNS } from './constants';
import type { Campaign } from './types';

const AdOverlayMarketPage: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [filter, setFilter] = useState('Tous');

  const filteredCampaigns = filter === 'Tous' 
    ? MOCK_CAMPAIGNS 
    : MOCK_CAMPAIGNS.filter(c => c.platform.includes(filter) || c.badge === filter);

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white overflow-hidden">
      <Header />
      
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />

        <main className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-[#0e0c18] relative">
          {/* Filters Bar */}
          <div className="px-8 py-6 flex flex-wrap items-center gap-4 bg-white dark:bg-panel-dark/30 border-b border-slate-200 dark:border-[#292348] sticky top-0 z-40 backdrop-blur-md">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#292348] border border-slate-200 dark:border-transparent cursor-pointer hover:bg-slate-50 dark:hover:bg-[#352d5e] transition-colors">
              <span className="material-symbols-outlined text-sm">category</span>
              <span className="text-sm font-medium">Secteur : Tous</span>
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#292348] border border-slate-200 dark:border-transparent cursor-pointer hover:bg-slate-50 dark:hover:bg-[#352d5e] transition-colors">
              <span className="material-symbols-outlined text-sm">payments</span>
              <span className="text-sm font-medium">Budget : 500$+</span>
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </div>
            <div 
              onClick={() => setFilter(filter === 'TikTok' ? 'Tous' : 'TikTok')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border cursor-pointer transition-colors ${filter === 'TikTok' ? 'bg-primary text-white border-transparent' : 'bg-white dark:bg-[#292348] border-slate-200 dark:border-transparent'}`}
            >
              <span className="material-symbols-outlined text-sm">devices</span>
              <span className="text-sm font-medium">Plateforme : TikTok</span>
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </div>
            <div className="flex-1"></div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">Trier par : <span className="text-slate-900 dark:text-white font-medium">Plus récent</span></span>
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">swap_vert</span>
            </div>
          </div>

          {/* Grid Content */}
          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Campagnes à la Une</h2>
              <p className="text-slate-500 text-sm">Affichage de {filteredCampaigns.length} opportunités</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCampaigns.map((campaign) => (
                <CampaignCard 
                  key={campaign.id} 
                  campaign={campaign} 
                  onViewDetails={(c) => setSelectedCampaign(c)} 
                />
              ))}
            </div>
          </div>
        </main>

        {/* Backdrop for detail panel */}
        {selectedCampaign && (
          <div 
            className="fixed inset-0 bg-black/50 z-[55] backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCampaign(null)}
          />
        )}
        
        {/* Right Detail Panel */}
        <DetailDrawer 
          campaign={selectedCampaign} 
          onClose={() => setSelectedCampaign(null)} 
        />
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex justify-around items-center py-4 bg-white dark:bg-panel-dark border-t border-slate-200 dark:border-[#292348] shrink-0">
        <span className="material-symbols-outlined text-primary cursor-pointer">grid_view</span>
        <span className="material-symbols-outlined text-slate-400 cursor-pointer">campaign</span>
        <span className="material-symbols-outlined text-slate-400 cursor-pointer">analytics</span>
        <span className="material-symbols-outlined text-slate-400 cursor-pointer">person</span>
      </div>
    </div>
  );
};

export default AdOverlayMarketPage;