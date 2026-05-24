import { motion } from 'framer-motion';
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siPython,
  siHtml5,
  siCss,
  siTailwindcss,
  siDaisyui,
  siGreensock,
  siFramer,
  siNodedotjs,
  siExpress,
  siMongodb,
  siMysql,
  siPandas,
  siQt,
  siDocker,
  siVercel,
  siFigma,
  siGit,
  siGithub,
  siVite,
} from 'simple-icons';
import SectionHeader from '../components/SectionHeader';


const lenisIcon = {
  title: 'Lenis',
  hex: '3B82F6',
  path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-9h8v2H8v-2z',
};
const vbaIcon = {
  title: 'VBA',
  hex: 'A4373A',
  path: 'M8.5 4l3.5 14h-2L8 8 6 18H4L7.5 4h1zM18 4l-2 7-2-7h-2l3 10v4h2v-4l3-10h-2z',
};
const excelIcon = {
  title: 'Excel',
  hex: '21A366',
  path: 'M2.86 2.04A1 1 0 0 0 2 3.03v17.94a1 1 0 0 0 .86.99l11 1.5a1 1 0 0 0 1.14-.99V2.53A1 1 0 0 0 13.86 1.54l-11 .5zM16 4v2h2v3h-2v2h2v3h-2v2h2v3h-2v2h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5zm-9.5 4.5h2L10 11l1.5-2.5h2L11 12l2.5 3.5h-2L10 13l-1.5 2.5h-2L9 12 6.5 8.5z',
};
const awsIcon = {
  title: 'AWS',
  hex: 'FF9900',
  path: 'M6.76 10.06c0 .35.04.63.1.84.07.21.16.43.29.68.05.07.07.14.07.21 0 .09-.06.18-.18.27l-.59.39a.45.45 0 0 1-.25.09c-.1 0-.2-.05-.3-.14a3.1 3.1 0 0 1-.36-.47 7.7 7.7 0 0 1-.31-.59c-.73.86-1.65 1.29-2.76 1.29-.79 0-1.42-.23-1.88-.68-.46-.45-.7-1.06-.7-1.81 0-.8.28-1.45.85-1.94.57-.49 1.33-.73 2.3-.73.32 0 .65.03.99.08.34.05.7.13 1.07.22V7.1c0-.71-.15-1.21-.44-1.5-.3-.29-.81-.43-1.54-.43-.33 0-.67.04-1.02.12-.35.08-.69.18-1.02.31a2.71 2.71 0 0 1-.33.12.58.58 0 0 1-.15.03c-.13 0-.2-.09-.2-.29v-.46c0-.15.02-.27.07-.34.05-.07.14-.14.28-.21.33-.17.73-.31 1.19-.42a5.73 5.73 0 0 1 1.47-.18c1.12 0 1.94.25 2.47.76.52.51.79 1.28.79 2.31v3.04zm-3.81 1.43c.31 0 .63-.06.97-.17.34-.11.64-.32.9-.6.15-.18.27-.38.32-.6.06-.22.09-.49.09-.81v-.39a7.78 7.78 0 0 0-.85-.16 6.96 6.96 0 0 0-.87-.05c-.62 0-1.07.12-1.37.37-.3.25-.45.6-.45 1.06 0 .43.11.75.34.96.22.22.55.32.97.32zm7.54 1.02c-.17 0-.28-.03-.36-.09-.07-.06-.14-.18-.19-.36L7.78 4.74a1.62 1.62 0 0 1-.08-.37c0-.15.07-.23.22-.23h.92c.18 0 .3.03.37.09.07.06.13.18.18.36l1.55 6.12 1.45-6.12c.04-.18.1-.3.17-.36.07-.06.2-.09.37-.09h.75c.18 0 .3.03.37.09.07.06.13.18.17.36l1.46 6.2 1.6-6.2a.83.83 0 0 1 .18-.36c.07-.06.19-.09.37-.09h.87c.15 0 .23.07.23.23 0 .05-.01.1-.02.16-.01.06-.03.14-.07.25l-2.23 7.32c-.05.18-.11.3-.18.36-.07.06-.2.09-.37.09h-.81c-.18 0-.3-.03-.37-.09-.07-.06-.13-.18-.17-.37l-1.44-5.97-1.43 5.96c-.04.18-.1.3-.17.37-.07.06-.2.09-.37.09zm12.04.25c-.46 0-.91-.05-1.35-.16-.44-.11-.78-.23-1.01-.36-.14-.08-.24-.17-.27-.25a.65.65 0 0 1-.05-.25v-.48c0-.2.07-.29.21-.29.06 0 .11.01.17.03.06.02.15.06.25.1.34.15.71.27 1.1.35.4.08.79.12 1.19.12.63 0 1.12-.11 1.46-.33.34-.22.51-.54.51-.95 0-.28-.09-.51-.27-.7-.18-.19-.52-.36-1-.51l-1.43-.45c-.72-.23-1.25-.57-1.58-1.02a2.38 2.38 0 0 1-.5-1.45c0-.42.09-.79.27-1.11.18-.32.42-.6.72-.82.3-.23.64-.4 1.04-.52.4-.12.82-.17 1.26-.17.22 0 .45.01.67.04.23.03.44.07.65.11.2.05.39.1.57.16.18.06.32.12.42.18.14.08.24.16.3.25.06.08.09.19.09.33v.44c0 .2-.07.3-.21.3-.07 0-.2-.04-.36-.11a4.34 4.34 0 0 0-1.83-.37c-.58 0-1.03.09-1.35.28-.32.19-.48.48-.48.89 0 .28.1.51.3.7.2.19.57.38 1.09.55l1.4.44c.71.23 1.22.55 1.53.96.31.41.46.88.46 1.4 0 .43-.09.81-.26 1.15-.18.34-.42.63-.73.86-.31.24-.68.42-1.11.54-.45.13-.92.19-1.43.19z',
};

