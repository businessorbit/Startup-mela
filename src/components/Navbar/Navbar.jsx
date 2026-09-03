import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

// Links (use section ids or routes as needed)
const navLinks = [
  { label: "Event", href: "/event" },
  { label: "Spotlight", href: "/spotlight" },
  { label: "Exhibition Stalls", href: "/exhibition-stalls" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Work with Us", href: "/workwithus" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Match hero (dark) so white logo shows on first paint — avoids blank "Startup"
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetTickets = (e) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === "/" && location.hash === "#passes") {
      document.getElementById("passes")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (location.pathname === "/") {
      document.getElementById("passes")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate({ pathname: "/", hash: "passes" });
  };

  useEffect(() => {
    let removeListeners = null;

    const timer = setTimeout(() => {
      const sections = Array.from(document.querySelectorAll("[data-theme]"));
      if (sections.length === 0) return;

      const themeAtNavbar = () => {
        // Sample the band under the fixed navbar (where the logo sits)
        const probeY = 72;
        let current = "dark";
        for (const el of sections) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= probeY && rect.bottom > probeY) {
            current = el.getAttribute("data-theme") || "dark";
            break;
          }
        }
        setTheme(current);
      };

      themeAtNavbar();
      window.addEventListener("scroll", themeAtNavbar, { passive: true });
      window.addEventListener("resize", themeAtNavbar);
      removeListeners = () => {
        window.removeEventListener("scroll", themeAtNavbar);
        window.removeEventListener("resize", themeAtNavbar);
      };
    }, 50);

    return () => {
      clearTimeout(timer);
      if (removeListeners) removeListeners();
    };
  }, [location.pathname]);

  return (
    <nav
      className="fixed left-0 top-0 w-full z-[9998] bg-transparent uppercase"
      aria-label="Main navigation"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-[1600px] mx-auto h-16 sm:h-[4.5rem] md:h-20 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Fixed logo slot — both assets stacked so theme swap never changes size */}
        <a
          href="/"
          className="relative block shrink-0 select-none h-10 w-[168px] sm:h-11 sm:w-[188px] md:h-12 md:w-[210px]"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate("/");
              setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
            }
          }}
        >
          <img
            src="/logo-light.png?v=5"
            alt=""
            aria-hidden={theme !== "dark"}
            className={`absolute inset-0 h-full w-full object-contain object-left pointer-events-none transition-opacity duration-200 ${
              theme === "dark" ? "opacity-100" : "opacity-0"
            }`}
            draggable={false}
          />
          <img
            src="/logo-dark.png?v=5"
            alt="Startup Mela"
            className={`absolute inset-0 h-full w-full object-contain object-left pointer-events-none transition-opacity duration-200 ${
              theme === "dark" ? "opacity-0" : "opacity-100"
            }`}
            draggable={false}
          />
        </a>

        {/* Desktop Links */}
        {/* Responsive Gap: smaller gap for tablets (lg), larger for desktops (xl) */}
        <div className="hidden 2xl:flex items-baseline gap-8 xl:gap-12 font-semibold">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              text={link.label}
              href={link.href}
              theme={theme}
            />
          ))}

          {/* CTA */}
          <motion.button
            onClick={handleGetTickets}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="pl-6 pr-5 py-2.5 rounded-full bg-white text-black text-sm font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors flex items-center gap-2 group cursor-pointer"
          >
            Get Tickets
            <ArrowRight
              size={16}
              strokeWidth={2.5}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        {/* --- Mobile Hamburger Toggle --- */}
        <button
          onClick={() => setIsOpen(true)}
          className="2xl:hidden p-2 bg-white rounded-lg text-black focus:outline-none z-101"
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
              className="fixed inset-0 bg-black z-9999 flex flex-col w-full h-dvh overflow-hidden"
            >
              {/* Close Button Header */}
              <div className="flex justify-end p-4 sm:p-6 md:p-12 pt-[max(1rem,env(safe-area-inset-top))]">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:text-neutral-300 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={40} strokeWidth={2.5} />
                </button>
              </div>

              {/* Menu Links Container — min-h-0 + my-auto avoids top clipping when content overflows */}
              <div className="flex flex-col items-center grow min-h-0 w-full overflow-y-auto overscroll-contain px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
                <div className="flex flex-col items-center gap-5 sm:gap-7 md:gap-9 my-auto py-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      onClick={(e) => {
                        setIsOpen(false);
                        if (link.href.startsWith("/#")) {
                          e.preventDefault();
                          const hash = link.href.slice(1);
                          if (location.pathname === "/") {
                            document
                              .querySelector(hash)
                              ?.scrollIntoView({ behavior: "smooth" });
                          } else {
                            navigate({
                              pathname: "/",
                              hash: hash.replace(/^#/, ""),
                            });
                          }
                        }
                      }}
                      className="text-2xl sm:text-3xl md:text-6xl font-bold text-white uppercase tracking-wider hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 transition-all text-center"
                    >
                      {link.label}
                    </motion.a>
                  ))}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 sm:mt-8"
                  >
                    <button onClick={handleGetTickets} className="px-8 py-3 sm:px-10 sm:py-4 rounded-full bg-white text-black text-lg sm:text-xl font-bold uppercase tracking-wider flex items-center gap-3 shadow-xl active:scale-95 transition-transform cursor-pointer">
                      Get Tickets
                      <ArrowRight size={24} strokeWidth={2.5} />
                    </button>
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
