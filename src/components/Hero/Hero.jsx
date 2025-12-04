import { motion } from "framer-motion";
import AnimatedBg from "../AnimatedBg/AnimatedBg";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } 
  },
};

const Hero = () => {
  return (
    <section 
      data-theme="dark"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 py-8"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* --- Animated Background (Particle Canvas) --- */}
      <AnimatedBg />

      {/* --- Graphic Wave Overlay --- */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" d="M-100,400 C200,200 400,600 700,400 C1000,200 1200,600 1500,400" />
          <path fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" d="M-100,450 C200,250 400,650 700,450 C1000,250 1200,650 1500,450" />
          <path fill="none" stroke="url(#gradient)" strokeWidth="2" d="M-100,500 C200,300 400,700 700,500 C1000,300 1200,700 1500,500" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00C2FF" />
              <stop offset="50%" stopColor="#0070FF" />
              <stop offset="100%" stopColor="#00E29B" />
            </linearGradient>
          </defs>
        </svg>
      </div>


      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center w-full max-w-[1400px] mx-auto"
      >
        
        {/* --- Main Heading (HUGE) --- */}
        <motion.h1 
          variants={itemVariants}
          className="w-full font-extrabold tracking-tighter leading-none mb-4"
        >
          {/* "Startup" - White, Title Case */}
          <span className="block text-[12vw] xl:text-[160px] text-white">
            Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B]">Mela</span>
          </span>
          
          {/* "2026" - White */}
          <span className="block text-[8vw] xl:text-[100px] text-white mt-2">
            2026
          </span>
        </motion.h1>

        {/* --- Tagline & Stats --- */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-3xl font-light text-neutral-300 mb-10 tracking-wide max-w-3xl"
        >
          Chandigarh's largest networking event <br className="md:hidden" />
        </motion.p>

        {/* --- Single CTA Button --- */}
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 rounded-full bg-white text-black font-bold text-xl shadow-lg shadow-white/10 hover:shadow-white/25 transition-all duration-300 overflow-hidden flex items-center gap-3"
          >
            <span className="relative z-10">Get passes</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </motion.button>
        </motion.div>

      </motion.div>

      {/* --- Bottom Corner Info --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-8 md:left-12 z-10"
      >
        <p className="text-lg md:text-xl font-bold text-white tracking-wide">
          28th Feb & 1st March
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-12 z-10 text-right"
      >
        <p className="text-lg md:text-xl font-bold text-white tracking-wide">
          Sector 34 Exhibition Ground
        </p>
      </motion.div>

    </section>
  );
};

export default Hero;