import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { passes } from "../data/passes";
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";
import AnimatedBg from "../components/AnimatedBg/AnimatedBg";

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const passId = parseInt(searchParams.get("passId"));
  const selectedPass = passes.find((p) => p.id === passId);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const incrementQty = () => setFormData(prev => ({ ...prev, quantity: Math.min(prev.quantity + 1, 10) }));
  const decrementQty = () => setFormData(prev => ({ ...prev, quantity: Math.max(prev.quantity - 1, 1) }));

  // --- REAL API INTEGRATION ---
  const createCheckoutOrder = async (orderPayload) => {
    try {
      const response = await fetch("https://startupmelabackend.vercel.app//api/payment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to initiate payment");
      }

      return data;
    } catch (err) {
      throw err;
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError("");

    // Parse the price string (remove non-digits)
    const numericPrice = parseInt(selectedPass.price.replace(/[^0-9]/g, ''));
    const totalAmount = isNaN(numericPrice) ? 0 : numericPrice * formData.quantity;

    try {
      // 1. Send order details to Backend
      const response = await createCheckoutOrder({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        passType: selectedPass.title,
        amount: totalAmount,
        quantity: formData.quantity,
        passId: selectedPass.id
      });

      // 2. Redirect to PhonePe Gateway
      if (response && response.redirectUrl) {
        window.location.href = response.redirectUrl;
      } else {
        throw new Error("Invalid response from server");
      }

    } catch (err) {
      console.error(err);
      setError(err.message || "Payment initialization failed. Please check your backend.");
      setIsProcessing(false);
    }
  };

  if (!selectedPass) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Pass not found</h2>
        <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link>
      </div>
    );
  }

  // Calculate Display Amount
  const numericPrice = parseInt(selectedPass.price.replace(/[^0-9]/g, ''));
  const totalAmount = isNaN(numericPrice) ? 0 : numericPrice * formData.quantity;

  return (
    <div 
      className="relative min-h-screen w-full selection:bg-[#00C2FF]/30 text-white font-sans"
      style={{ backgroundColor: '#0a0a0a', fontFamily: '"TT Chocolates", sans-serif' }}
    >
      <AnimatedBg />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 flex flex-col items-center min-h-screen justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* --- LEFT: Pass Preview Card --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <div className="relative flex flex-col p-8 rounded-[2rem] overflow-hidden min-h-[520px] shadow-2xl shadow-blue-900/10 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 z-0" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0" />
              {selectedPass.popular && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] -translate-y-1/2 translate-x-1/2" />
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-neutral-300 mb-6">
                    Selected Pass
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                    {selectedPass.title}
                  </h3>
                  
                  <div className="mt-6 mb-8">
                    <p className="text-5xl font-bold text-white tracking-tight">
                      {selectedPass.price}
                      {!selectedPass.price.includes("20,000") && (
                        <span className="text-lg font-normal text-neutral-500 ml-2">/person</span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-8" />

                <ul className="space-y-4">
                  {selectedPass.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-neutral-300">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: Checkout Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 text-black shadow-2xl"
          >
            <div className="mb-8 border-b border-neutral-100 pb-6">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Checkout</h2>
              <p className="text-neutral-500">Complete your registration for Startup Mela 2026.</p>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              
              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-neutral-500 mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <button 
                    type="button" 
                    onClick={decrementQty}
                    className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-xl font-bold hover:bg-neutral-200 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold w-8 text-center">{formData.quantity}</span>
                  <button 
                    type="button" 
                    onClick={incrementQty}
                    className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-xl font-bold hover:bg-neutral-200 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide text-neutral-500 mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full p-4 bg-neutral-50 rounded-xl border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none font-medium transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide text-neutral-500 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full p-4 bg-neutral-50 rounded-xl border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none font-medium transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide text-neutral-500 mb-2">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full p-4 bg-neutral-50 rounded-xl border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none font-medium transition-all"
                  />
                </div>
              </div>

              {/* Total Summary */}
              <div className="bg-neutral-50 rounded-xl p-6 mt-8 flex justify-between items-center border border-neutral-100">
                <span className="text-neutral-500 font-medium">Total Amount</span>
                <span className="text-2xl font-bold text-black">
                  ₹{(totalAmount).toLocaleString('en-IN')}
                </span>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full py-5 rounded-xl bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B] text-white font-bold text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Pay"
                )}
              </button>

              {error && (
                <p className="text-red-500 text-sm text-center font-medium bg-red-50 py-2 rounded-lg">
                  We will get back to yo!!
                </p>
              )}

              <p className="text-center text-xs text-neutral-400 mt-4">
                By proceeding, you agree to our Terms & Conditions.
              </p>

            </form>
          </motion.div>

        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default CheckoutPage;