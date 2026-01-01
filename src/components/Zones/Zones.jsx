import { motion } from "framer-motion";

const zones = [
  {
    id: 1,
    title: "The Marketplace",
    subtitle:
      "A high-energy exhibition space featuring 300+ startups, 192 tables, 45 pods, 22 premium pods, and 50,000+ footfall.",
    details: [
      "300+ Startups",
      "15,000+ Footfall",
    ],
  },
  {
    id: 2,
    title: "Main Stage Experience",
    subtitle:
      "Live entertainment arena for fashion shows, product launches, influencer shows, award ceremonies, gaming tournaments, and comedy acts.",
    details: [
      "Fashion Show",
      "Product Launches",
      "Influencer Show",
      "Award Night",
      "Gaming Tournament",
      "Live Comedy",
    ],
  },
  {
    id: 3,
    title: "Conference Zone",
    subtitle:
      "The learning and networking hub featuring speaker sessions, panels, investor meetings, ideathon finals, and pitching rounds.",
    details: [
      "Expert Sessions",
      "Networking Conference",
      "Ideathon Finals",
      "Pitching Event",
    ],
  },
];

const ZonesSection = () => {
  return (
    <section
      data-theme="light"
      data-tail="black"
      // CHANGED: Switched from fixed h-screen to min-h-screen for mobile scrolling, fixed height only on desktop
      // CHANGED: Removed overflow-hidden on mobile to allow natural page scroll
      className="relative w-full min-h-screen md:h-screen bg-white overflow-visible md:overflow-hidden"
    >
      {/* CHANGED: Removed gap on mobile for tighter stacking, kept gap on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 h-full">
        {/* --- LEFT SIDE (Static / Sticky) --- */}
        {/* CHANGED: Un-hid this section on mobile (flex instead of hidden) so users see the title */}
        {/* CHANGED: Adjusted padding for mobile vs desktop */}
        <div className="flex flex-col justify-center px-6 py-12 md:p-10 md:pl-20 md:pr-10 h-auto md:h-full relative border-b md:border-b-0 border-neutral-100">
          <div className="w-full max-w-xl sticky top-[20%]">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs sm:text-sm font-bold tracking-widest text-neutral-400 mb-4 md:mb-6 flex items-center gap-2"
            >
              <span className="text-blue-600 font-black tracking-tighter">
                ~~
              </span>{" "}
              ZONES
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              // CHANGED: Responsive font scaling (text-5xl -> text-8xl)
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-black mb-6 md:mb-8 tracking-tight leading-none"
            >
              Event <br /> Zones
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              // CHANGED: Adjusted text size and max-width for readability
              className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-sm sm:max-w-md"
            >
              Startup Mela is architected into three high-energy experience
              zones — each designed to empower founders, creators, investors,
              and innovators through engagement, discovery, and collaboration.
            </motion.p>
          </div>
        </div>

        {/* --- RIGHT SIDE (Scrolling Panels) --- */}
        {/* CHANGED: Added overflow-y-scroll ONLY for desktop to enable the independent scroll effect */}
        <div className="snap-container h-auto md:h-full w-full bg-neutral-50 border-l border-neutral-100 md:overflow-y-scroll no-scrollbar">
          {zones.map((zone) => (
            <div
              key={zone.id}
              // CHANGED: Removed forced min-h-screen on mobile, replaced with comfortable padding (py-16)
              // CHANGED: Adjusted padding (p-6 -> p-20)
              className="snap-child relative w-full h-auto min-h-[50vh] md:min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-20 border-b md:border-b-0 border-neutral-200 last:border-0"
            >
              <div className="max-w-xl">
                {/* Zone ID Background Effect */}
                {/* CHANGED: Scaled down giant number for mobile screens */}
                <span className="absolute top-4 right-4 md:top-10 md:right-10 text-6xl sm:text-8xl md:text-9xl font-bold text-neutral-100/50 select-none -z-10">
                  0{zone.id}
                </span>

                {/* Zone Content Wrapper with Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block px-3 py-1 bg-black text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6 rounded-full">
                    Zone 0{zone.id}
                  </span>

                  {/* CHANGED: Responsive title sizing */}
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6 leading-tight">
                    {zone.title}
                  </h3>

                  {/* CHANGED: Adjusted margin and font size */}
                  <p className="text-base sm:text-lg text-neutral-600 mb-6 md:mb-10 leading-relaxed border-l-4 border-blue-500 pl-4 md:pl-6">
                    {zone.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {zone.details.map((detail, idx) => (
                      <span
                        key={idx}
                        // CHANGED: Smaller text and padding for mobile tags
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-neutral-200 rounded-lg text-xs sm:text-sm font-semibold text-neutral-700 shadow-sm"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonesSection;
