import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 bg-slate-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-violet-600/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="https://via.placeholder.com/400x300.png?text=About+Me"
            alt="About placeholder"
            className="rounded-2xl object-cover w-full h-72 shadow-xl ring-4 ring-violet-600/50"
          />
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 leading-relaxed text-lg"
          >
            I’m a tech enthusiast passionate about{" "}
            <span className="text-emerald-400 font-semibold">AI/ML</span>,{" "}
            <span className="text-violet-400 font-semibold">Web Development</span>, 
            and building applications that solve real-world problems. I love 
            experimenting with new tools and frameworks while staying focused 
            on creating clean, functional, and engaging digital experiences.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
