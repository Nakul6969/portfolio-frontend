import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Nakul6969', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nakul-kalani-a7725233b/?skipRedirect=true', label: 'LinkedIn' },
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nakuldarji95@gmail.com', label: 'Email' },
];

const quickStats = [
  { value: 'MERN', label: 'Primary Stack' },
  { value: 'Data + ML', label: 'Exploration Zone' },
  { value: 'Vadodara', label: 'Based In' },
];

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24">
      <div className="section-shell section-glow">
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="status-pill">
              <span className="status-dot" />
              Available for internships, freelance, and impactful builds
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.8 }}
              className="mt-6 max-w-4xl text-[2.45rem] font-semibold leading-[0.96] tracking-tight text-white md:text-[3.4rem] lg:text-[4.2rem]"
            >
              Dark, sleek, and built to make{' '}
              <span className="gradient-text">Nakul Kalani</span>{' '}
              unforgettable.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.8 }}
              className="mt-6 max-w-2xl text-[0.98rem] leading-7 text-slate-300 md:text-[1.02rem]"
            >
              Full Stack Developer, Data Analyst, and Machine Learning enthusiast crafting clean interfaces,
              practical products, and portfolio-worthy experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#projects" className="primary-button">
                Explore Projects
                <ArrowDownRight size={18} />
              </a>
              <a href="/resume.pdf" download className="secondary-button">
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-card hover-lift flex items-center gap-3 px-4 py-2.5 text-sm text-slate-200 transition hover:border-white/25 hover:text-white"
                >
                  <social.icon size={18} />
                  {social.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.85 }}
            className="relative"
          >
            <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-white/12 blur-3xl" style={{ animation: 'pulseGlow 6s ease-in-out infinite' }} />
            <div className="absolute bottom-6 right-12 h-36 w-36 rounded-full bg-white/10 blur-3xl" style={{ animation: 'pulseGlow 7s ease-in-out infinite' }} />

            <div className="glass-panel relative overflow-hidden p-4 md:p-5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <div className="grid gap-4">
                <div className="soft-card relative overflow-hidden p-4 md:p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.07),_transparent_30%)]" />
                  <div className="relative grid gap-5 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-center">
                    <div
                      className="mx-auto flex h-36 w-full max-w-[150px] items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(8,15,35,0.35)] sm:mx-0 sm:h-44"
                      style={{ animation: 'floatY 6s ease-in-out infinite' }}
                    >
                      {!imageError ? (
                        <img
                          src="/profile.jpg"
                          alt="Nakul Kalani profile"
                          className="h-full w-full object-cover object-center"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <span className="display-name text-4xl text-white">NK</span>
                      )}
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.32em] text-slate-300">
                        Creative Developer
                      </div>
                      <h2 className="mt-3 text-[1.85rem] font-semibold leading-tight text-white md:text-[1.95rem]">
                        Building with purpose and polish
                      </h2>
                      <p className="mt-3 text-[0.92rem] leading-6 text-slate-300">
                        I enjoy turning ideas into bold, responsive web experiences with a focus on clarity, motion, and real usability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {quickStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + index * 0.1, duration: 0.6 }}
                      className="soft-card p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{stat.label}</p>
                      <p className="mt-3 text-[1.35rem] font-semibold text-white md:text-[1.45rem]">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="soft-card p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Current Focus</p>
                  <p className="mt-3 text-[0.92rem] leading-6 text-slate-200">
                    Shipping polished frontend work, strengthening backend fundamentals, and connecting web development with analytics and machine learning projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
