
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const categories = ["All", "Programming", "Design", "AI", "Tools"];

const allSkills = [
  { name: "React", icon: "⚛️", category: "Programming" },
  { name: "Python", icon: "🐍", category: "Programming" },
  { name: "JavaScript", icon: "🟨", category: "Programming" },
  { name: "HTML", icon: "📄", category: "Programming" },
  { name: "CSS", icon: "🎨", category: "Programming" },
  { name: "Bootstrap", icon: "🥾", category: "Programming" },
  { name: "Django", icon: "🐎", category: "Programming" },
  { name: "TailwindCSS", icon: "🌬️", category: "Design" },
  { name: "Figma", icon: "🎛️", category: "Design" },
  { name: "TensorFlow", icon: "🧠", category: "AI" },
  { name: "NumPy", icon: "🔢", category: "AI" },
  { name: "Pandas", icon: "🐼", category: "AI" },
  { name: "Scikit-learn", icon: "⚙️", category: "AI" },
  { name: "Keras", icon: "🧠", category: "AI" },
  { name: "NLTK", icon: "🔤", category: "AI" },
  { name: "BeautifulSoup", icon: "🍲", category: "AI" },
  { name: "Git", icon: "🌿", category: "Tools" },
  { name: "GitHub", icon: "🐙", category: "Tools" },
];

export default function Skills() {
  const [filter, setFilter] = useState("All");
  const skills = useMemo(() => {
    return filter === "All" ? allSkills : allSkills.filter(s => s.category === filter);
  }, [filter]);

  return (
    <section id="skills" className="px-5 py-12">
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
          Skills
        </motion.h2>

        <div className="flex justify-center flex-wrap gap-4 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-4 py-2 rounded-full font-semibold transition-all hover:scale-105 ${filter === cat ? "text-yellow-400" : "text-gray-300"}`}
            >
              {cat}
              {filter === cat && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(240,165,0,0.6)" }}
              className="p-6 rounded-2xl bg-black/40 flex flex-col items-center justify-center gap-3 text-center"
            >
              <div className="text-yellow-400 text-4xl">{s.icon}</div>
              <p className="font-medium">{s.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
