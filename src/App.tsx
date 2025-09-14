import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Technology from './components/Technology';
import Market from './components/Market';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssetManager from './components/AIAssetManager';
import ExecutiveStructure from './components/ExecutiveStructure';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <Vision />
      <Technology />
      <AIAssetManager />
      <Market />
      <ExecutiveStructure />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;