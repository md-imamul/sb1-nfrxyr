import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Goals from './components/Goals';
import Programs from './components/Programs';
import Objectives from './components/Objectives';
import ActionPlans from './components/ActionPlans';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <About />
      <Goals />
      <Objectives />
      <Programs />
      <ActionPlans />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default App;