import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import keycloak from './keycloak-instance';

interface KeycloakContextType {
  keycloak: typeof keycloak;
  initialized: boolean;
  authenticated: boolean;
  token: string | undefined;
  login: () => void;
  logout: () => void;
  register: () => void;
}

const KeycloakContext = createContext<KeycloakContextType | null>(null);

interface KeycloakProviderProps {
  children: ReactNode;
}

export const KeycloakProvider = ({ children }: KeycloakProviderProps) => {
  const [initialized, setInitialized] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  let keycloakInitialized = false;

  useEffect(() => {
    if (keycloakInitialized) return;
    keycloakInitialized = true;

    keycloak
      .init({
        onLoad: 'check-sso', // ou 'check-sso' si vous ne voulez pas forcer le login
        checkLoginIframe: false,
        pkceMethod: 'S256',
      })
      .then((auth) => {
        setInitialized(true);
        setAuthenticated(auth);

        if (auth) {
          console.log('Utilisateur authentifié');
          console.log('Token:', keycloak.token);

          // Rafraîchir le token automatiquement
          setInterval(() => {
            keycloak
              .updateToken(70) // Rafraîchir si le token expire dans moins de 70 secondes
              .then((refreshed) => {
                if (refreshed) {
                  console.log('Token rafraîchi');
                }
              })
              .catch(() => {
                console.error('Échec du rafraîchissement du token');
                //keycloak.login();
              });
          }, 60000); // Vérifier toutes les minutes
        }
      })
      .catch((error) => {
        console.error('Échec de l\'initialisation de Keycloak', error);
        setInitialized(true);
      });
  }, []);

  const login = () => {
    keycloak.login();
  };

  const logout = () => {
    keycloak.logout({ redirectUri: window.location.origin });
  };

  const register = () => {
    keycloak.register();
  };

  const contextValue: KeycloakContextType = {
    keycloak,
    initialized,
    authenticated,
    token: keycloak.token,
    login,
    logout,
    register,
  };

  // Afficher un loader pendant l'initialisation
  if (!initialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement de l'authentification...</p>
        </div>
      </div>
    );
  }

  return (
    <KeycloakContext.Provider value={contextValue}>
      {children}
    </KeycloakContext.Provider>
  );
};

// Hook personnalisé pour utiliser Keycloak
export const useKeycloak = () => {
  const context = useContext(KeycloakContext);
  if (!context) {
    console.log('useKeycloak doit être utilisé à l\'intérieur de KeycloakProvider');
    throw new Error('useKeycloak doit être utilisé à l\'intérieur de KeycloakProvider');
  }
  return context;
};

export default KeycloakProvider;