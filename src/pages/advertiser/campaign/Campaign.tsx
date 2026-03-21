import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import { CampaignForm } from './components/CampaignForm';

export default function Campaign() {
  return (
    <div className="flex min-h-screen bg-background-dark text-slate-100">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header />
        
        <div className="p-8 space-y-8">
         
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Content: Campaigns */}
            <section className="xl:col-span-4 space-y-4">
              <CampaignForm />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}