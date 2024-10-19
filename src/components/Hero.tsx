import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Communities for a Better Future</h1>
        <p className="text-xl md:text-2xl mb-8">Gharchala Al-Ishan Foundation: Building a just society through compassion and sustainable solutions</p>
        <a href="#donate" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300">Donate Now</a>
      </div>
    </div>
  );
};

export default Hero;