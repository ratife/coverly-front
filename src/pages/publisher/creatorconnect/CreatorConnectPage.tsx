import React, { useState } from 'react';
import Layout from './components/Layout';
import CampaignHeader from './components/CampaignHeader';
import Sidebar from './components/Sidebar';
import GeminiPitchGenerator from './components/GeminiPitchGenerator';
import { 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Package, 
  Video, 
  Image as ImageIcon, 
  Download, 
  Layers
} from 'lucide-react';

const CreatorConnectPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Brief & Conditions', 'Creative Assets', 'Previous Winners'];

  return (
    <Layout>
      <CampaignHeader onApply={() => alert('Application flow started!')} />

      {/* Tabs */}
      <div className="flex items-center gap-8 mb-8 border-b border-gray-800 px-2 overflow-x-auto no-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-semibold whitespace-nowrap transition-all relative ${
              activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
            )}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          {activeTab === 'Overview' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
              
              {/* Gemini Integration Feature */}
              <GeminiPitchGenerator />

              {/* Campaign Brief Card */}
              <div className="bg-[#161a27] border border-gray-800 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-500/10 rounded-lg">
                    <FileText className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Campaign Brief</h2>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8">
                  We are launching our next-generation mobile workstation and are looking for creative tech enthusiasts to showcase how it seamlessly integrates into a modern remote work lifestyle. The goal is to highlight the sleek design, 12-hour battery life, and high-performance processing power through high-quality visual content.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Dos</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'Prioritize natural lighting and clean, minimalist spaces.',
                        'Showcase real, productive workflows (coding, editing, design).',
                        'Mention promo code "SUMMER-TECH-24" in captions.',
                        'Use dynamic, tech-focused background music.'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 mt-1.5 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-4 h-4 text-rose-500" />
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">Don'ts</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'Do not mention direct competitors.',
                        'Avoid dark, cluttered, or messy environments.',
                        'No copyrighted music without proper licensing.',
                        'Do not obscure brand logos on product shots.'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500/40 mt-1.5 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Deliverables Card */}
              <div className="bg-[#161a27] border border-gray-800 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Package className="w-5 h-5 text-purple-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Deliverables</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1a1d2d] border border-gray-800 p-5 rounded-xl flex items-center gap-4 hover:border-purple-500/40 transition-colors cursor-default">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <Video className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Short-form Video</h4>
                      <p className="text-xs text-gray-500 mb-1">1x Reel/TikTok (30-60s)</p>
                      <span className="text-[10px] font-bold text-purple-400 uppercase">High Priority</span>
                    </div>
                  </div>
                  <div className="bg-[#1a1d2d] border border-gray-800 p-5 rounded-xl flex items-center gap-4 hover:border-indigo-500/40 transition-colors cursor-default">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <ImageIcon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Static Post</h4>
                      <p className="text-xs text-gray-500 mb-1">2x High-res Instagram Photos</p>
                      <span className="text-[10px] font-bold text-indigo-400 uppercase">Medium Priority</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Resources */}
              <div className="bg-[#161a27] border border-gray-800 rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Layers className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Required Resources</h2>
                  </div>
                  <button className="flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300">
                    <Download className="w-3.5 h-3.5" />
                    Download All
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Hero_Overlay.png', img: 'https://picsum.photos/seed/tech1/400/300' },
                    { name: 'Logo_Main_Vector.svg', img: 'https://picsum.photos/seed/tech2/400/300' },
                    { name: 'Product_3D_Model.jpg', img: 'https://picsum.photos/seed/tech3/400/300' }
                  ].map((resource, i) => (
                    <div key={i} className="group relative aspect-[4/3] bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                      <img src={resource.img} alt={resource.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-3 w-full">
                        <p className="text-[10px] font-medium text-gray-300 truncate">{resource.name}</p>
                      </div>
                      <button className="absolute top-2 right-2 p-1.5 bg-[#0d0f17]/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <Download className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {activeTab !== 'Overview' && (
            <div className="bg-[#161a27] border border-gray-800 rounded-2xl p-12 text-center flex flex-col items-center justify-center animate-pulse">
              <div className="w-16 h-16 bg-gray-800 rounded-full mb-6 flex items-center justify-center">
                <FileText className="w-8 h-8 text-gray-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-400 mb-2">Detailed {activeTab} incoming</h2>
              <p className="text-sm text-gray-600">The brand is currently finalizing these specific requirements.</p>
            </div>
          )}
        </div>

        <Sidebar />
      </div>
    </Layout>
  );
};

export default CreatorConnectPage;