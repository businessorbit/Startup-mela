import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// --- Internal Counter Component ---
const Counter = ({ value, label, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [count, setCount] = useState(0);

  const targetNumber = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;
    const duration = 1200;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const ease = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(ease * targetNumber));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, targetNumber]);

  return (
    <div ref={ref} className="flex flex-col items-start">
      {/* Icon and Value aligned horizontally */}
      <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
        <div className="p-1.5 sm:p-2 rounded-full bg-neutral-100/50 flex-shrink-0">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B]">
            {icon}
          </div>
        </div>
        {/* Responsive font size with better scaling */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight tabular-nums">
          {count}
          {suffix}
        </div>
      </div>
      {/* Label underneath */}
      <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 pl-0.5">
        {label}
      </p>
    </div>
  );
};

// --- Main About Section ---
const AboutSection = () => {
  return (
    <section
      data-theme="light"
      data-tail="black"
      // Responsive padding: py-16 mobile -> py-32 desktop
      className="relative w-full bg-white py-16 sm:py-24 md:py-32 overflow-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Responsive container padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Top Layout: Grid */}
        {/* Changed grid columns to stack on mobile, sidebar layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-24">
          {/* Left Label */}
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs sm:text-sm font-bold tracking-widest text-neutral-400 uppercase flex items-center gap-2"
            >
              <span className="text-blue-600 font-black tracking-tighter">
                ~~
              </span>{" "}
              ABOUT
            </motion.p>
          </div>

          {/* Right Paragraph with Highlighted Words */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-tight md:leading-[1.2] font-medium text-neutral-400 max-w-4xl"
            >
              Join the biggest{" "}
              <span className="text-black font-bold">Startup Exhibition</span>,
              in <span className="text-black font-bold">Chandigarh</span>.{" "}
              <span className="text-black font-bold">Pitch</span> your ideas to
              top <span className="text-black font-bold">investors</span>, and{" "}
              <span className="text-black font-bold">network</span> with
              thousands of founders.
            </motion.h2>
          </div>
        </div>

        {/* Stats Row */}
        {/* Responsive Grid: 1 col on small mobile, 2 cols mobile -> 4 cols on larger screens */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-12 lg:gap-y-0 gap-x-6 sm:gap-x-8 lg:gap-x-12 border-t border-neutral-200 pt-8 sm:pt-12 lg:pt-16 font-bold">
          <Counter
            value="10+"
            label="Sub-Events"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#icon-gradient-about)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            }
          />

          <Counter
            value="500+"
            label="Startups"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#icon-gradient-about)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />

          <Counter
            value="50+"
            label="Investors"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#icon-gradient-about)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />

          <Counter
            value="20000+"
            label="Footfall"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#icon-gradient-about)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
              </svg>
            }
          />
        </div>

        {/* Define the gradient for the icons */}
        <svg width="0" height="0">
          <linearGradient
            id="icon-gradient-about"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#00C2FF" />
            <stop offset="50%" stopColor="#0070FF" />
            <stop offset="100%" stopColor="#00E29B" />
          </linearGradient>
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
