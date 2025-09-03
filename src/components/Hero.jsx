import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const fullText = "Hi, Welcome to My Portfolio";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    setTyped("");
    const id = setInterval(() => {
      if (i < fullText.length) {
        setTyped(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(id);
      }
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">
            {typed}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            A clean and modern portfolio template to showcase skills, projects,
            and creativity.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-semibold bg-emerald-500 text-black hover:bg-emerald-600 transition-transform hover:scale-105 shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold bg-violet-600 text-white hover:bg-violet-700 transition-transform hover:scale-105 shadow-lg"
            >
              Let’s Connect
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://via.placeholder.com/400x400.png?text=Your+Image"
            alt="Hero Placeholder"
            className="rounded-2xl shadow-lg w-72 md:w-96 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
