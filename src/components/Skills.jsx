import React from 'react';
import { motion } from 'framer-motion';
import {
  SiAngular,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPowerbi,
  SiPython,
  SiReact,
} from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Machine Learning', icon: TbBrain, color: '#A855F7' },
  { name: 'Power BI', icon: SiPowerbi, color: '#F2C811' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Angular', icon: SiAngular, color: '#DD0031' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="eyebrow">Capabilities</span>
          <h2 className="text-4xl font-semibold text-white md:text-6xl">
            A stack that spans <span className="gradient-text">frontend, backend, data, and insight.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            I like working where logic meets experience: interactive UI, backend workflows, data storytelling, and machine learning experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.55 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="soft-card group relative overflow-hidden p-6"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(circle at top right, ${skill.color}22, transparent 42%)` }} />
              <div className="relative flex items-center justify-between">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 transition duration-300 group-hover:scale-110"
                  style={{ boxShadow: `0 0 30px ${skill.color}25` }}
                >
                  <skill.icon size={30} style={{ color: skill.color }} />
                </div>
                <span className="text-xs uppercase tracking-[0.28em] text-slate-500">Skill</span>
              </div>
              <h3 className="relative mt-6 text-xl font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
