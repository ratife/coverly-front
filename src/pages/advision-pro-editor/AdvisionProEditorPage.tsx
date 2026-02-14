
import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { EditorCanvas } from './components/EditorCanvas';
import { Timeline } from './components/Timeline';
import { PropertiesPanel } from './components/PropertiesPanel';
import type { ProjectState, OverlayElement, ImpactAnalysis } from './types';
import { analyzeOverlayImpact } from './services/geminiService';

const INITIAL_ELEMENT: OverlayElement = {
  id: 'el-1',
  type: 'image',
  x: 120,
  y: 450,
  opacity: 90,
  title: 'TechGear Pro - Offre Spéciale',
  subtitle: 'Cliquez pour découvrir la nouvelle gamme.',
  buttonText: 'ACHETER',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_Qktmdzzb3KGfdcj5QbK5GiCFjv4e1qwQK9tEl6rVGmS8tSIWcej0Z5K-7z8OhaI3useFMQk_FQbS3FnGBUuSSr8B2jSnlrSk6prwhU_nYIEEQDxWNzdV1p8RJNHj7X9P2EarhYLVQ65AgMK6eE0zFNlqIMrPqR_PnsXGkXk9iGe0CUadmkZAs2hNI2OouKzrKASjS0GTG9_PvbIov4jBfzDtJT3d7uSnMCFL_q4ku69_fOpT2-nSrBKOkHk7jBm8uSjiftyKq2nu',
  backgroundType: 'mica',
  isVisible: true,
  behavior: 'always'
};

const AdvisionProEditorPage: React.FC = () => {
  const [project, setProject] = useState<ProjectState>({
    campaignName: 'TechVision Pro 2024',
    lastModified: 'il y a 2 min',
    renderingProgress: 85,
    elements: [INITIAL_ELEMENT],
    selectedElementId: 'el-1',
    currentTime: '00:12:45',
    totalTime: '00:45:00'
  });

  const [impact, setImpact] = useState<ImpactAnalysis>({
    score: 24,
    reasoning: 'Engagement estimé selon les critères actuels.'
  });

  const updateElement = useCallback((id: string, updates: Partial<OverlayElement>) => {
    setProject(prev => ({
      ...prev,
      elements: prev.elements.map(el => el.id === id ? { ...el, ...updates } : el)
    }));
  }, []);

  const selectedElement = project.elements.find(el => el.id === project.selectedElementId);

  // Re-calculate impact when text changes
  useEffect(() => {
    if (!selectedElement) return;
    const timeout = setTimeout(async () => {
      const result = await analyzeOverlayImpact(selectedElement);
      //setImpact(result);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [selectedElement?.title, selectedElement?.subtitle, selectedElement?.behavior]);

  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-slate-200">
      <Sidebar renderingProgress={project.renderingProgress} />
      
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <Header 
          campaignName={project.campaignName} 
          lastModified={project.lastModified} 
        />
        
        <div className="flex-1 flex flex-col overflow-hidden canvas-bg">
          <EditorCanvas 
            element={selectedElement} 
            onUpdate={(updates) => project.selectedElementId && updateElement(project.selectedElementId, updates)}
          />
          <Timeline 
            currentTime={project.currentTime} 
            totalTime={project.totalTime} 
          />
        </div>
      </main>

      <PropertiesPanel 
        element={selectedElement} 
        impact={impact}
        onUpdate={(updates) => project.selectedElementId && updateElement(project.selectedElementId, updates)}
        onDelete={() => {
          if (project.selectedElementId) {
            setProject(prev => ({
              ...prev,
              elements: prev.elements.filter(el => el.id !== prev.selectedElementId),
              selectedElementId: null
            }));
          }
        }}
      />
    </div>
  );
};

export default AdvisionProEditorPage;
