import { Routes, Route } from 'react-router-dom';
import AdOverlayPricingPage from './pages/adoverlay-pricing-page/AdOverlayPricingPage';
import AnnonceurCampaignPage from './pages/annonceur/annonceur-campaign-manager/AnnonceurCampaignPage';
import CoverAdsMonetizePage from './pages/coverads-monetize-every-view/CoverAdsMonetizePage';
import EspaceCreateurPage from './pages/publisher/espace-createur-dashboard/EspaceCreateurPage';
import AdCoverProPage from './pages/adcover-pro/AdCoverProPage';
import AdOverlayMarketPage from './pages/adoverlay-market/AdOverlayMarketPage';
import CreatorConnectPage from './pages/creatorconnect/CreatorConnectPage';
import AdvisionProEditorPage from './pages/advision-pro-editor/AdvisionProEditorPage';
import EspaceCreateurPortfolioPage from './pages/espace-createur-portfolio/EspaceCreateurPortfolioPage';
import EspaceCreateurMarketplacePage from './pages/espace-createur-marketplace/EspaceCreateurMarketplacePage';
import './App.css';
import HeaderStandard from "./layouts/HeaderStandard";

function App() {
  return (

      <>      
         <HeaderStandard/>
          <Routes>
            <Route path="/" element={<CoverAdsMonetizePage />} />
            <Route path="/adoverlay-pricing" element={<AdOverlayPricingPage />} />
            <Route path="/annonceur-campaign" element={<AnnonceurCampaignPage />} />
            <Route path="/espace-createur" element={<EspaceCreateurPage />} />
            <Route path="/adcover-pro" element={<AdCoverProPage />} />
            <Route path="/adoverlay-market" element={<AdOverlayMarketPage />} />
            <Route path="/creatorconnect" element={<CreatorConnectPage />} />
            <Route path="/advision-pro-editor" element={<AdvisionProEditorPage />} />
            <Route path="/espace-createur-portfolio" element={<EspaceCreateurPortfolioPage />} />
            <Route path="/espace-createur-marketplace" element={<EspaceCreateurMarketplacePage />} />
          </Routes>
      </>

  );
}

export default App;

