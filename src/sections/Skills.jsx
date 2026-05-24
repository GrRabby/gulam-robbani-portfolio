import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const groups = [
  {
    title: 'Frontend Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M9 18L3 12L9 6M15 6L21 12L15 18" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    skills: [
      { name: 'React / Next.js', level: 88 },
      { name: 'Tailwind / DaisyUI', level: 85 },
      { name: 'State & Data Flow', level: 87 },
      { name: 'Component Architecture', level: 80 },
    ],
  },
  {
    title: 'Backend & Tools',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="#3B82F6" strokeWidth="1.8" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="#3B82F6" strokeWidth="1.8" />
        <circle cx="7" cy="7" r="0.8" fill="#60A5FA" />
        <circle cx="7" cy="17" r="0.8" fill="#60A5FA" />
      </svg>
    ),
    skills: [
      { name: 'Node.js / Express', level: 96 },
      { name: 'MongoDB / MySQL', level: 92 },
      { name: 'API Design (REST/GraphQL)', level: 90 },
      { name: 'CI/CD & DevOps', level: 94 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-20 md:py-28 relative">
      <SectionHeader
        title="Skills"
        description="A snapshot of my proficiency across the disciplines I work in daily."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: gi * 0.1 }}
            className="card p-7 md:p-8 group hover:border-accent/40 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(15,23,41,0.3))',
                  border: '1px solid rgba(59,130,246,0.25)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                }}
              >
                {g.icon}
              </div>
              <h3 className="text-lg font-semibold">{g.title}</h3>
            </div>

            <ul className="space-y-4">
              {g.skills.map((s, si) => (
                <li key={s.name}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-white">{s.name}</span>
                    <span className="font-mono text-muted tabular-nums">{s.level}%</span>
                  </div>
                  <div className="h-1.5 bg-surface rounded-full relative overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: s.level / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.2 + si * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-accent2 to-accent"
                      style={{ boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)' }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-6 max-w-6xl mx-auto card p-7 md:p-8"
      >
        <h4 className="text-sm font-semibold text-soft uppercase tracking-widest mb-5">
          Also fluent in
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            'PyQt Desktop Development', 'Python Automation', 'Web Scraping', 'Client Discovery',
            'VBA Excel', 'Code Reviews', 'Performance Audits', 'UI/UX Optimization',
            'Microsoft Excel', 'Process Automation',
          ].map(s => (
            <span key={s} className="tech-pill">
              <span className="text-sm">{s}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
