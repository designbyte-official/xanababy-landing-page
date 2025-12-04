import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Methodology from './components/sections/Methodology';
import AppShowcase from './components/sections/AppShowcase';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import Founder from './components/sections/Founder';

function App() {
  return (
    <div className="bg-white dark:bg-stone-950 min-h-screen transition-colors">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Methodology />
        <Pricing />
        <AppShowcase />
        <Testimonials />
        <Founder />
      </main>
      <Footer />
    </div>
  );
}

export default App;
