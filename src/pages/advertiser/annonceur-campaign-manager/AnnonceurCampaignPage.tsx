import React from 'react';

const AnnonceurCampaignPage: React.FC = () => {
  const chartData1 = [
    { val: 10 }, { val: 20 }, { val: 15 }, { val: 25 }, { val: 22 }, { val: 30 }
  ];
  const chartData2 = [
    { val: 5 }, { val: 12 }, { val: 18 }, { val: 14 }, { val: 24 }, { val: 28 }
  ];
  const chartData3 = [
    { val: 12 }, { val: 14 }, { val: 11 }, { val: 16 }, { val: 18 }, { val: 22 }
  ];

  return (
    <div className="flex min-h-screen overflow-hidden bg-background-dark text-slate-100 font-display">
      {/* Sidebar */}
      <div className="w-64 bg-card-dark border-r border-border-dark p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white">campaign</span>
          </div>
          <h2 className="text-xl font-bold">Campaign Manager</h2>
        </div>
        
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">dashboard</span>
            Tableau de bord
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined">campaign</span>
            Campagnes
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined">analytics</span>
            Analytics
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined">group</span>
            Audience
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined">payments</span>
            Facturation
          </a>
        </nav>
      </div>
      
      <main className="flex-1 flex flex-col h-screen overflow-y-auto custom-scrollbar">
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-background-dark/80 backdrop-blur-md border-b border-border-dark">
          <div>
            <h1 className="text-2xl font-bold">Tableau de bord Annonceur</h1>
            <p className="text-sm text-slate-400">Gérez vos campagnes publicitaires en temps réel</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold hover:opacity-90">
              + Nouvelle campagne
            </button>
            <div className="size-10 rounded-full bg-slate-700"></div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card-dark rounded-2xl p-6 border border-border-dark">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-slate-400">Total Dépensé</p>
                  <p className="text-3xl font-bold mt-2">12 450,00 €</p>
                </div>
                <div className="text-accent-success text-sm font-bold bg-accent-success/10 px-2 py-1 rounded">
                  +8.4%
                </div>
              </div>
              <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4"></div>
              </div>
            </div>
            
            <div className="bg-card-dark rounded-2xl p-6 border border-border-dark">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-slate-400">Impressions Actives</p>
                  <p className="text-3xl font-bold mt-2">1,8M</p>
                </div>
                <div className="text-accent-success text-sm font-bold bg-accent-success/10 px-2 py-1 rounded">
                  +15%
                </div>
              </div>
              <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-2/3"></div>
              </div>
            </div>
            
            <div className="bg-card-dark rounded-2xl p-6 border border-border-dark">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-slate-400">CTR Moyen</p>
                  <p className="text-3xl font-bold mt-2">3.24%</p>
                </div>
                <div className="text-accent-success text-sm font-bold bg-accent-success/10 px-2 py-1 rounded">
                  +0.4%
                </div>
              </div>
              <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/2"></div>
              </div>
            </div>
          </div>

          {/* Campaign Table */}
          <div className="bg-card-dark rounded-2xl border border-border-dark overflow-hidden">
            <div className="p-6 border-b border-border-dark">
              <h3 className="text-xl font-bold">Campagnes Actives</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-dark">
                    <th className="text-left p-4 text-slate-400">Campagne</th>
                    <th className="text-left p-4 text-slate-400">Statut</th>
                    <th className="text-left p-4 text-slate-400">Budget</th>
                    <th className="text-left p-4 text-slate-400">Impressions</th>
                    <th className="text-left p-4 text-slate-400">CTR</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Summer Sale 2024', status: 'Active', budget: '5 000€', impressions: '450K', ctr: '3.8%' },
                    { name: 'Product Launch', status: 'Active', budget: '3 200€', impressions: '320K', ctr: '4.2%' },
                    { name: 'Brand Awareness', status: 'Paused', budget: '8 000€', impressions: '780K', ctr: '2.9%' },
                    { name: 'Holiday Campaign', status: 'Active', budget: '6 500€', impressions: '520K', ctr: '3.5%' },
                  ].map((campaign, idx) => (
                    <tr key={idx} className="border-b border-border-dark/50 hover:bg-white/5">
                      <td className="p-4 font-medium">{campaign.name}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${campaign.status === 'Active' ? 'bg-accent-success/10 text-accent-success' : 'bg-accent-warning/10 text-accent-warning'}`}>
                          {campaign.status}
                        </span>
                      </td>
                      <td className="p-4">{campaign.budget}</td>
                      <td className="p-4">{campaign.impressions}</td>
                      <td className="p-4 font-bold">{campaign.ctr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Audience Metrics */}
            <div className="bg-card-dark rounded-2xl p-6 border border-border-dark xl:col-span-2">
              <h3 className="text-xl font-bold mb-6">Métriques d'Audience</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-400 mb-2">Âge moyen</p>
                  <p className="text-2xl font-bold">28 ans</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Genre</p>
                  <p className="text-2xl font-bold">65% H / 35% F</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Localisation</p>
                  <p className="text-2xl font-bold">France</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Engagement</p>
                  <p className="text-2xl font-bold">4.2/5</p>
                </div>
              </div>
            </div>

            {/* Promo Card */}
            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20 relative overflow-hidden flex flex-col justify-center">
              <div className="relative z-10">
                <div className="size-12 bg-primary rounded-xl flex items-center justify-center mb-4 text-white">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <h4 className="font-bold text-xl leading-tight text-white">Boostez votre visibilité</h4>
                <p className="text-slate-400 text-sm mt-2">Accédez aux placements premium sur les créateurs certifiés.</p>
                <button className="mt-6 w-full bg-primary text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all">
                  Voir les offres Premium
                </button>
              </div>
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnnonceurCampaignPage;