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
              I am a passionate full-stack developer and automation enthusiast who loves turning complex technical challenges into seamless, high-performing digital experiences.
            </p>
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  My Programming Journey
                </h3>
                <p className="text-soft leading-relaxed">
                  My fascination with technology started with a simple curiosity about how software could make everyday tasks easier. Over time, that curiosity evolved into a dedicated career path spanning both the web and desktop ecosystems. I began by diving deep into Python, building robust automation tools and crafting responsive desktop applications using frameworks like PyQt. As my horizons expanded, I ventured into full-stack web development, mastering the MERN stack (MongoDB, Express, React, Node.js) and Next.js to build dynamic, user-centric web applications. Every project I've tackled has been a step toward writing cleaner, more efficient code and solving real-world problems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  What I Enjoy Working On
                </h3>
                <p className="text-soft leading-relaxed">
                  I thrive at the intersection of logic and creativity. Whether I am architecting a scalable full-stack web application with Next.js, optimizing backend workflows, or designing an intuitive desktop software interface, I love the process of building things from the ground up. I’m particularly drawn to projects that involve process automation, sleek UI/UX design, and cross-platform functionality—tasks where efficiency meets elegant engineering.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Beyond the Code
                </h3>
                <p className="text-soft leading-relaxed">
                  When I’m not staring at a terminal or debugging code, you can usually find me recharging my creative batteries through activities that keep me grounded and inspired. I enjoy exploring the outdoors, keeping up with emerging tech trends, or experimenting with creative design. I believe that having diverse interests outside of programming brings a fresh perspective to problem-solving, helping me build software that isn't just functional, but genuinely great to use.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Let's build something amazing together!
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
