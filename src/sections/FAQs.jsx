import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const faqs = [
  {
    q: 'What kind of projects do you work on?',
    a: 'I specialize in web development, cross-platform applications, and UI/UX solutions — from prototypes to production-ready products. Most of my work involves React, Next.js, and motion-rich frontend systems and Python Automation.',
  },
  {
    q: 'Do you take on freelance or full-time work?',
    a: 'Yes. I’m available for both freelance and full-time opportunities, with a focus on web development and Python automation — especially projects involving clean UX, performance, and practical automation solutions.',
  },
  {
    q: 'How do you approach new projects?',
    a: 'I start with discovery: understanding the goals, the users, and the constraints. From there we move into architecture and design exploration, then iterative build cycles with regular check-ins. Post-launch I help with monitoring and refinement.',
  },
  {
    q: 'How can we get started?',
    a: 'Send a brief via the contact form below or book a free 30-minute discovery call. I\'ll review your needs, share a proposal within 48 hours, and we can decide together if it\'s a fit.',
  },
];

export default function FAQs() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className="px-6 md:px-12 py-20 md:py-28 relative">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Answers to common questions about my work and process."
      />

      <div className="space-y-3 max-w-3xl mx-auto">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`card overflow-hidden transition-all duration-500 ${isOpen ? 'border-accent/40' : ''}`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
              >
                <span className="text-sm md:text-base font-medium group-hover:text-accent transition-colors">
                  {f.q}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-colors"
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
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-6 pt-1 text-sm text-soft leading-relaxed max-w-2xl">
                      {f.a}
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
