import { motion } from "framer-motion";
import { passes, isDiscountActive, DISCOUNT_CONFIG } from "../../data/passes";
import { useNavigate } from "react-router-dom";

const PassesSection = () => {
  const navigate = useNavigate();
  const discountActive = isDiscountActive();

  const handleTicketClick = (id) => {
    navigate(`/checkout?passId=${id}`);
  };

  return (
    <section
      id="passes"
      data-theme="light"
      data-tail="black"
      // Added responsive padding: py-16 for mobile, scaling up to py-48 for desktop
      className="relative w-full bg-white py-16 sm:py-24 md:py-32 lg:py-48"
    >
      {/* Adjusted horizontal padding for smaller screens */}
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-12">
        {/* --- Header Row --- */}
        {/* Adjusted grid gap and margin-bottom for mobile responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-black leading-none">
              Get <br /> Tickets
            </h2>
            {discountActive && (
              <div className="mt-4 inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm sm:text-base font-bold rounded-full shadow-lg">
                  🎉 50% OFF - Limited Time!
                </span>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-lg md:justify-self-end leading-relaxed"
          >
            <p>
              Secure your spot at the region's largest startup festival. Choose
              the pass that fits your goals and get ready to connect.
            </p>
            {discountActive && (
              <p className="mt-3 text-sm sm:text-base font-semibold text-red-600">
                ⏰ Offer ends {DISCOUNT_CONFIG.expiryDate.toLocaleDateString('en-IN', {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            )}
          </motion.div>
        </div>

        {/* --- Cards Grid --- */}
        {/* Adjusted gap: gap-4 mobile -> gap-6 sm -> gap-8 lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {passes.map((pass, index) => (
            <motion.div
              key={pass.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              // Adjusted padding and min-height for mobile screens
              className="relative flex flex-col p-5 sm:p-6 rounded-3xl overflow-hidden min-h-[440px] sm:min-h-[480px] group"
            >
              {/* Dark Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 z-0" />

              {/* Subtle Noise Texture */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0" />

              {/* Inner Glow Effect */}
              {pass.popular && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] -translate-y-1/2 translate-x-1/2" />
              )}

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Title */}
                {/* Scaled text size slightly for mobile */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                  {pass.title}
                </h3>

                {/* Discount Badge */}
                {discountActive && !pass.comingSoon && pass.discountPercent > 0 && (
                  <span className="inline-block self-start px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-red-500 to-orange-500 text-white mb-3 shadow-lg">
                    {pass.discountPercent}% OFF
                  </span>
                )}

                {pass.popular && !pass.comingSoon && (
                  <span className="inline-block self-start px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white mb-4">
                    Best Value
                  </span>
                )}

                {pass.comingSoon && (
                  <span className="inline-block self-start px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-yellow-600 text-white mb-4">
                    Coming Soon
                  </span>
                )}

                {/* Price */}
                {/* Adjusted vertical margins */}
                <div className="mt-4 mb-6 sm:mb-8">
                  {pass.price ? (
                    <div className="space-y-1">
                      {/* Show original price with strikethrough if discount active */}
                      {discountActive && pass.oldPrice && (
                        <p className="text-lg text-neutral-500 line-through font-medium">
                          {pass.oldPrice}
                        </p>
                      )}
                      <p className="text-sm text-neutral-400 font-medium">
                        Base Price: {pass.price}
                      </p>
                      <p className="text-xs text-neutral-500">
                        + GST (18%): ₹{pass.gstAmount?.toLocaleString("en-IN")}
                      </p>
                      <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
                        {pass.displayPrice}
                        <span className="text-xs font-normal text-neutral-400 ml-2">
                          (incl. GST)
                        </span>
                      </p>
                      {/* Show savings if discount active */}
                      {discountActive && pass.savings > 0 && (
                        <p className="text-sm text-green-400 font-semibold mt-2">
                          Save ₹{Math.round(pass.savings).toLocaleString("en-IN")}!
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      NA
                    </p>
                  )}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 mb-6 sm:mb-8" />

                {/* Features */}
                {/* Adjusted spacing between list items */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                  {pass.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-neutral-300"
                    >
                      <svg
                        className="w-4 h-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
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

                {/* CTA Button */}
                <button
                  onClick={() => !pass.comingSoon && handleTicketClick(pass.id)}
                  data-pass-id={pass.id}
                  disabled={pass.comingSoon}
                  // Adjusted padding for button
                  className={`w-full py-3 sm:py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-white/5 ${pass.comingSoon
                    ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                    : 'bg-white text-black hover:bg-neutral-200 hover:scale-[1.02] active:scale-95'
                    }`}
                >
                  {pass.comingSoon ? 'Coming Soon' : 'Get Ticket'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassesSection;
