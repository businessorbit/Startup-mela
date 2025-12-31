import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

// Links (use section ids or routes as needed)
const navLinks = [
  { label: "About", href: "/" },
  {
    label: "Event",
    href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:6c1a6aa5-3e9e-4275-a4b2-faba0c612eb3",
  },
  { label: "Passes", href: "#passes" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Work with Us", href: "/workwithus" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light"); // "light" => dark text, "dark" => white text

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const t = entry.target.getAttribute("data-theme");
          if (entry.isIntersecting && t) setTheme(t);
        });
      },
      { threshold: 0.6 }
    );

    document
      .querySelectorAll("[data-theme]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const textColorClass = theme === "dark" ? "text-white" : "text-black";

  return (
    <nav
      // Adjusted vertical padding: py-4 for mobile, increasing to py-7 for desktop
      className={`fixed left-0 w-full z-[9998] bg-transparent py-4 sm:py-6 md:py-7 transition-all uppercase`}
      aria-label="Main navigation"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Adjusted horizontal padding: px-4 mobile -> px-6 sm -> px-8 md -> px-12 desktop */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between">
        {/* Logo */}
        <a
          href="/"
          className={`flex items-end gap-2 select-none ${textColorClass}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {/* Logo Text: text-xl mobile -> text-2xl sm -> text-3xl md */}
          <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight pb-2">
            Startup
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B]">
              Mela
            </span>
          </span>
          {/* Year Text: text-xs mobile -> text-sm sm -> text-base md */}
          <span className="ml-2 text-xs sm:text-sm md:text-base font-semibold text-neutral-400 align-top pb-2 md:pb-5">
            2026
          </span>
        </a>

        {/* Desktop Links */}
        {/* Adjusted Gap: gap-8 for lg (laptops) -> gap-12 for xl (large screens) to prevent cramping */}
        <div className="hidden lg:flex items-baseline gap-8 xl:gap-12 font-semibold">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              text={link.label}
              href={link.href}
              theme={theme}
            />
          ))}

          {/* CTA */}
          <motion.a
            href="#passes"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="pl-6 pr-5 py-2.5 rounded-full bg-white text-black text-sm font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors flex items-center gap-2 group"
          >
            Get Tickets
            <ArrowRight 
              size={16} 
              strokeWidth={2.5} 
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        {/* --- Mobile Hamburger Toggle --- */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 bg-white rounded-lg text-black focus:outline-none z-101"
          aria-label="Open menu"
        >
          <Menu size={30} strokeWidth={2.5} />
        </button>

        {/* --- FULLSCREEN MOBILE MENU --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-black z-9999 flex flex-col w-screen h-dvh overflow-hidden"
            >
              {/* Close Button Header */}
              {/* Adjusted padding: p-4 mobile -> p-6 sm -> p-12 md */}
              <div className="flex justify-end p-4 sm:p-6 md:p-12">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:text-neutral-300 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={40} strokeWidth={2.5} />
                </button>
              </div>

              {/* Menu Links Container */}
              <div className="flex flex-col items-center justify-center grow w-full pb-20 overflow-y-auto">
                {/* Adjusted gap: gap-6 mobile -> gap-8 sm -> gap-10 md */}
                <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      onClick={() => setIsOpen(false)}
                      // Responsive text size: text-3xl mobile -> text-4xl sm -> text-6xl md
                      className="text-3xl sm:text-4xl md:text-6xl font-bold text-white uppercase tracking-wider hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 transition-all text-center"
                    >
                      {link.label}
                    </motion.a>
                  ))}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8"
                  >
                    <a href="#passes" onClick={() => setIsOpen(false)}>
                      {/* Responsive Button: padded down for mobile, full size for tablets/up */}
                      <button className="px-8 py-3 sm:px-10 sm:py-4 rounded-full bg-white text-black text-lg sm:text-xl font-bold uppercase tracking-wider flex items-center gap-3 shadow-xl active:scale-95 transition-transform">
                        Get Tickets
                        <ArrowRight size={24} strokeWidth={2.5} />
                      </button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

/**
 * NavLink component — preserves original hover animation:
 * - Two stacked spans: top (regular text) slides up on hover
 * - bottom (gradient text) slides up into view
 * - underline expands on hover
 *
 * Props:
 * - text: label
 * - href: link
 * - theme: "dark" | "light" used to set base text color on desktop
 * - mobile: boolean (not used for desktop hover)
 */
const NavLink = ({ text, href, theme }) => {
  // base color depending on theme
  const baseClass = theme === "dark" ? "text-white" : "text-black";

  // Desktop-only styling: keep uppercase small text as in original design
  return (
    <a
      href={href}
      className={`relative group block whitespace-nowrap select-none`}
      aria-label={text}
    >
      <span className="block overflow-hidden relative">
        {/* original top text that slides up */}
        <span
          className={`block transition-transform duration-300 group-hover:-translate-y-full ${baseClass}`}
        >
          {text}
        </span>

        {/* gradient revealed text under */}
        <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-clip-text text-transparent bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B]">
          {text}
        </span>
      </span>

      {/* underline animation */}
      <span
        className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B] transition-all duration-300 group-hover:w-full`}
        aria-hidden="true"
      />
    </a>
  );
};

export default Navbar;