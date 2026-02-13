import { motion } from "framer-motion";
import InvestorCard from "./InvestorCard";

const InvestorSection = ({ category, investors }) => {
    return (
        <section
            data-theme="dark"
            className="relative w-full py-16 sm:py-24 md:py-32"
            style={{ fontFamily: "Inter, sans-serif" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
                    {/* Left Label */}
                    <div className="relative">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xs sm:text-sm font-bold tracking-widest text-neutral-500 uppercase flex items-center gap-2"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B] font-black tracking-tighter">
                                ~~
                            </span>{" "}
                            {category.title}
                        </motion.p>
                    </div>

                    {/* Right Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4"
                        >
                            {category.subtitle}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-base sm:text-lg text-neutral-400 max-w-2xl"
                        >
                            {category.description}
                        </motion.p>
                    </div>
                </div>

                {/* Cards Grid - 2 columns on tablet, 3 on desktop for better spacing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {investors.map((investor, index) => (
                        <InvestorCard key={investor.id} investor={investor} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InvestorSection;
