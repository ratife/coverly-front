
import React from 'react';
import TemplateCard from './TemplateCard';
import type { Template } from '../types';

interface TemplateGridProps {
  templates: Template[];
  onPreview: (template: Template) => void;
}

const TemplateGrid: React.FC<TemplateGridProps> = ({ templates, onPreview }) => {
  if (templates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-500">
        <span className="material-symbols-outlined text-6xl mb-4">search_off</span>
        <p className="text-xl font-bold">Aucun modèle trouvé</p>
        <p>Essayez de modifier vos critères de recherche.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {templates.map(template => (
        <TemplateCard 
          key={template.id} 
          template={template} 
          onPreview={() => onPreview(template)}
        />
      ))}
    </div>
  );
};

export default TemplateGrid;
