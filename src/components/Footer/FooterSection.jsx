import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import AnimatedBg from "../AnimatedBg/AnimatedBg";

const footerLinks = [
  { label: "Agenda", href: "/#agenda" },
  { label: "Venue", href: "/" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
];

const FooterSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToHash = (hash) => {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHashNav = (e, href) => {
    if (!href.startsWith("/#")) return;
    e.preventDefault();
    const hash = href.slice(2);
    if (location.pathname === "/") {
      scrollToHash(`#${hash}`);
    } else {
      navigate({ pathname: "/", hash });
    }
  };

  const handlePassesClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToHash("#passes");
    } else {
      navigate({ pathname: "/", hash: "passes" });
    }
  };

  return (
    <section
      data-theme="dark"
      data-tail="white"
      className="relative w-full bg-black py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col items-center justify-between min-h-[50vh] md:min-h-[60vh] pb-[max(3rem,env(safe-area-inset-bottom))]"
    >
      <AnimatedBg />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/20 to-neutral-900/80 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute top-8 left-8 md:left-12 hidden md:block">
        <img
          src="/logo-light.png?v=5"
          alt="Startup Mela"
          className="h-10 w-auto max-w-[180px] object-contain object-left opacity-90"
          draggable={false}
        />
      </div>

      <div className="absolute top-8 right-8 md:right-12 text-xs font-mono text-neutral-600 hidden md:block">
        Designed by Gemini
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center max-w-4xl mx-auto my-8 sm:my-10 md:my-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 sm:mb-6"
        >
          Join us in <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B]">
            March 2027.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-neutral-400 mb-8 sm:mb-10 font-light px-2"
        >
          Secure your spot for Startup Mela 2027 now.
        </motion.p>
        <a href="/#passes" onClick={handlePassesClick}>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B] text-white text-base sm:text-lg font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow"
          >
            Get your ticket
          </motion.button>
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full pt-8 sm:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
      >
        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4">
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleHashNav(e, item.href)}
              className="text-xs md:text-sm uppercase tracking-widest text-neutral-500 hover:text-white transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        <p className="text-[10px] text-neutral-700 font-mono mt-4 sm:mt-6 md:mt-0 md:absolute md:right-0">
          © 2027 STARTUP MELA. ALL RIGHTS RESERVED.
        </p>
      </motion.div>
    </section>
  );
};

export default FooterSection;
