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

