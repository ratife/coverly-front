
import React from 'react';
import type  { Template } from '../types';

interface PreviewDrawerProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
}

const PreviewDrawer: React.FC<PreviewDrawerProps> = ({ template, isOpen, onClose }) => {
  if (!template) return null;

  return (
    <div 
      className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white dark:bg-surface-dark shadow-2xl transition-transform duration-500 border-l border-slate-200 dark:border-border-dark z-50 p-6 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold">Aperçu Rapide</h2>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      
      <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden relative mb-6 shadow-2xl">
        <div 
          className="w-full h-full bg-center bg-cover opacity-60" 
          style={{ backgroundImage: `url('https://picsum.photos/seed/preview/1080/1920')` }}
        />
        <div className="absolute bottom-10 left-4 right-4 bg-primary p-4 rounded-xl text-white shadow-2xl transform hover:scale-[1.02] transition-transform">
          <p className="font-bold text-lg leading-tight mb-1">VOTRE PUB ICI</p>
          <p className="text-sm opacity-90">Cliquez pour en savoir plus sur cette offre limitée.</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Style</span>
          <span className="font-medium">{template.style}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Animations</span>
          <span className="font-medium">{template.animations}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Complexité</span>
          <span className="font-medium">{template.complexity}</span>
        </div>
      </div>
      
      <button className="w-full mt-8 bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
        Appliquer à l'Éditeur
      </button>
    </div>
  );
};

export default PreviewDrawer;
