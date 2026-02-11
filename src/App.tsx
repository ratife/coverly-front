import { Routes, Route } from 'react-router-dom';
import AdOverlayPricingPage from './pages/adoverlay-pricing-page/AdOverlayPricingPage';
import AnnonceurCampaignPage from './pages/annonceur-campaign-manager/AnnonceurCampaignPage';
import CoverAdsMonetizePage from './pages/coverads-monetize-every-view/CoverAdsMonetizePage';
import EspaceCreateurPage from './pages/espace-createur-dashboard/EspaceCreateurPage';
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
          </Routes>
      </>

  );
}

export default App;

