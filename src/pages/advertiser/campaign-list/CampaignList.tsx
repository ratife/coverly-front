import { Filter, Calendar } from 'lucide-react';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import CampaignTable from './components/CampaignTable';

export default function CampaignList() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-background-dark text-slate-800 dark:text-slate-100">
        <Sidebar />
        
        <main className="flex-1 flex flex-col h-screen overflow-y-auto">
          <Header />
        
        <div className="p-8 space-y-8">
         
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Content: Campaigns */}
            <section className="xl:col-span-4 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold">Campagnes Actives</h4>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-border-dark rounded-lg transition-colors border border-slate-200 dark:border-[#3b3267]">
                    <Filter className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-border-dark rounded-lg transition-colors border border-slate-200 dark:border-[#3b3267]">
                    <Calendar className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <CampaignTable />
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}
