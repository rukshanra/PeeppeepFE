
import React from 'react';
import { SearchIcon, CompassIcon } from './icons/Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/#" className="text-2xl font-bold">
              <span className="text-[#FFC300]">PeePee</span><span className="text-[#C70039]">P.lk</span>
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-[#C70039] font-medium transition-colors">New Cars</a>
              <a href="#" className="text-gray-600 hover:text-[#C70039] font-medium transition-colors">Used Cars</a>
              <a href="#" className="text-gray-600 hover:text-[#C70039] font-medium transition-colors">News & Reviews</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#/car/15" className="bg-[#C70039] text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition-colors">
              Test Details Page
            </a>
            <button className="text-gray-600 hover:text-[#C70039]">
              <SearchIcon />
            </button>
            <div className="hidden sm:flex items-center space-x-1 text-gray-600 hover:text-[#C70039] cursor-pointer">
              <CompassIcon />
              <span>Colombo</span>
            </div>
            <button className="text-gray-600 hover:text-[#C70039] font-medium">Login / Register</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;