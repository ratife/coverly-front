import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdOverlayPricingPage from './pages/adoverlay-pricing-page/AdOverlayPricingPage';
import AnnonceurCampaignPage from './pages/annonceur-campaign-manager/AnnonceurCampaignPage';
import CoverAdsMonetizePage from './pages/coverads-monetize-every-view/CoverAdsMonetizePage';
import EspaceCreateurPage from './pages/espace-createur-dashboard/EspaceCreateurPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-xl font-bold text-primary">Coverly Front</div>
            <div className="flex gap-4">
              <Link to="/" className="text-gray-600 hover:text-primary">Accueil</Link>
              <Link to="/adoverlay-pricing" className="text-gray-600 hover:text-primary">AdOverlay Pricing</Link>
              <Link to="/annonceur-campaign" className="text-gray-600 hover:text-primary">Annonceur Campaign</Link>
              <Link to="/coverads-monetize" className="text-gray-600 hover:text-primary">CoverAds Monetize</Link>
              <Link to="/espace-createur" className="text-gray-600 hover:text-primary">Espace Créateur</Link>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <div className="max-w-7xl mx-auto p-8">
              <h1 className="text-4xl font-bold mb-6">Bienvenue sur Coverly Front</h1>
              <p className="text-lg text-gray-600 mb-8">
                Cette application intègre les 4 pages générées dans le dossier page-brute.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-3">AdOverlay Pricing</h2>
                  <p className="text-gray-600 mb-4">Page de tarification pour les overlays publicitaires</p>
                  <Link to="/adoverlay-pricing" className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
                    Voir la page
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-3">Annonceur Campaign Manager</h2>
                  <p className="text-gray-600 mb-4">Tableau de bord pour gestionnaires de campagnes</p>
                  <Link to="/annonceur-campaign" className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
                    Voir la page
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-3">CoverAds Monetize Every View</h2>
                  <p className="text-gray-600 mb-4">Page de présentation pour monétisation</p>
                  <Link to="/coverads-monetize" className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
                    Voir la page
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-3">Espace Créateur Dashboard</h2>
                  <p className="text-gray-600 mb-4">Tableau de bord pour créateurs de contenu</p>
                  <Link to="/espace-createur" className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
                    Voir la page
                  </Link>
                </div>
              </div>
            </div>
          } />
          <Route path="/adoverlay-pricing" element={<AdOverlayPricingPage />} />
          <Route path="/annonceur-campaign" element={<AnnonceurCampaignPage />} />
          <Route path="/coverads-monetize" element={<CoverAdsMonetizePage />} />
          <Route path="/espace-createur" element={<EspaceCreateurPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

