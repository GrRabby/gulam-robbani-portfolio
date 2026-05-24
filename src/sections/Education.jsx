import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const education = [
  {
    year: '2026',
    school: 'Bangladesh Open University',
    short: 'BOU',
    location: 'Sylhet, Bangladesh',
    degree: 'BBA',
    grade: 'Running',
    detail: 'Prepares students for careers in corporate management, banking, entrepreneurship, and further studies like MBA.',
  },
    {
    year: '2017 — 2018',
    school: 'Madan Mohan College,Sylhet',
    short: 'MMC',
    location: 'Sylhet, Bangladesh',
    degree: 'HSC',
    grade: 'Completed',
    detail: 'This group prepares students for careers in business, management, accounting, banking, and higher studies like BBA, MBA, and related fields.',
  },
  {
    year: '2015 — 2016',
    school: 'Police Lines High School',
    short: 'SU',
    location: 'Sylhet, Bangladesh',
    degree: 'SSC',
    grade: 'Completed',
    detail: 'Includes subjects like Bangla, English, Mathematics, Science, ICT, and group-based subjects such as Science, Business Studies, or Humanities.',
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-12 py-20 md:py-28 relative">
      <SectionHeader
        title="Educational Qualifications"
        description="A blend of formal education and self-directed learning that shapes my approach to business operations, web development, and automation."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {education.map((e, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="card p-7 md:p-8 group hover:border-accent/40 transition-all duration-500 flex flex-col hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-accent group-hover:bg-accent group-hover:text-white transition-colors"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(15,23,41,0.3))',
                  border: '1px solid rgba(59,130,246,0.25)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                }}
              >
                {e.short}
              </div>
              <span className="font-mono text-xs text-muted uppercase tracking-widest">
                {e.year}
              </span>
            </div>

            <h3 className="text-lg font-semibold leading-snug mb-2 group-hover:text-accent transition-colors">
              {e.school}
            </h3>
            <div className="text-sm text-soft mb-4">{e.degree}</div>
            <p className="text-sm text-soft leading-relaxed flex-1">
              {e.detail}
            </p>

            <div className="flex items-center justify-between mt-6 pt-5 border-t border-border">
              <span className="text-xs text-muted">{e.location}</span>
              <span className="status-pill !text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {e.grade}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
