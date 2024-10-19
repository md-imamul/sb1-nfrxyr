import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/logo.png" alt="Gharchala Al-Ishan Foundation Logo" className="h-12" />
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#goals" className="text-gray-600 hover:text-gray-900">Goals</a>
          <a href="#objectives" className="text-gray-600 hover:text-gray-900">Objectives</a>
          <a href="#programs" className="text-gray-600 hover:text-gray-900">Programs</a>
          <a href="#get-involved" className="text-gray-600 hover:text-gray-900">Get Involved</a>
        </nav>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;