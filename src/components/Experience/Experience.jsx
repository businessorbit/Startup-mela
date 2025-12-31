import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Visionary talks",
    description:
      "Don't just listen—participate. Join expert talks, then jump into the action with live pitching rounds, networking meets, and our student Ideathon.",
  },
  {
    id: "02",
    title: "Live Entertainment ",
    description:
      "Business festivals can be fun too. Unwind with stand-up comedy, influencer shows, a runway fashion walk, and a high-energy gaming tournament.",
  },
  {
    id: "03",
    title: "Startup Expo",
    description:
      "Explore a massive marketplace with 300+ startups. Discover new products, meet the founders, and see what the future of innovation looks like.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      data-theme="light"
      // Responsive padding: py-16 mobile -> py-40 desktop
      className="relative w-full bg-white py-16 sm:py-24 md:py-32 lg:py-40"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Responsive container padding: px-4 mobile -> px-12 desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-bold tracking-widest text-neutral-400 flex items-center gap-2"
          >
            <span className="text-blue-600 font-black tracking-tighter">
              ~~
            </span>{" "}
            EXPERIENCE
          </motion.p>
        </div>
        {/* --- Intro Row --- */}
        {/* Adjusted gap and margin for mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            // Responsive font size: text-4xl mobile -> text-[5rem] desktop
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight text-black leading-[0.9]"
          >
            <br className="hidden md:block" />
            What to expect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // Responsive text size: text-base mobile -> text-xl desktop
            className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-lg lg:justify-self-end leading-relaxed"
          >
            Join us for a two day summit designed to spark ideas, forge
            partnerships, and shape what's next.
          </motion.p>
        </div>

        {/* --- Cards Grid --- */}
        {/* Responsive Gap: gap-4 mobile -> gap-6 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Standard Cards 01-03 */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -8 }}
              // Responsive padding and min-height
              className="group relative flex flex-col justify-between p-6 sm:p-8 bg-[#f7f7f7] rounded-1xl min-h-[380px] sm:min-h-[450px] transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 sm:top-8 sm:right-8 text-sm font-mono text-neutral-400">
                {feature.id}
              </span>

              {/* Content */}
              <div className="mt-auto">
                {/* Responsive heading size */}
                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Special Dark Card 04 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -8 }}
            // Responsive padding and min-height matches standard cards
            className="relative flex flex-col justify-between p-6 sm:p-8 bg-black rounded-2xl min-h-[380px] sm:min-h-[450px] overflow-hidden group"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black opacity-100" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

            {/* Hover Gradient Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px] group-hover:bg-blue-500/40 transition-colors duration-500" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-4 backdrop-blur-sm border border-white/10">
                  Get Involved
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Want to be involved?
                </h3>
              </div>

              <a
                href="/contact"
                className="group/btn flex items-center justify-between w-full bg-white text-black px-5 py-3 sm:px-6 sm:py-4 rounded-full font-semibold mt-8 transition-transform active:scale-95 text-sm sm:text-base"
              >
                <span>Get in touch</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover/btn:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
