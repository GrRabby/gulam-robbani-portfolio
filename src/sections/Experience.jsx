import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const experience = [
  {
    period: '2021 — 2025',
    role: 'Management Information Systems Specialist',
    company: 'MGH Group',
    location: 'Sylhet',
    current: false,
    summary: 'Responsible for managing end-to-end office operations',
    bullets: [
      'Managed end-to-end office operations including data processing, reporting, and administrative workflows to ensure smooth daily business functions.',
      'Prepared and verified invoices, purchase records, and financial documents with high accuracy for accounting and audit compliance.',
      'Maintained and updated large-scale datasets using Excel and internal MIS tools to support decision-making and reporting.',
      'Conducted regular warehouse stock audits to track inventory levels and reduce discrepancies between physical and system records.',
      'Generated sales and performance reports using data analysis techniques to support management in strategic planning.'
    ],
    tags: ['VBA', 'Excel', 'Python', 'Data Analysis'],
  },
];

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="px-6 md:px-12 py-20 md:py-28 relative">
      <SectionHeader
        title="Experience"
        description="Building efficient workflows through data-driven decision-making, automation, reporting, and operational excellence."
      />

      <div className="space-y-3 max-w-6xl mx-auto">
        {experience.map((j, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`card overflow-hidden transition-all duration-500 ${isOpen ? 'border-accent/40' : ''}`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full text-left p-6 md:p-7 grid grid-cols-12 gap-4 items-center group"
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted mb-1.5">
                    {j.period}
                  </div>
                  {j.current && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-accent font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                      Current Role
                    </span>
                  )}
                </div>

                <div className="col-span-10 md:col-span-7">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 group-hover:text-accent transition-colors">
                    {j.role}
                  </h3>
                  <div className="text-sm text-soft flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-medium text-white">{j.company}</span>
                    <span className="text-muted">·</span>
                    <span className="text-muted">{j.location}</span>
                  </div>
                </div>

                <div className="col-span-2 flex md:justify-end">
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-10 h-10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-colors"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(15,23,41,0.3))',
                      border: '1px solid rgba(59,130,246,0.18)',
                      backdropFilter: 'blur(16px) saturate(180%)',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-12 gap-4 px-6 md:px-7 pb-7">
                      <div className="hidden md:block col-span-3" />
                      <div className="col-span-12 md:col-span-9">
                        <p className="text-soft text-base mb-5 max-w-2xl leading-relaxed">
                          {j.summary}
                        </p>
                        <ul className="space-y-2.5 mb-6">
                          {j.bullets.map((b, bi) => (
                            <motion.li
                              key={bi}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: bi * 0.06, duration: 0.4 }}
                              className="flex items-start gap-3 text-soft text-sm"
                            >
                              <span className="text-accent mt-1.5 text-[10px] leading-none">●</span>
                              <span>{b}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {j.tags.map(t => (
                            <span key={t} className="tech-pill !py-1.5 !px-3 !text-xs">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
