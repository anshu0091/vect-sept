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
      <article id="vision">
        <Vision />
      </article>
      <article id="technology">
        <Technology />
      </article>
      <article id="ai-asset-manager">
        <AIAssetManager />
      </article>
      <article id="market">
        <Market />
      </article>
      <article id="executive-structure">
        <ExecutiveStructure />
      </article>
      <article id="roadmap">
        <Roadmap />
      </article>
      <article id="contact">
        <Contact />
      </article>
      <Footer />
    </div>
  );
}

export default App;