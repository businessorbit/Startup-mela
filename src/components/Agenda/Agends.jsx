import { motion } from "framer-motion";

const AgendaSection = () => {
  return (
    <section
      id="agenda"
      data-theme="dark"
      data-tail="white"
      className="relative w-full bg-black py-16 sm:py-24 md:py-32"
      style={{ fontFamily: '"TT Chocolates", sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-12 sm:mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-bold tracking-widest text-neutral-500 mb-2 sm:mb-4 flex items-center gap-2"
          >
            <span className="text-[#a78bfa] font-black tracking-tighter">
              ~~
            </span>{" "}
            AGENDA
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 sm:mb-10"
          >
            Agenda
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="w-full h-px bg-neutral-800 origin-left"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="px-6 py-5 sm:px-10 sm:py-6 rounded-2xl bg-neutral-900/50 border border-white/5 backdrop-blur-md max-w-4xl text-center">
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg font-medium tracking-wide leading-relaxed">
              <span className="text-[#a78bfa] mr-2">✦</span>
              The final itinerary with exact 20+ speaker sessions and other micro events will be shared soon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgendaSection;
