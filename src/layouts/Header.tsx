import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useKeycloak } from "../keycloak/KeycloakProvider";
import { MenuAdpro } from "./MenuAdpro";
import { MenuPublic } from "./MenuPublic";

export default function HeaderStandard() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { authenticated, login, logout, register, token } = useKeycloak();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  const handleRegister = () => {
    register();
  };

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white">ads_click</span>
            </div>
            <h1 className="text-2xl font-bold">Coverly</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {authenticated ? (
              <MenuAdpro/>
            ) : (
              <MenuPublic/>
            )}

            
          </div>
          <div className="flex items-center gap-3">
            {/* Bouton de changement de thème */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-300 dark:border-border-dark hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
              aria-label={`Changer en thème ${theme === 'dark' ? 'clair' : 'sombre'}`}
              title={`Changer en thème ${theme === 'dark' ? 'clair' : 'sombre'}`}
            >
              {theme === 'dark' ? (
                <span className="material-symbols-outlined text-yellow-500">light_mode</span>
              ) : (
                <span className="material-symbols-outlined text-slate-700">dark_mode</span>
              )}
            </button>
            
            {authenticated ? (
              <>
                <div className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium border border-slate-300 dark:border-border-dark rounded-lg">
                  <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                  <span>Connecté</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 text-sm font-bold bg-red-500 text-white rounded-lg hover:opacity-90 transition-all shadow-lg shadow-red-500/20"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="hidden sm:block px-5 py-2 text-sm font-bold border border-slate-300 dark:border-border-dark rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                >
                  Connexion
                </button>
                <button
                  onClick={handleRegister}
                  className="px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                >
                  S'inscrire
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
