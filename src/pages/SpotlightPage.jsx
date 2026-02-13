import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";
import AnimatedBg from "../components/AnimatedBg/AnimatedBg";
import SpotlightSection from "../components/UI/SpotlightSection";
import {
    speakers,
    comedians,
    investors,
    spotlightCategories,
} from "../data/spotlight";

const SpotlightPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className="relative min-h-screen w-full selection:bg-[#00C2FF]/30 text-white font-sans"
            style={{
                backgroundColor: "#0a0a0a",
                fontFamily: '"TT Chocolates", sans-serif',
            }}
        >
            <AnimatedBg />
            <Navbar />

            <main className="relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
                {/* Hero Section */}
                <section
                    data-theme="dark"
                    className="relative w-full py-16 sm:py-24 md:py-32 overflow-hidden"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none mb-6">
                                <span className="text-white">Meet the </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B]">
                                    Spotlight
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                Connect with industry leaders, investors, and entertainers who
                                will make Startup Mela 2026 unforgettable.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Speakers Section */}
                <SpotlightSection
                    category={spotlightCategories.speakers}
                    people={speakers}
                />

                {/* Divider */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                    <div className="h-px w-full bg-white/10" />
                </div>

                {/* Comedians Section */}
                <SpotlightSection
                    category={spotlightCategories.comedians}
                    people={comedians}
                />

                {/* Divider */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                    <div className="h-px w-full bg-white/10" />
                </div>

                {/* Investors Section */}
                <SpotlightSection
                    category={spotlightCategories.investors}
                    people={investors}
                />
            </main>

            <FooterSection />
        </div>
    );
};

export default SpotlightPage;
