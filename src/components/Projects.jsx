import { motion } from "framer-motion";

const projects = [
  {
    name: "Project One",
    desc: "A modern web app built with React and Tailwind.",
    github: "#",
    demo: "#",
    image: "https://via.placeholder.com/400x250",
  },
  {
    name: "Project Two",
    desc: "An interactive dashboard using charts and animations.",
    github: "#",
    demo: "#",
    image: "https://via.placeholder.com/400x250",
  },
  {
    name: "Project Three",
    desc: "A mobile-first design with a responsive UI.",
    github: "#",
    demo: "#",
    image: "https://via.placeholder.com/400x250",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-950 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-tl from-violet-600/10 to-emerald-500/10 blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-400/40 transition-all"
            >
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-emerald-400">{p.name}</h3>
                <p className="mt-2 text-gray-300">{p.desc}</p>
                <div className="mt-4 flex gap-4">
                  <a
                    href={p.github}
                    className="px-4 py-2 bg-violet-600 hover:bg-emerald-500 rounded-full text-sm font-semibold transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={p.demo}
                    className="px-4 py-2 bg-emerald-500 hover:bg-violet-600 rounded-full text-sm font-semibold transition-colors"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
