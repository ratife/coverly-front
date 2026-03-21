import { Search, PlusCircle, User, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import ThemeButton from '../../../layouts/ThemeButton';
import { useNavigate } from 'react-router-dom';
import { useKeycloak } from '../../../keycloak/KeycloakProvider';

export default function Header() {

  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const { authenticated, login, logout, register, token } = useKeycloak();

  const handleClick = () => {
    navigate("/adpro/campaign/new");
  };

  const handleLogout = () => {
    // Logique de déconnexion à implémenter
    console.log("Déconnexion...");
    setIsProfileMenuOpen(false);
    logout()
  };

  const handleProfile = () => {
    navigate("/profil");
    setIsProfileMenuOpen(false);
  };

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-background-dark/50 backdrop-blur-md sticky top-0 z-10 border-b border-border-dark">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold tracking-tight">Gestion des Campagnes</h2>
        <p className="text-sm text-text-muted">Gérez et optimisez vos campagnes publicitaires</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Rechercher une campagne..."
            className="pl-10 pr-4 py-2 bg-border-dark border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/50 transition-all outline-none text-white"
          />
        </div>

        <button onClick={handleClick} className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20">
          <PlusCircle className="w-5 h-5" />
          Créer une Campagne
        </button>
        
        <ThemeButton/>

        <div className="flex items-center gap-4 ml-8">
          
          <div className="h-8 w-[1px] bg-slate-200 dark:bg-border-dark"></div>
          
          <button className="p-2 text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          
          <div className="relative" ref={profileMenuRef}>
            <div 
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="size-9 rounded-full bg-slate-200 dark:bg-surface-dark overflow-hidden border-2 border-primary cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div 
                className="w-full h-full bg-center bg-cover" 
                style={{ backgroundImage: `url('https://picsum.photos/seed/user/100/200')` }}
              />
            </div>

            {/* Menu dropdown */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 top-12 w-48 bg-white dark:bg-surface-dark rounded-lg shadow-lg border border-slate-200 dark:border-border-dark py-2 z-50">
                <button
                  onClick={handleProfile}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-border-dark transition-colors"
                >
                  <User className="w-4 h-4" />
                  Profil
                </button>
                <div className="h-[1px] bg-slate-200 dark:bg-border-dark my-1"></div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-slate-100 dark:hover:bg-border-dark transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Déconnecter
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
}
