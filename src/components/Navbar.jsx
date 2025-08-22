
import { motion } from "framer-motion";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.offsetTop - 80; // account for fixed navbar
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Navbar({ active }) {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" onClick={(e)=>{e.preventDefault(); scrollToId('home')}} className="font-extrabold tracking-wide hover:scale-105 transition-transform">Talha</a>
        <div className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.to}
              href={`#${l.to}`}
              onClick={(e)=>{e.preventDefault(); scrollToId(l.to);}}
              className={`cursor-pointer relative group transition-colors hover:scale-105 ${active === l.to ? "text-mustard" : "hover:text-yellow-300"}`}
            >
              <span className="relative z-10">{l.label}</span>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-mustard transition-all ${active === l.to ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
