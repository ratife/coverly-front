import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { CampaignForm } from './components/CampaignForm';
import { SummaryPanel } from './components/SummaryPanel';
import { motion } from 'motion/react';

export default function Campaign() {
  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary/30">
      <Navbar />
      <Sidebar />
      
      <main className="ml-64 mt-16 p-8 min-h-[calc(100vh-64px)]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8"
        >
          <CampaignForm />
          <SummaryPanel />
        </motion.div>
      </main>
    </div>
  );
}
