import React from 'react';
import { Search, Menu, Home } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, onSearchClick, currentPage }) => {
  const getPageTitle = () => {
    switch (currentPage) {
      case 'home':
        return { title: 'KerjaDirumahAja', subtitle: 'Remote Jobs Platform' };
      case 'jobs':
        return { title: 'Semua Lowongan', subtitle: 'Temukan pekerjaan impian Anda' };
      case 'profile':
        return { title: 'Profil Saya', subtitle: 'Kelola informasi akun Anda' };
      default:
        return { title: 'KerjaDirumahAja', subtitle: 'Remote Jobs Platform' };
    }
  };

  const { title, subtitle } = getPageTitle();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Home className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="text-xs opacity-90">{subtitle}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {(currentPage === 'jobs' || currentPage === 'home') && (
              <button
                onClick={onSearchClick}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onMenuClick}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header