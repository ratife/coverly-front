import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TemplateGrid from './components/TemplateGrid';
import PreviewDrawer from './components/PreviewDrawer';
import GeminiGenerator from './components/GeminiGenerator';
import { TEMPLATES } from './constants';
import type { Template } from './types';

const AdCoverProPage: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Tous les Modèles');

  const filteredTemplates = TEMPLATES.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Tous les Modèles' || 
                            activeCategory === 'Tendances' || // Mock filter
                            t.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOpenPreview = (template: Template) => {
    setSelectedTemplate(template);
    setIsPreviewOpen(true);
  };

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark font-display">
      <Sidebar 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <main className="flex-1 flex flex-col min-w-0">
        <Header 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl font-black tracking-tight mb-2">Bibliothèque de Modèles de Cover</h1>
              <p className="text-slate-500 dark:text-slate-400 max-w-lg">
                Choisissez un modèle pour monétiser votre contenu sur les réseaux sociaux avec des overlays à fort taux de conversion.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-sm font-medium hover:border-primary transition-colors">
                <span>Plateforme : TikTok</span>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-sm font-medium hover:border-primary transition-colors">
                <span>Format : 9:16</span>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
              <button 
                onClick={() => setIsGeneratorOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
              >
                <span className="material-symbols-outlined text-lg">add</span>
                <span>Demande Personnalisée</span>
              </button>
            </div>
          </div>

          <TemplateGrid 
            templates={filteredTemplates} 
            onPreview={handleOpenPreview} 
          />
        </div>
      </main>

      <PreviewDrawer 
        template={selectedTemplate} 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
      />

      {isGeneratorOpen && (
        <GeminiGenerator onClose={() => setIsGeneratorOpen(false)} />
      )}
    </div>
  );
};

export default AdCoverProPage;