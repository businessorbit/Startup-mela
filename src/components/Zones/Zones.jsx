import { motion } from "framer-motion";

const zones = [
  {
    id: 1,
    title: "The Marketplace",
    subtitle: "A high-energy exhibition space featuring 300+ startups, 192 tables, 45 pods, 22 premium pods, and 50,000+ footfall.",
    details: [
      "300+ Startups",
      "192 Tables",
      "45 Pods",
      "22 Premium Pods",
      "50,000+ Footfall"
    ]
  },
  {
    id: 2,
    title: "Main Stage Experience",
    subtitle: "Live entertainment arena for fashion shows, product launches, influencer shows, award ceremonies, gaming tournaments, and comedy acts.",
    details: [
      "Fashion Show",
      "Product Launches",
      "Influencer Show",
      "Award Night",
      "Gaming Tournament",
      "Live Comedy"
    ]
  },
  {
    id: 3,
    title: "Conference Zone",
    subtitle: "The learning and networking hub featuring speaker sessions, panels, investor meetings, ideathon finals, and pitching rounds.",
    details: [
      "Expert Sessions",
      "Networking Conference",
      "Ideathon Finals",
      "Pitching Event"
    ]
  }
];

const ZonesSection = () => {
  return (
    <section 
      data-theme="light" 
      data-tail="black"
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 h-full">
        
        {/* --- LEFT SIDE (Static / Sticky) --- */}
        <div className="hidden md:flex flex-col justify-center p-10 md:pl-20 md:pr-10 h-full relative">
          <div className="w-full max-w-xl sticky top-[20%]">
            {/* Label */}
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold tracking-widest text-neutral-400 mb-6 flex items-center gap-2"
            >
              <span className="text-blue-600 font-black tracking-tighter">~~</span> ZONES
            </motion.p>
            
            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl lg:text-8xl font-bold text-black mb-8 tracking-tight leading-none"
            >
              Event <br /> Zones
            </motion.h2>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-neutral-600 leading-relaxed max-w-md"
            >
              Startup Mela is architected into three high-energy experience zones — each designed to empower founders, creators, investors, and innovators through engagement, discovery, and collaboration.
            </motion.p>
          </div>
        </div>

        {/* --- RIGHT SIDE (Scrolling Panels) --- */}
        <div className="snap-container h-full w-full bg-neutral-50 border-l border-neutral-100">
          {zones.map((zone) => (
            <div 
              key={zone.id} 
              className="snap-child relative w-full h-full min-h-screen flex flex-col justify-center p-10 md:p-20"
            >
              <div className="max-w-xl">
                {/* Zone ID Background Effect */}
                <span className="absolute top-10 right-10 text-9xl font-bold text-neutral-100/50 select-none -z-10">
                  0{zone.id}
                </span>

                {/* Zone Content Wrapper with Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider mb-6 rounded-full">
                    Zone 0{zone.id}
                  </span>

                  <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                    {zone.title}
                  </h3>
                  
                  <p className="text-lg text-neutral-600 mb-10 leading-relaxed border-l-4 border-blue-500 pl-6">
                    {zone.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {zone.details.map((detail, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm font-semibold text-neutral-700 shadow-sm"
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