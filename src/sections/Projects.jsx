import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const projects = [
  {
    category: 'SaaS Landing Page',
    name: 'CarFleet',
    url : "https://car-fleet-rho.vercel.app/",
    imageUrl : "https://github.com/user-attachments/assets/ef57c7be-8378-461c-a843-a53aac750fba",
    desc: 'A modern, full-stack car rental marketplace where users can browse, book, and list vehicles for rent. Built with a cockpit-inspired UI featuring molded buttons, telemetry-style readouts, and a premium automotive aesthetic.',
  },
    {   
    category: 'Desktop Application',
    name: 'Bizom Automizer',
    url : "https://drive.google.com/file/d/1ZDKXlBnZ3ijVwe2yr8_Kb2a_MvsHsufm/view",
    imageUrl : "/Bizom.png",
    desc: "𝐁𝐢𝐳𝐨𝐦 𝐀𝐮𝐭𝐨𝐦𝐢𝐳𝐞𝐫 is a desktop software designed to enhance the operational workflow of the retail intelligence platform Bizom.",
  },
  {
    category: 'SaaS Landing Page',
    name: 'Mango Library',
    url : "https://mango-library.vercel.app/",
    imageUrl : "https://github.com/user-attachments/assets/0f89c4ca-e1ac-473e-875c-79e6618e42a2",
    desc: 'High-performance digital library platform built with the modern web stack. It digitizes the traditional library experience, offering users a seamless way to browse, search, and borrow books with a stunning user interface.',
  },
  {
    title: 'Tech Wave',
    category: 'SaaS Landing Page',
    name: 'Tech Wave',
    url : "https://grrabby.github.io/PH-Assignment-2/",
    imageUrl: "https://github.com/user-attachments/assets/27de147a-cdec-4e62-a684-7f24992cd5b3",
    desc: 'A web-based project built as part of Programming Hero Assignment 2.This project demonstrates practical implementation of modern web development concepts including UI design, responsiveness, and JavaScript functionality.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-20 md:py-28 relative">
      <SectionHeader
        title="Recent Projects"
        description="A curated mix of projects — scalable, fast, and future-ready — blending design, code, and creativity."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            target="_blank"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="card overflow-hidden group hover:border-accent/40 transition-all duration-500 block"
          >
            <div className="relative bg-cover bg-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-accent2/40 via-accent/20 to-bg2 border-b border-border max-h-60 min-h-60"
                style={{
                    backgroundImage: `url(${p.imageUrl})`,
                }}>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg/60 to-transparent" />
            </div>

            <div className="p-5">
              <div className="text-xs text-muted mb-2">{p.category}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                {p.name}
              </h3>
              <p className="text-sm text-soft leading-relaxed">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
