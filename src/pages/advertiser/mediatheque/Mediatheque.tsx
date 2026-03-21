import { Filter, Calendar } from 'lucide-react';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import StatCard from '../shared/StatCard';
import CampaignTable from './components/CampaignTable';
import MediaLibrary from './components/MediaLibrary';
import { STATS } from '../shared/constants';

export default function Mediatheque() {
  return (
    <div className="flex min-h-screen bg-background-dark text-slate-100">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header />
        
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 xl:grid-cols-1 gap-8">
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
