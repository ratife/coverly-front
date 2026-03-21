import { Filter, Calendar } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import CampaignTable from './components/CampaignTable';
import MediaLibrary from './components/MediaLibrary';
import { STATS } from './constants';

export default function CampaignList() {
  return (
    <div className="flex min-h-screen bg-background-dark text-slate-100">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header />
        
        <div className="p-8 space-y-8">
          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </section>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Content: Campaigns */}
            <section className="xl:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">Campagnes Actives</h4>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-border-dark rounded-lg transition-colors border border-[#3b3267]">
                    <Filter className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-border-dark rounded-lg transition-colors border border-[#3b3267]">
                    <Calendar className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <CampaignTable />
            </section>

            {/* Sidebar Content: Media Library */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">Médiathèque</h4>
                <button className="text-primary text-xs font-bold hover:underline">Voir Tout</button>
              </div>
              <MediaLibrary />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
