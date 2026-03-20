import { Routes, Route } from 'react-router-dom';
import AdOverlayPricingPage from './pages/audience/adoverlay-pricing-page/AdOverlayPricingPage';
import AnnonceurCampaignPage from './pages/advertiser/annonceur-campaign-manager/AnnonceurCampaignPage';
import CoverAdsMonetizePage from './pages/audience/home/CoverAdsMonetizePage';
import EspaceCreateurPage from './pages/publisher/espace-createur-dashboard/EspaceCreateurPage';
import AdCoverProPage from './pages/advertiser/adcover-pro/AdCoverProPage';
import AdOverlayMarketPage from './pages/advertiser/adoverlay-market/AdOverlayMarketPage';
import CreatorConnectPage from './pages/publisher/creatorconnect/CreatorConnectPage';
import AdvisionProEditorPage from './pages/publisher/advision-pro-editor/AdvisionProEditorPage';
import EspaceCreateurPortfolioPage from './pages/publisher/espace-createur-portfolio/EspaceCreateurPortfolioPage';
import EspaceCreateurMarketplacePage from './pages/advertiser/espace-createur-marketplace/EspaceCreateurMarketplacePage';
import './App.css';
import Header from "./layouts/Header";
import { KeycloakProvider } from './keycloak/KeycloakProvider';

function App() {
  return (
    <KeycloakProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<CoverAdsMonetizePage />} />
          <Route path="/pricing" element={<AdOverlayPricingPage />} />
          
            <Route path="adpro/annonceur-campaign" element={<AnnonceurCampaignPage />} />
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
