import React from 'react';

const CoverAdsMonetizePage: React.FC = () => {
  return (
    <div className="min-h-screen mesh-gradient flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white">ads_click</span>
            </div>
            <h1 className="text-2xl font-bold">CoverAds</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="font-medium hover:text-primary transition-colors">Solution</a>
            <a href="#" className="font-medium hover:text-primary transition-colors">Fonctionnalités</a>
            <a href="#" className="font-medium hover:text-primary transition-colors">Tarifs</a>
            <a href="#" className="font-medium hover:text-primary transition-colors">Ressources</a>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:opacity-90">
            Commencer
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Monétisez <span className="text-primary">chaque vue</span> de vos contenus
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10">
            Transformez votre audience en revenus stables avec des overlays publicitaires intelligents qui s'adaptent à votre contenu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 shadow-xl shadow-primary/30">
              Essayer gratuitement
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/10">
              Voir une démo
            </button>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-16">Pourquoi choisir CoverAds ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card-dark p-8 rounded-2xl border border-slate-200 dark:border-border-dark">
              <div className="size-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Revenus optimisés</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Algorithmes d'IA qui maximisent vos revenus sans compromettre l'expérience utilisateur.
              </p>
            </div>
            <div className="bg-white dark:bg-card-dark p-8 rounded-2xl border border-slate-200 dark:border-border-dark">
              <div className="size-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">settings</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Intégration simple</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Installation en 5 minutes. Compatible avec tous les principaux réseaux sociaux et plateformes.
              </p>
            </div>
            <div className="bg-white dark:bg-card-dark p-8 rounded-2xl border border-slate-200 dark:border-border-dark">
              <div className="size-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">analytics</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Analyses détaillées</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Tableaux de bord en temps réel pour suivre vos performances et optimiser vos campagnes.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Preview */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Voyez CoverAds en action</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Des overlays discrets mais efficaces qui génèrent des revenus sans perturber votre contenu.
            </p>
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden border-4 border-white dark:border-card-dark shadow-2xl">
                {/* Simulated video player */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-20 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-4xl">play_arrow</span>
                  </div>
                </div>
                {/* Overlay example */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-card-dark/90 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex items-center gap-4">
                  <div className="size-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">ads_click</span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold">Sponsorisé par TechGear Pro</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Découvrez le nouveau setup gaming</p>
                  </div>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold">
                    Découvrir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-16">Pour qui ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'live_tv', title: 'Streamers', desc: 'Twitch, YouTube Live, Kick' },
              { icon: 'videocam', title: 'Créateurs vidéo', desc: 'YouTube, TikTok, Instagram' },
              { icon: 'podcasts', title: 'Podcasteurs', desc: 'Audio et vidéo podcasts' },
              { icon: 'school', title: 'Éducateurs', desc: 'Cours en ligne, tutoriels' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-border-dark text-center">
                <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Rejoignez plus de 10 000 créateurs</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Qui ont déjà multiplié leurs revenus avec CoverAds
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alex, Gaming Streamer', quote: 'Mes revenus ont augmenté de 300% en 3 mois.' },
              { name: 'Marie, Créatrice Lifestyle', quote: 'L\'intégration la plus simple que j\'ai jamais utilisée.' },
              { name: 'Thomas, Éducateur Tech', quote: 'Mes étudiants adorent le contenu, les sponsors aussi.' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-card-dark p-8 rounded-2xl border border-slate-200 dark:border-border-dark">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 italic">{testimonial.quote}</p>
                <div className="font-bold">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Prêt à transformer votre audience ?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Inscrivez-vous pour recevoir nos conseils et offres exclusives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-6 py-4 rounded-xl text-slate-900"
              />
              <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100">
                S'inscrire
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">ads_click</span>
                </div>
                <h3 className="text-xl font-bold">CoverAds</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Monétisez chaque vue de vos contenus avec intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Produit</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Ressources</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Entreprise</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
            © 2024 CoverAds. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoverAdsMonetizePage;