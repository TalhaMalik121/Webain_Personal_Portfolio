import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.offsetTop - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Navbar({ active }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="fixed top-0 left-0 right-0 z-50 bg-indigo-900/40 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("home");
            setIsOpen(false);
          }}
          className="font-extrabold tracking-wide text-emerald-400 hover:scale-105 transition-transform"
        >
          Portfolio
        </a>

        <div className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.to}
              href={`#${l.to}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(l.to);
              }}
              className={`cursor-pointer relative group transition-all ${
                active === l.to ? "text-emerald-400" : "text-white"
              }`}
            >
              <span className="relative z-10 group-hover:text-emerald-400 transition-colors duration-300">
                {l.label}
              </span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_2px_rgba(16,185,129,0.7)] ${
                  active === l.to
                    ? "w-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(16,185,129,0.7)]"
                    : "w-0 bg-emerald-400"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block h-0.5 w-6 bg-emerald-400"></span>
          <span className="block h-0.5 w-6 bg-emerald-400"></span>
          <span className="block h-0.5 w-6 bg-emerald-400"></span>
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-indigo-950/80 backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.to}
              href={`#${l.to}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(l.to);
                setIsOpen(false);
              }}
              className="block px-4 py-3 text-white hover:bg-emerald-400 hover:text-black transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
