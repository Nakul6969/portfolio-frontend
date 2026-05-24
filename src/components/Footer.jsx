import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pb-10 pt-6">
      <div className="section-shell">
        <div className="glass-panel flex flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-slate-500">Nakul Kalani</p>
            <p className="mt-2 text-base text-slate-300">Built to feel premium, personal, and memorable.</p>
          </div>
          <div>
            <p className="flex items-center justify-center gap-2 text-slate-300 md:justify-end">
              Made with <Heart size={16} className="fill-white text-white" /> by Nakul Kalani
            </p>
            <p className="mt-2 text-sm text-slate-500">&copy; 2026 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
