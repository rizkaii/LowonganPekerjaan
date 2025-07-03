import React from 'react';
import { X, Home, Briefcase, User } from 'lucide-react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const SideMenu: React.FC<SideMenuProps> = ({ 
  isOpen, 
  onClose, 
  onNavigate, 
  currentPage
}) => {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      {/* Side Menu */}
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Navigasi
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => handleNavigate('home')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === 'home' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Beranda</span>
              </button>
              
              <button
                onClick={() => handleNavigate('jobs')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === 'jobs' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span className="font-medium">Semua Lowongan</span>
              </button>
              
              <button
                onClick={() => handleNavigate('profile')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === 'profile' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Profil</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">KerjaDirumahAja</p>
              <p className="text-xs text-gray-400">Platform Lowongan Kerja Remote</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;