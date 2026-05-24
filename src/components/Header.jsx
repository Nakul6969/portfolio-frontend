import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Skills', 'Projects', 'Contact'];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-8">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 transition duration-300 md:px-6 ${
          scrolled
            ? 'border-white/10 bg-slate-950/70 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl'
            : 'border-white/8 bg-slate-950/35 backdrop-blur-xl'
        }`}
      >
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/8 text-sm font-bold text-white">
            NK
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Portfolio</p>
            <p className="display-name text-xl leading-none text-white md:text-2xl">Nakul Kalani</p>
          </div>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="secondary-button px-5 py-2.5">
            Let&apos;s Talk
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 w-full max-w-7xl rounded-[28px] border border-white/10 bg-slate-950/85 p-4 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/8"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="primary-button mt-2 w-full"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
