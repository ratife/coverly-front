import React, { useState } from 'react';

const EspaceCreateurPage: React.FC = () => {
  const [insight, setInsight] = useState<string | null>("Analyse IA : Vos contenus gaming génèrent 40% de plus de revenus que la moyenne. Essayez de publier plus souvent entre 18h et 22h.");
  const [loadingInsight, setLoadingInsight] = useState(false);

  const fetchInsight = async () => {
    setLoadingInsight(true);
    // Simulate API call
    setTimeout(() => {
      setInsight("Nouvelle analyse : Votre audience est particulièrement réceptive aux overlays de produits tech. Pensez à cibler ces marques pour vos prochaines collaborations.");
      setLoadingInsight(false);
    }, 1000);
  };

  const STATS = [
    { label: 'Revenus du mois', value: '2 845,50 €', change: '+12%', color: 'text-accent-success' },
    { label: 'Vues totales', value: '1.2M', change: '+8%', color: 'text-primary' },
    { label: 'Taux d\'engagement', value: '4.8%', change: '+0.3%', color: 'text-accent-success' },
  ];

  const RECENT_CONTENT = [
    { id: 1, title: 'Setup Gaming Ultime', adTitle: 'Sponsor: TechGear Pro', earnings: '450,00 €', status: 'En direct', thumbnail: 'https://picsum.photos/seed/gaming/100/100' },
    { id: 2, title: 'Review Smartphone Pro', adTitle: 'Sponsor: PhoneMax', earnings: '320,00 €', status: 'Terminé', thumbnail: 'https://picsum.photos/seed/phone/100/100' },
    { id: 3, title: 'Tutoriel Montage Video', adTitle: 'Sponsor: EditMaster', earnings: '280,00 €', status: 'En direct', thumbnail: 'https://picsum.photos/seed/edit/100/100' },
  ];

  const TOP_CAMPAIGNS = [
    { id: 1, name: 'TechGear Pro', type: 'Équipement Gaming', revenue: '1 240€', growth: '+18%', progress: 75, icon: 'sports_esports', colorClass: 'bg-primary/20 text-primary' },
    { id: 2, name: 'PhoneMax', type: 'Smartphones', revenue: '890€', growth: '+12%', progress: 60, icon: 'smartphone', colorClass: 'bg-accent-success/20 text-accent-success' },
    { id: 3, name: 'EditMaster', type: 'Logiciels', revenue: '720€', growth: '+8%', progress: 45, icon: 'edit', colorClass: 'bg-accent-warning/20 text-accent-warning' },
  ];

  return (
    <div className="flex min-h-screen overflow-hidden bg-background-dark">
      {/* Sidebar */}
      <div className="w-64 bg-card-dark border-r border-border-dark p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white">person</span>
          </div>
          <h2 className="text-xl font-bold">Espace Créateur</h2>
        </div>
        
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">dashboard</span>
            Tableau de bord
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined">video_library</span>
            Mes contenus
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined">trending_up</span>
            Analytics
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined">payments</span>
            Revenus
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined">campaign</span>
            Campagnes
          </a>
        </nav>
      </div>
      
      <main className="flex-1 flex flex-col h-screen overflow-y-auto custom-scrollbar">
        {/* Header */}
        <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between px-8 py-4 bg-background-dark/80 backdrop-blur-md border-b border-border-dark gap-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Bonjour, Alex 👋</h2>
            <p className="text-sm text-slate-400">Voici le résumé de la performance de vos contenus.</p>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden md:flex items-center bg-card-dark rounded-lg px-3 py-2 border border-slate-700">
              <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-sm w-48 text-slate-200 placeholder:text-slate-500" 
                placeholder="Rechercher..." 
                type="text"
              />
            </div>
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-xl">cloud_upload</span>
              Upload Rapide
            </button>
            <div className="size-10 rounded-full border-2 border-primary p-0.5">
              <div 
                className="size-full rounded-full bg-cover bg-center" 
                style={{ backgroundImage: "url('https://picsum.photos/seed/alex/100/100')" }}
              ></div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* AI Insight Bar */}
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-2xl flex items-center gap-4">
            <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0 animate-pulse">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Analyse IA en direct</p>
              <p className="text-sm text-slate-200">
                {loadingInsight ? 'Génération des conseils personnalisés...' : (insight || 'Analysons vos données pour optimiser vos revenus...')}
              </p>
            </div>
            <button 
              onClick={fetchInsight}
              disabled={loadingInsight}
              className="text-xs font-bold text-primary hover:underline px-3 py-1 rounded-full bg-primary/10 transition-colors"
            >
              Actualiser
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="bg-card-dark rounded-2xl p-6 border border-border-dark">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className={`text-sm font-bold ${stat.color} bg-opacity-10 px-2 py-1 rounded`}>
                    {stat.change}
                  </div>
                </div>
                <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full ${stat.color.replace('text-', 'bg-')} w-${i === 0 ? '3/4' : i === 1 ? '2/3' : '1/2'}`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left/Center Column */}
            <div className="xl:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Contenus Récents & Overlays Pub</h3>
                <a className="text-primary text-sm font-semibold hover:underline" href="#">Tout voir</a>
              </div>

              {/* Featured Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Featured 1 */}
                <div className="group relative bg-card-dark rounded-2xl overflow-hidden border border-slate-800">
                  <div className="aspect-video relative overflow-hidden bg-slate-900">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-500" 
                      style={{ backgroundImage: "url('https://picsum.photos/seed/morning/600/400')" }}
                    ></div>
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur text-white text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-wider">0:45</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all cursor-pointer">
                        <span className="material-symbols-outlined text-white fill-1">play_arrow</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-sm border border-white/20 p-2 rounded-lg flex items-center gap-3">
                      <div className="size-8 bg-white rounded flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm">branding_watermark</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] text-white/70 font-bold uppercase leading-none">Pub Overlay Active</p>
                        <p className="text-xs text-white font-medium">Lumina Energy Drink - Bas d'écran</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold truncate">Routine Matinale | Flux Créatif</h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-slate-500">Uploadé il y a 2h</span>
                      <div className="flex items-center gap-1 text-accent-success font-bold text-xs">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        12.4k
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured 2 */}
                <div className="group relative bg-card-dark rounded-2xl overflow-hidden border border-slate-800">
                  <div className="aspect-video relative overflow-hidden bg-slate-900">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-500" 
                      style={{ backgroundImage: "url('https://picsum.photos/seed/setup/600/400')" }}
                    ></div>
                    <div className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-wider">En direct</div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 bg-white p-3 rounded-lg shadow-2xl flex items-center gap-3">
                      <div className="size-10 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden border border-slate-200">
                         <img className="size-full object-cover" src="https://picsum.photos/seed/logo/50/50" alt="Brand" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[9px] text-slate-500 font-bold uppercase">Bannière Overlay</p>
                        <p className="text-xs text-slate-900 font-bold">TechGear Pro v2.0</p>
                      </div>
                      <span className="material-symbols-outlined text-slate-400">open_in_new</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold truncate">Nouveau Setup Bureau Studio</h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-slate-500">Uploadé il y a 5h</span>
                      <div className="flex items-center gap-1 text-accent-success font-bold text-xs">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        8.9k
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* List items */}
              <div className="space-y-3">
                {RECENT_CONTENT.map((item) => (
                  <div key={item.id} className="bg-card-dark p-4 rounded-xl border border-slate-800 flex items-center gap-4 hover:border-primary transition-colors cursor-pointer group">
                    <div className="size-12 rounded-lg bg-slate-700 overflow-hidden flex-shrink-0">
                      <div 
                        className="size-full bg-cover bg-center group-hover:scale-110 transition-transform" 
                        style={{ backgroundImage: `url(${item.thumbnail})` }}
                      ></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-sm truncate">{item.title}</h5>
                      <p className="text-xs text-slate-500">{item.adTitle}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm text-accent-success">{item.earnings}</p>
                      <p className={`text-[10px] uppercase ${item.status === 'En direct' ? 'text-primary font-bold' : 'text-slate-500'}`}>
                        {item.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Meilleures Campagnes</h3>
                <button className="material-symbols-outlined text-slate-500 hover:text-white transition-colors">more_vert</button>
              </div>

              <div className="bg-card-dark rounded-2xl border border-slate-800 p-2">
                <div className="space-y-1">
                  {TOP_CAMPAIGNS.map((camp) => (
                    <div key={camp.id} className="p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`size-12 rounded-lg flex items-center justify-center ${camp.colorClass}`}>
                          <span className="material-symbols-outlined">{camp.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-sm">{camp.name}</h5>
                          <p className="text-xs text-slate-500">{camp.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{camp.revenue}</p>
                          <p className="text-[10px] text-accent-success font-bold">{camp.growth}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="flex-1 bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${camp.colorClass.split(' ')[0].replace('text-', 'bg-')}`} 
                            style={{ width: `${camp.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500">{camp.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-slate-800">
                  <button className="w-full py-2 text-sm font-bold bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-slate-300">
                    Explorer plus de marques
                  </button>
                </div>
              </div>

              {/* Promo Card */}
              <div className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="font-bold text-lg leading-tight">Rejoignez le Programme Partenaire Premium</h4>
                  <p className="text-white/80 text-sm mt-2 opacity-90">Débloquez des taux de paiement 2x plus élevés et un support dédié.</p>
                  <button className="mt-6 bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold hover:scale-105 transition-transform shadow-xl shadow-black/20">
                    Passer au Premium
                  </button>
                </div>
                <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-[120px] opacity-10 rotate-12 group-hover:scale-110 transition-transform duration-700">verified_user</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EspaceCreateurPage;
