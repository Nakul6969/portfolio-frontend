import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import api from '../lib/api';

const createProjectImage = (title, accentColor) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#060816" />
          <stop offset="100%" stop-color="${accentColor}" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#bg)" />
      <circle cx="630" cy="100" r="90" fill="rgba(255,255,255,0.1)" />
      <circle cx="140" cy="385" r="115" fill="rgba(255,255,255,0.08)" />
      <rect x="52" y="58" width="180" height="32" rx="16" fill="rgba(255,255,255,0.12)" />
      <text x="60" y="335" fill="#ffffff" font-family="Arial, sans-serif" font-size="42" font-weight="700">${title}</text>
      <text x="60" y="380" fill="rgba(255,255,255,0.76)" font-family="Arial, sans-serif" font-size="20">Selected project by Nakul Kalani</text>
    </svg>
  `)}`;

const fallbackProjects = [
  {
    _id: '1',
    title: 'Tic Tac Toe',
    description: 'A MERN-based game experience with a deployed frontend and separate frontend and backend repositories.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: createProjectImage('Tic Tac Toe', '#7c3aed'),
    liveUrl: 'https://tictactoe-frontend-three.vercel.app',
    repoLinks: [
      { label: 'Frontend', url: 'https://github.com/Nakul6969/tictactoe-frontend' },
      { label: 'Backend', url: 'https://github.com/Nakul6969/tictactoe-backend' },
    ],
  },
  {
    _id: '2',
    title: 'Super Market Data Analysis',
    description: 'A data analysis project focused on finding patterns, trends, and decision-ready insights from supermarket datasets.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    imageUrl: createProjectImage('Market Analysis', '#2563eb'),
    liveUrl: '',
    repoLinks: [{ label: 'GitHub', url: 'https://github.com/Nakul6969/Super_market_data_analysis' }],
  },
  {
    _id: '3',
    title: 'Emotion Detection NLP',
    description: 'An NLP project for identifying emotions in text using machine learning and text processing techniques.',
    technologies: ['Python', 'NLP', 'Machine Learning', 'Scikit-learn'],
    imageUrl: createProjectImage('Emotion Detection', '#db2777'),
    liveUrl: '',
    repoLinks: [{ label: 'GitHub', url: 'https://github.com/Nakul6969/Emotion_detection_NLP' }],
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/api/projects');
        setProjects(response.data.length ? response.data : fallbackProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="eyebrow">Selected Work</span>
          <h2 className="text-4xl font-semibold text-white md:text-6xl">
            Real projects with <span className="gradient-text">real links and cleaner presentation.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            A mix of product building, analytics, and machine learning work that shows how I approach both experience and problem solving.
          </p>
        </motion.div>

        {loading ? (
          <div className="glass-panel px-8 py-14 text-center text-slate-300">Loading projects...</div>
        ) : (
          <div className="space-y-8">
            {projects.map((project, index) => {
              const repoLinks = project.repoLinks?.length
                ? project.repoLinks
                : project.githubUrl && project.githubUrl !== '#'
                  ? [{ label: 'GitHub', url: project.githubUrl }]
                  : [];
              const hasLiveLink = project.liveUrl && project.liveUrl !== '#';

              return (
                <motion.article
                  key={project._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.65 }}
                  viewport={{ once: true }}
                  className="glass-panel overflow-hidden"
                >
                  <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="relative min-h-[280px] overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/35 to-transparent" />
                      <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-slate-950/65 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200 backdrop-blur-xl">
                        Project {index + 1}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between p-7 md:p-10">
                      <div>
                        <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Featured Build</p>
                        <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">{project.title}</h3>
                        <p className="mt-5 text-base leading-8 text-slate-300">{project.description}</p>

                        <div className="mt-7 flex flex-wrap gap-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {repoLinks.map((repo) => (
                          <a
                            key={repo.url}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="secondary-button px-5 py-3"
                          >
                            <Github size={17} />
                            {repo.label}
                          </a>
                        ))}
                        {hasLiveLink && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="primary-button"
                          >
                            Live Demo
                            <ArrowUpRight size={17} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
