import { 
  LayoutDashboard, 
  Megaphone, 
  Library, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Layers
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Tableau de bord', id: 'dashboard', active: true  },
  { icon: Megaphone, label: 'Campagnes', id: 'campaigns'},
  { icon: Library, label: 'Médiathèque', id: 'media' },
  { icon: BarChart3, label: 'Analyses', id: 'analytics' },
];

const accountItems = [
  { icon: Settings, label: 'Paramètres', id: 'settings' },
  { icon: HelpCircle, label: 'Support', id: 'support' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-border-dark flex flex-col h-screen bg-[#141122]">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg">
          <Layers className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="text-lg font-bold leading-none tracking-tight">AdOverlay</h1>
          <p className="text-xs text-text-muted">Portail Annonceur</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
              item.active 
                ? 'bg-primary/10 text-primary border border-primary/20' 
                : 'text-slate-400 hover:bg-border-dark hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}

        <div className="pt-4 pb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-600">
          Compte
        </div>

        {accountItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:bg-border-dark hover:text-white rounded-lg transition-colors group"
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-border-dark">
        <div className="flex items-center gap-3 p-2 bg-[#1e1933] rounded-xl">
          <img
            src="https://picsum.photos/seed/alex/100/100"
            alt="Avatar utilisateur"
            className="w-10 h-10 rounded-full border-2 border-primary/30"
            referrerPolicy="no-referrer"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">Alex Rivest</p>
            <p className="text-[10px] text-text-muted truncate">Offre Entreprise</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
