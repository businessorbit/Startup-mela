import { useState } from "react";
import { motion } from "framer-motion";

// Backend API Base
const API_BASE = "https://startupmelabackend.vercel.app/api"; // <-- REPLACE THIS

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", category: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div
      className="relative min-h-screen w-full selection:bg-[#00C2FF]/30 text-black"
      style={{
        backgroundColor: "#ffffff",
        overflowX: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <main className="relative z-10 pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[18vw] md:text-[14rem] font-bold tracking-tighter leading-[0.8] mb-20 md:mb-32 select-none"
          >
            Contact
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            {/* Left Text */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-2xl font-medium text-neutral-400 max-w-4xl"
              >
                If you have any questions about{" "}
                <span className="text-black font-bold">ticketing</span>,{" "}
                <span className="text-black font-bold">sponsorship</span>,{" "}
                <span className="text-black font-bold">exhibition</span>, and{" "}
                <span className="text-black font-bold">general enquiry</span>{" "}
                please fill the form and we will reach out to you. You can also
                email us at{" "}
                <a
                  href="mailto:contact@startupmela.com"
                  className="text-black font-bold"
                >
                  contact@startupmela.com
                </a>{" "}
                or call{" "}
                <a href="tel:+917743096565" className="text-black font-bold">
                  7743096565
                </a>
                .
              </motion.h2>
            </div>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-lg lg:ml-auto space-y-12"
            >
              {/* Name */}
              <div className="group">
                <label className="block text-sm font-bold uppercase tracking-widest text-black mb-4">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-neutral-300 py-4 text-xl md:text-2xl outline-none focus:border-blue-600 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-sm font-bold uppercase tracking-widest text-black mb-4">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full bg-transparent border-b border-neutral-300 py-4 text-xl md:text-2xl outline-none focus:border-blue-600 transition-colors"
                />
              </div>

              {/* Category */}
              <div className="group relative">
                <label className="block text-sm font-bold uppercase tracking-widest text-black mb-4">
                  Category:
                </label>
                <select
                  name="category"
                  value={formState.category}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-300 py-4 text-xl md:text-2xl outline-none focus:border-blue-600 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select Category...
                  </option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="ticketing">Ticketing</option>
                  <option value="stalls">Stalls & Exhibition</option>
                  <option value="general">General Inquiry</option>
                </select>

                <div className="absolute right-0 bottom-6 pointer-events-none text-neutral-400">
                  <svg width="14" height="8" viewBox="0 0 14 8">
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-sm font-bold uppercase tracking-widest text-black mb-4">
                  Message:
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your Message Here..."
                  className="w-full bg-transparent border-b border-neutral-300 py-4 text-xl md:text-2xl outline-none focus:border-blue-600 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-8 flex justify-end">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-10 py-4 rounded-full bg-black text-white font-bold text-lg hover:bg-neutral-800 transition-transform active:scale-95 shadow-xl"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-600 font-bold text-lg pt-4">
                  Message Sent Successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 font-bold text-lg pt-4">
                  Error Sending Message. Please Try Again.
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
