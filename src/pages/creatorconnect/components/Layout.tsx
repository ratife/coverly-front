
import React from 'react';
import { Search, User, Bell, ChevronDown } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#0d0f17]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Main Nav */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white text-xl">C</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  CreatorConnect
                </span>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm font-medium text-white">Campaigns</a>
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Earnings</a>
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Messages</a>
              </nav>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Find campaigns..." 
                  className="bg-[#1a1d2d] border border-gray-700 text-sm rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-white relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0d0f17]"></span>
              </button>
              <div className="flex items-center gap-2 pl-2 border-l border-gray-800">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-700 bg-gray-800">
                  <img src="https://picsum.photos/seed/user/100" alt="Profile" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 bg-[#0d0f17] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <a href="#" className="hover:text-white">Campaigns</a>
            <span>/</span>
            <span className="text-gray-300">Summer Tech Launch 2024</span>
          </nav>
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0c12] py-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2024 CreatorConnect Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Campaign terms</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Cookie settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
