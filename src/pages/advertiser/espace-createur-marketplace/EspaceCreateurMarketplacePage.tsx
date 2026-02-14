
import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CampaignCard from './components/CampaignCard';
import Banner from './components/Banner';
import { CAMPAIGNS } from './constants';
import { Category, type Campaign } from './types';

const EspaceCreateurMarketplacePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCampaigns = useMemo(() => {
    return CAMPAIGNS.filter((campaign) => {
      const matchesCategory =
        selectedCategory === Category.ALL || campaign.category === selectedCategory;
      const matchesSearch =
        campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleApply = (campaign: Campaign) => {
    alert(`Candidature envoyée pour la campagne : ${campaign.title}`);
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-y-auto custom-scrollbar">
        <Header onSearch={setSearchQuery} />

        <div className="p-8 space-y-8">
          {/* Filters and Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {(Object.values(Category) as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm font-bold rounded-lg transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-card-dark text-slate-400 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-3 bg-card-dark p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded transition-all ${
                  viewMode === 'grid' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="material-symbols-outlined text-sm">grid_view</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded transition-all ${
                  viewMode === 'list' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="material-symbols-outlined text-sm">list</span>
              </button>
            </div>
          </div>

          {/* Campaigns Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredCampaigns.map((campaign) => (
              <CampaignCard 
                key={campaign.id} 
                campaign={campaign} 
                onApply={handleApply}
              />
            ))}
            {filteredCampaigns.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <span className="material-symbols-outlined text-6xl text-slate-700 mb-4 block">search_off</span>
                <p className="text-slate-500 font-medium">Aucune campagne ne correspond à votre recherche.</p>
              </div>
            )}
          </div>

          {/* Featured Banner */}
          <Banner />

          {/* Footer Branding (Subtle) */}
          <footer className="pt-8 pb-12 text-center border-t border-slate-800">
            <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">
              © 2024 Espace Créateur • Marketplace des Campagnes
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default EspaceCreateurMarketplacePage;
