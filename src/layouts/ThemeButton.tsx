import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeButton() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
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
  );
}