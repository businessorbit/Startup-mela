import { motion } from "framer-motion";

const SponsorsSection = () => {
  return (
    <section 
      id="sponsors"
      data-theme="light" 
      data-tail="black"
      className="relative w-full bg-white pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden"
      style={{ fontFamily: '"TT Chocolates", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col">
        
        {/* --- 1. Giant Heading --- */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-[11rem] font-bold tracking-tighter text-black leading-[0.8] mb-10 select-none"
        >
          Sponsors
        </motion.h2>

        {/* --- 2. The Horizontal Row --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex flex-col md:flex-row justify-between items-start md:items-center border-t border-neutral-200 pt-6 mb-12 sm:mb-20 md:mb-32"
        >
          {/* Left Label */}
          <div className="text-sm font-bold tracking-widest text-neutral-600 uppercase flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-[#a78bfa] font-black tracking-tighter text-lg leading-none">~~</span> PARTNERS
          </div>

          {/* Right Link */}
          <a 
            href="/contact"
            className="group flex items-center gap-2 text-base font-medium text-black hover:text-purple-600 transition-colors"
          >
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            Get in touch
          </a>
        </motion.div>

        {/* --- 3. Centered Paragraph --- */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-3xl md:text-5xl font-light text-neutral-700 text-center max-w-5xl mx-auto leading-[1.15]"
        >
          Our cornerstone partners make <span className="font-bold text-black">Startup Mela</span> possible and help shape its <span className="font-bold text-black">lasting impact.</span>
        </motion.p>

      </div>
    </section>
  );
};

export default SponsorsSection;
