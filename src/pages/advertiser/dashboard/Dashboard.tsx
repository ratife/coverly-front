import { Filter, Calendar } from 'lucide-react';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import StatCard from '../shared/StatCard';
import { STATS } from '../shared/constants';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-background-dark text-slate-800 dark:text-slate-100">
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
            

            
          </div>
        </div>
      </main>
    </div>
  );
}
