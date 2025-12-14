import { motion } from "framer-motion";
import { passes } from "../../data/passes";
import { useNavigate } from "react-router-dom";

const PassesSection = () => {
  const navigate = useNavigate();

  const handleTicketClick = (id) => {
    navigate(`/checkout?passId=${id}`);
  };

  return (
    <section 
      id="passes"
      data-theme="light" 
      data-tail="black"
      className="relative w-full bg-white py-32 md:py-48"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- Header Row --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-end">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-none"
          >
            Get <br /> Tickets
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-600 max-w-lg md:justify-self-end leading-relaxed"
          >
            Secure your spot at the region's largest startup festival. Choose the pass that fits your goals and get ready to connect.
          </motion.p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {passes.map((pass, index) => (
            <motion.div
              key={pass.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative flex flex-col p-6 rounded-3xl overflow-hidden min-h-[480px] group"
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
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {pass.title}
                </h3>
                
                {pass.popular && (
                  <span className="inline-block self-start px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white mb-4">
                    Best Value
                  </span>
                )}

                {/* Price */}
                <div className="mt-4 mb-8">
                  {pass.oldPrice && (
                    <p className="text-sm text-neutral-400 line-through font-medium">
                      {pass.oldPrice}
                    </p>
                  )}
                  <p className="text-4xl font-bold text-white tracking-tight">
                    {pass.price}
                    {/* Only show '/person' if price isn't a large flat fee like 20k */}
                    {!pass.price.includes("20,000") && (
                      <span className="text-sm font-normal text-neutral-500 ml-1">/person</span>
                    )}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 mb-8" />

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {pass.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-neutral-300">
                      <svg className="w-4 h-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  onClick={() => handleTicketClick(pass.id)}
                  data-pass-id={pass.id}
                  className="w-full py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-white/5"
                >
                  Get Ticket
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