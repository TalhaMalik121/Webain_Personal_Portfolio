
import { motion } from "framer-motion";

const mustard = "#F0A500";
const purple = "#6D28D9";

const projects = [
  { name: "OCR Desktop App", desc: "Tkinter editor + Tesseract/TrOCR.", link: "#" },
  { name: "Emotion Classifier", desc: "NLP pipeline with Transformers.", link: "#" },
  { name: "Portfolio Website", desc: "Responsive React + Tailwind.", link: "#" },
  { name: "DataViz Toolkit", desc: "Charts & dashboards in React.", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-80px" }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="text-center text-3xl font-extrabold text-yellow-400 border-b-2 border-yellow-400 pb-2"
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              whileHover={{ y: -4, rotate: -0.25 }}
              className="rounded-2xl p-6 shadow-lg text-black cursor-pointer transition-transform hover:scale-105"
              style={{ background: mustard }}
            >
              <h3 className="font-bold text-xl">{p.name}</h3>
              <p className="mt-2 mb-4 text-black/80">{p.desc}</p>
              <a
                href={p.link}
                className="inline-block px-4 py-2 rounded-full text-white transition-transform hover:scale-105"
                style={{ background: purple }}
              >
                Check on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
