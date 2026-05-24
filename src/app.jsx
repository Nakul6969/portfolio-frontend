import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="glass-panel w-full max-w-md p-10 text-center">
          <div className="mx-auto mb-6 h-20 w-20 rounded-full border border-white/20 bg-white/8 p-2">
            <div className="h-full w-full animate-spin rounded-full border-4 border-white/15 border-t-white" />
          </div>
          <p className="eyebrow">Preparing Experience</p>
          <h1 className="display-name text-4xl text-white">Nakul Kalani</h1>
          <p className="mt-3 text-sm text-slate-300">Loading a darker, sharper portfolio experience.</p>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="app-shell"
      >
        <div className="site-backdrop" />
        <div className="noise-overlay" />
        <Header />
        <main className="relative">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
