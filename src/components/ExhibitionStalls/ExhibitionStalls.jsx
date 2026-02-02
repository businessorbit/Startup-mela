import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { stalls } from "../../data/stalls";

const ExhibitionStalls = () => {
  const navigate = useNavigate();

  const handleStallClick = (id) => {
    // Navigate to checkout page with stall info
    navigate(`/checkout?stallId=${id}`);
  };

  return (
    <section
      id="exhibition-stalls"
      data-theme="light"
      data-tail="black"
      className="relative w-full bg-white py-16 sm:py-24 md:py-32 lg:py-48"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12">
        {/* --- Header Row --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-black leading-none"
          >
            Exhibition <br /> Stall Options
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-lg md:justify-self-end leading-relaxed"
          >
            Choose a stall size that fits your goals—from early-stage exposure
            to premium brand presence. Showcase your brand and connect with
            thousands of attendees.
          </motion.p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 md:mb-24">
          {stalls.map((stall, index) => (
            <motion.div
              key={stall.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative flex flex-col p-5 sm:p-6 rounded-3xl overflow-hidden min-h-130 sm:min-h-140 group"
            >
              {/* Dark Gradient Background */}
              <div className="absolute inset-0 bg-linear-to-br from-neutral-900 via-black to-neutral-950 z-0" />

              {/* Subtle Noise Texture */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0" />

              {/* Inner Glow Effect */}
              {stall.popular && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] -translate-y-1/2 translate-x-1/2" />
              )}

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                  {stall.title}
                </h3>

                {stall.popular && (
                  <span className="inline-block self-start px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white mb-4">
                    Recommended
                  </span>
                )}

                {/* Price */}
                <div className="mt-4 mb-6 sm:mb-8">
                  {stall.oldPrice && (
                    <div className="mb-3">
                      <p className="text-lg text-neutral-400 line-through font-medium">
                        {stall.oldPrice}
                      </p>
                      {stall.originalBasePrice && (
                        <div className="mt-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                          <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          <span className="text-xs font-bold text-green-400">
                            Save ₹{((stall.originalBasePrice + (stall.originalBasePrice * stall.gstRate)) - stall.totalPrice).toLocaleString("en-IN")}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="space-y-1">
                    <p className="text-sm text-neutral-400 font-medium">
                      Base Price: {stall.price}
                    </p>
                    <p className="text-xs text-neutral-500">
                      + GST (18%): ₹{stall.gstAmount.toLocaleString("en-IN")}
                    </p>
                    <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
                      {stall.displayPrice}
                      <span className="text-xs font-normal text-neutral-400 ml-2">
                        (incl. GST)
                      </span>
                    </p>
                    {stall.discountNote && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 px-3 py-2 rounded-lg border border-amber-500/20">
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold">{stall.discountNote}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 mb-6 sm:mb-8" />

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 grow">
                  {stall.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-neutral-300"
                    >
                      <svg
                        className="w-4 h-4 text-blue-500 mr-3 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Best For Label */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                    Best For
                  </p>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {stall.bestFor}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleStallClick(stall.id)}
                  data-stall-id={stall.id}
                  className="w-full py-3 sm:py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-white/5"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Important Information Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-linear-to-br from-neutral-50 to-neutral-100 rounded-3xl p-6 sm:p-8 md:p-10 mb-16 sm:mb-20 md:mb-24"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Important Information
          </h3>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm sm:text-base">
                <strong>Stall Allocation:</strong> Stalls are allocated on a
                first-come, first-served basis. Reserve early to secure your
                preferred location.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
              <span className="text-sm sm:text-base">
                <strong>Branding Guidelines:</strong> All branding and display
                materials must comply with event guidelines. Guidelines will be
                shared upon confirmation.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm sm:text-base">
                <strong>Instagram Promotion:</strong> Promotional videos will be
                posted on our official Instagram handles before and during the
                event.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-sm sm:text-base">
                <strong>Power Supply:</strong> Standard power supply is included
                with all stalls. Additional power requirements can be arranged
                at an extra cost.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* --- Final CTA Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-linear-to-br from-black to-neutral-900 rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden"
        >
          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />

          {/* Inner Glow Effect */}
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600/10 blur-[100px] -translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Interested in Exhibiting at <br className="hidden sm:block" />
              Startup Mela 2026?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Reach out to our team to reserve your stall or get custom
              solutions tailored to your brand's needs.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 rounded-full bg-white text-black font-bold text-base sm:text-lg shadow-lg shadow-white/10 hover:bg-neutral-200 transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExhibitionStalls;
