import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (form.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("✅ Form submitted successfully (demo only).");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-slate-950 text-white relative"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-violet-600/10 blur-3xl" />
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent"
        >
          Contact
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900/70 backdrop-blur-md p-8 rounded-2xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full px-4 py-3 rounded-lg bg-slate-800 text-white border ${
                errors.name ? "border-red-500" : "border-slate-700"
              } focus:border-emerald-400 outline-none`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`w-full px-4 py-3 rounded-lg bg-slate-800 text-white border ${
                errors.email ? "border-red-500" : "border-slate-700"
              } focus:border-emerald-400 outline-none`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              className={`w-full px-4 py-3 rounded-lg bg-slate-800 text-white border ${
                errors.message ? "border-red-500" : "border-slate-700"
              } focus:border-emerald-400 outline-none`}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-bold bg-gradient-to-r from-emerald-500 to-violet-600 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
