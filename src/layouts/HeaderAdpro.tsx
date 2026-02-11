import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderStandard() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">dashboard</span>
            Tableau de bord
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined">campaign</span>
            Campagnes
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined">analytics</span>
            Analytics
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined">group</span>
            Audience
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined">payments</span>
            Facturation
          </a>
        </nav>
    </header>


  );
}
