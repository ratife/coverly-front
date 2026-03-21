import { useKeycloak } from "../keycloak";
import Header from "../layouts/Header";

import CoverAdsMonetizePage from "./audience/home/CoverAdsMonetizePage";
import AdvisionProEditorPage from "./publisher/advision-pro-editor/AdvisionProEditorPage";
import Dashboard from "./advertiser/dashboard/Dashboard";

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
    <Dashboard />
  ) : (
    <AdvisionProEditorPage />
  );
}

export default HomePage;