const stack = [
  { name: 'React', icon: siReact },
  { name: 'Next.js', icon: siNextdotjs },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'JavaScript', icon: siJavascript },
  { name: 'Python', icon: siPython },
  { name: 'HTML5', icon: siHtml5 },
  { name: 'CSS', icon: siCss },
  { name: 'Tailwind CSS', icon: siTailwindcss },
  { name: 'DaisyUI', icon: siDaisyui },
  { name: 'GSAP', icon: siGreensock },
  { name: 'Framer Motion', icon: siFramer },
  { name: 'Lenis', icon: lenisIcon },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'Express', icon: siExpress },
  { name: 'MongoDB', icon: siMongodb },
  { name: 'MySQL', icon: siMysql },
  { name: 'Pandas', icon: siPandas },
  { name: 'PyQt', icon: siQt },
  { name: 'Excel', icon: excelIcon },
  { name: 'VBA', icon: vbaIcon },
  { name: 'Docker', icon: siDocker },
  { name: 'AWS', icon: awsIcon },
  { name: 'Vercel', icon: siVercel },
  { name: 'Figma', icon: siFigma },
  { name: 'Git', icon: siGit },
  { name: 'GitHub', icon: siGithub },
  { name: 'Vite', icon: siVite },
];


const colorOverrides = {
  'Next.js': 'FFFFFF',
  'Vercel': 'FFFFFF',
  'GitHub': 'FFFFFF',
  'Express': 'FFFFFF',
  'Pandas': '8B7FD6',
};

function BrandIcon({ icon, name, size = 18 }) {
  const fill = colorOverrides[name] || icon.hex;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={`#${fill}`}
      className="flex-shrink-0 transition-transform group-hover:scale-110"
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="px-6 md:px-12 py-20 md:py-28 relative">
      <SectionHeader
        title="Tech Stack"
        description="The tools and technologies I use to bring ideas to life — from frontend to backend, design to deployment."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-wrap justify-center gap-2.5">
          {stack.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.025, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="tech-pill group cursor-default"
            >
              <BrandIcon icon={t.icon} name={t.name} />
              <span className="text-sm font-medium">{t.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mt-10 text-xs text-muted font-mono"
        >
          + always learning what's next
        </motion.div>
      </motion.div>
    </section>
  );
}
