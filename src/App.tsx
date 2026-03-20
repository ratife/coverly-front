import { Routes, Route } from 'react-router-dom';
import AnnonceurCampaignPage from './pages/advertiser/annonceur-campaign-manager/AnnonceurCampaignPage';
import EspaceCreateurPage from './pages/publisher/espace-createur-dashboard/EspaceCreateurPage';
import AdCoverProPage from './pages/advertiser/adcover-pro/AdCoverProPage';
import AdOverlayMarketPage from './pages/advertiser/adoverlay-market/AdOverlayMarketPage';
import CreatorConnectPage from './pages/publisher/creatorconnect/CreatorConnectPage';
import AdvisionProEditorPage from './pages/publisher/advision-pro-editor/AdvisionProEditorPage';
import EspaceCreateurPortfolioPage from './pages/publisher/espace-createur-portfolio/EspaceCreateurPortfolioPage';
import EspaceCreateurMarketplacePage from './pages/advertiser/espace-createur-marketplace/EspaceCreateurMarketplacePage';
import './App.css';
import { KeycloakProvider } from './keycloak/KeycloakProvider';
import HomePage from './pages/audience/HomePage';
import PricePage from './pages/audience/PricePage';

function App() {
  return (
    <KeycloakProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricePage />} />

          <Route path="adpro" element={<AnnonceurCampaignPage />} />
          <Route path="adpro/espace-createur-portfolio" element={<EspaceCreateurPortfolioPage />} />
          <Route path="adpro/espace-createur-marketplace" element={<EspaceCreateurMarketplacePage />} />
          <Route path="adpro/adcover-pro" element={<AdCoverProPage />} />

          <Route path="pub/advision-pro-editor" element={<AdvisionProEditorPage />} />
          <Route path="pub/espace-createur" element={<EspaceCreateurPage />} />
          <Route path="pub/adoverlay-market" element={<AdOverlayMarketPage />} />
          <Route path="pub/creatorconnect" element={<CreatorConnectPage />} />
        </Routes>

    </KeycloakProvider>
  );
}
export default App;