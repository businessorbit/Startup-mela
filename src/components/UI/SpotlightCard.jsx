import { motion } from "framer-motion";

const SpotlightCard = ({ person, index }) => {
    const hasImage = person.image !== null && person.image !== undefined;

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
            className="relative flex flex-col p-5 sm:p-6 rounded-3xl overflow-hidden min-h-[400px] sm:min-h-[440px] group"
        >
            {/* Dark Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 z-0" />

            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Image or Placeholder */}
                <div className="w-full aspect-square mb-4 rounded-2xl overflow-hidden bg-neutral-800">
                    {hasImage ? (
                        <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="url(#icon-gradient-spotlight)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight">
                    {person.name}
                </h3>

                {/* Title & Company */}
                <p className="text-sm text-blue-400 font-semibold mb-3">
                    {person.title}
                    {person.company && ` • ${person.company}`}
                    {person.specialty && ` • ${person.specialty}`}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-4 flex-grow">
                    {person.description}
                </p>

                {/* Investment Focus (for investors) */}
                {person.investmentFocus && (
                    <div className="mt-auto pt-4 border-t border-white/10">
                        <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                            Investment Focus
                        </p>
                        <p className="text-sm text-neutral-300 font-medium">
                            {person.investmentFocus}
                        </p>
                    </div>
                )}
            </div>

            {/* Define the gradient for the icon */}
            <svg width="0" height="0">
                <linearGradient
                    id="icon-gradient-spotlight"
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

export default SpotlightCard;
