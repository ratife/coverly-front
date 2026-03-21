import { useKeycloak } from "../keycloak";
import Header from "../layouts/Header";

import CoverAdsMonetizePage from "./audience/home/CoverAdsMonetizePage";

import AdvisionProEditorPage from "./publisher/advision-pro-editor/AdvisionProEditorPage";
import CampaignList from "./advertiser/campaign-list/CampaignList";

function HomePage() {
  const { authenticated, keycloak } = useKeycloak();

  const hasRole = (role: string): boolean => {
    if (!keycloak?.tokenParsed) return false;

    const realmRoles = keycloak.tokenParsed.realm_access?.roles || [];
    if (realmRoles.includes(role)) return true;

    const clientRoles =
      keycloak.tokenParsed.resource_access?.[keycloak.clientId || ""]?.roles || [];

    return clientRoles.includes(role);
  };

  // 🔥 Cas 1 : utilisateur NON connecté
  if (!authenticated) {
    return (
      <>
        <Header />
        <CoverAdsMonetizePage />
      </>
    );
  }

  // 🔥 Cas 2 : utilisateur connecté
  return hasRole("adpro") ? (
    <CampaignList />
  ) : (
    <AdvisionProEditorPage />
  );
}

export default HomePage;