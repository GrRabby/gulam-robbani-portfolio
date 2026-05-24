import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const techStack = [
  { name: 'Tailwind', color: '#06B6D4', symbol: '~' },
  { name: 'Figma', color: '#F24E1E', symbol: '◇' },
  { name: 'TypeScript', color: '#3178C6', symbol: 'TS' },
  { name: 'React', color: '#61DAFB', symbol: '⚛' },
  { name: 'Next.js', color: '#FFFFFF', symbol: '▲' },
  { name: 'Node.js', color: '#5FA04E', symbol: '⬢' },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-20 md:py-28 relative">
      <SectionHeader
        title="About Me"
        description="I build intuitive digital products — scalable, high-performing, and made through collaboration."
      />
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-3 flex flex-col gap-5"
        >
          <div className="card p-7 md:p-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Hi! I'm Gulam Robbani,
            </h3>
            <p className="text-soft leading-relaxed mb-4">
              🚀 Automation-Focused Software Engineer | MERN Full-Stack Developer | Python Automation & Desktop Applications | API Integration Specialist | Android Developer
            </p>
            <p className="text-soft leading-relaxed">
              I specialize in full-stack MERN development, Python automation, desktop applications (PyQt), and mobile applications, creating systems that help businesses operate faster and more efficiently.
              <br></br>🌱 I’m always learning, improving my skills, and exploring new technologies in automation, software architecture, and scalable systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
