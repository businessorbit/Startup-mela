import { motion } from "framer-motion";

const InvestorCard = ({ investor, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative flex flex-col p-6 sm:p-8 rounded-3xl overflow-hidden min-h-[200px] group"
        >
            {/* Dark Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 z-0" />

            {/* Subtle Border Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00C2FF]/20 via-[#0070FF]/10 to-[#00E29B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Gradient Icon/Badge */}
                <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00C2FF]/20 via-[#0070FF]/20 to-[#00E29B]/20 border border-white/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="url(#icon-gradient-investor)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                </div>

                {/* Company Name */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                    {investor.name}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed flex-grow">
                    {investor.description}
                </p>

                {/* Decorative Bottom Element */}
                <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 uppercase tracking-wider">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00C2FF] to-[#00E29B]" />
                        Investor Partner
                    </div>
                </div>
            </div>

            {/* Define the gradient for the icon */}
            <svg width="0" height="0">
                <linearGradient
                    id="icon-gradient-investor"
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
        </motion.div>
    );
};

export default InvestorCard;
