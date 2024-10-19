import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Gharchala Al-Ishan Foundation</h3>
            <p className="mb-4">Empowering communities for a better future through compassion and sustainable solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-400"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-400"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#goals" className="hover:text-blue-400">Our Goals</a></li>
              <li><a href="#objectives" className="hover:text-blue-400">Objectives</a></li>
              <li><a href="#programs" className="hover:text-blue-400">Programs</a></li>
              <li><a href="#get-involved" className="hover:text-blue-400">Get Involved</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 Charity Street, City, Country</p>
            <p className="mb-2">Phone: +1 234 567 890</p>
            <p className="mb-2">Email: info@gharchala-al-ishan.org</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Gharchala Al-Ishan Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;