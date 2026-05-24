import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import api from '../lib/api';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    text: 'nakuldarji95@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nakuldarji95@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    text: '+91 9081079495',
    href: 'tel:+919081079495',
  },
  {
    icon: MapPin,
    title: 'Location',
    text: 'Vadodara, India',
    href: '#contact',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await api.post('/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="eyebrow">Contact</span>
          <h2 className="text-4xl font-semibold text-white md:text-6xl">
            Let&apos;s build something that <span className="gradient-text">actually stands out.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            If you have an internship, freelance opportunity, collaboration idea, or project that deserves careful execution, I&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10"
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Direct Reach</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">Ready when the idea is serious.</h3>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  I enjoy solving practical problems with clean code, careful UI, and a builder mindset. Reach out and let&apos;s talk through what you need.
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target={info.title === 'Email' ? '_blank' : undefined}
                    rel={info.title === 'Email' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="soft-card hover-lift flex items-center gap-4 p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-white">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{info.title}</p>
                      <p className="mt-1 text-base text-slate-100">{info.text}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-panel p-8 md:p-10"
          >
            <div className="grid gap-5">
              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.28em] text-slate-500">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 text-white outline-none transition focus:border-white/35 focus:bg-slate-950/75"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.28em] text-slate-500">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 text-white outline-none transition focus:border-white/35 focus:bg-slate-950/75"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.28em] text-slate-500">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your idea or opportunity"
                  required
                  rows="6"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 text-white outline-none transition focus:border-white/35 focus:bg-slate-950/75"
                />
              </div>

              <button type="submit" disabled={status === 'sending'} className="primary-button mt-2 w-full">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>

              {status === 'success' && <p className="text-center text-emerald-300">Message sent successfully.</p>}
              {status === 'error' && <p className="text-center text-rose-300">Could not send message. Please try again.</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
