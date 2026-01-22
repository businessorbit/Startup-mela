import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { passes } from "../data/passes";
import { stalls } from "../data/stalls";
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";
import AnimatedBg from "../components/AnimatedBg/AnimatedBg";

const PROFESSION_OPTIONS = [
  "Student",
  "Entrepreneur/Startup Founder",
  "Investor/VC",
  "Corporate Professional",
  "Freelancer/Consultant",
  "Developer/Engineer",
  "Designer",
  "Marketing Professional",
  "Others"
];

const CheckoutPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const passId = parseInt(searchParams.get("passId"));
  const stallId = parseInt(searchParams.get("stallId"));
  const paymentStatus = searchParams.get("paymentStatus");
  const orderId = searchParams.get("orderId");

  // Determine if it's a stall or pass
  const isStall = !!stallId;
  const selectedPass = passId ? passes.find((p) => p.id === passId) : null;
  const selectedStall = stallId ? stalls.find((s) => s.id === stallId) : null;
  const selectedItem = isStall ? selectedStall : selectedPass;

  const [quantity, setQuantity] = useState(isStall ? 1 : 1);
  const [attendees, setAttendees] = useState([
    { name: "", email: "", phone: "", profession: "", professionOther: "", startupName: "" }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successData, setSuccessData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Check for payment success
    if (paymentStatus === "success" && orderId) {
      checkPaymentStatus(orderId);
    }
  }, [paymentStatus, orderId]);

  // Update attendees array when quantity changes
  useEffect(() => {
    const currentLength = attendees.length;
    if (quantity > currentLength) {
      // Add more attendee slots
      const newAttendees = [...attendees];
      for (let i = currentLength; i < quantity; i++) {
        newAttendees.push({ name: "", email: "", phone: "", profession: "", professionOther: "", startupName: "" });
      }
      setAttendees(newAttendees);
    } else if (quantity < currentLength) {
      // Remove extra attendee slots
      setAttendees(attendees.slice(0, quantity));
    }
  }, [quantity]);

  const checkPaymentStatus = async (transactionId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "https://startupmelabackend.vercel.app"}/api/payment/status/${transactionId}`
      );
      const data = await response.json();

      if (data.success) {
        setSuccessData(data);
        setShowSuccessModal(true);
        // Clean up URL parameters
        const newParams = new URLSearchParams(searchParams);
        newParams.delete("paymentStatus");
        newParams.delete("orderId");
        setSearchParams(newParams);
      }
    } catch (err) {
      console.error("Error checking payment status:", err);
    }
  };

  const handleAttendeeChange = (index, field, value) => {
    const newAttendees = [...attendees];
    newAttendees[index][field] = value;
    setAttendees(newAttendees);
    if (error) setError("");
  };

  const incrementQty = () => {
    if (isStall) return; // Stalls can't have multiple quantities
    setQuantity((prev) => Math.min(prev + 1, 5));
  };

  const decrementQty = () => {
    if (isStall) return; // Stalls can't have multiple quantities
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const validateAttendees = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    for (let i = 0; i < attendees.length; i++) {
      const attendee = attendees[i];

      // Validate name
      if (!attendee.name || !attendee.name.trim() || attendee.name.trim().length < 2) {
        setError(`Attendee ${i + 1}: Please enter a valid name (minimum 2 characters)`);
        return false;
      }

      // Validate email
      if (!attendee.email || !emailRegex.test(attendee.email.trim())) {
        setError(`Attendee ${i + 1}: Please enter a valid email address`);
        return false;
      }

      // Validate phone - match backend validation exactly
      if (!attendee.phone) {
        setError(`Attendee ${i + 1}: Please enter a phone number`);
        return false;
      }
      const cleanPhone = attendee.phone.replace(/[\s+\-()]/g, "");
      if (!phoneRegex.test(cleanPhone.slice(-10))) {
        setError(`Attendee ${i + 1}: Please enter a valid 10-digit Indian phone number (starting with 6-9)`);
        return false;
      }

      // Type-specific validation
      if (isStall) {
        // For stalls: require startupName, profession fields should not be validated
        if (!attendee.startupName || !attendee.startupName.trim()) {
          setError(`Attendee ${i + 1}: Please enter the Startup Name`);
          return false;
        }
      } else {
        // For passes: require profession, startupName should not be validated
        if (!attendee.profession || !attendee.profession.trim()) {
          setError(`Attendee ${i + 1}: Please select a profession`);
          return false;
        }

        if (attendee.profession === "Others" && (!attendee.professionOther || !attendee.professionOther.trim())) {
          setError(`Attendee ${i + 1}: Please specify your profession`);
          return false;
        }
      }
    }

    return true;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError("");

    if (!validateAttendees()) {
      setIsProcessing(false);
      return;
    }

    // Parse the price - handle both passes and stalls
    let numericPrice,
      totalAmount,
      gstAmount = 0,
      baseAmount = 0;

    if (isStall) {
      numericPrice = selectedStall.totalPrice;
      totalAmount = numericPrice;
      baseAmount = selectedStall.basePrice;
      gstAmount = selectedStall.gstAmount;
    } else {
      // Passes now have basePrice and gstAmount structured like stalls
      if (selectedPass.basePrice !== undefined) {
        numericPrice = selectedPass.totalPrice;
        baseAmount = selectedPass.basePrice * quantity;
        gstAmount = selectedPass.gstAmount * quantity;
        totalAmount = selectedPass.totalPrice * quantity;
      } else {
        // Fallback for any old data structure (though we updated passes.js)
        numericPrice = parseInt(selectedPass.price.replace(/[^0-9]/g, ""));
        totalAmount = isNaN(numericPrice) ? 0 : numericPrice * quantity;
      }
    }

    if (totalAmount <= 0) {
      setError("Invalid amount. Please try again.");
      setIsProcessing(false);
      return;
    }

    try {
      const orderPayload = {
        attendees: attendees,
        amount: totalAmount,
        quantity: quantity,
        itemType: isStall ? "stall" : "pass",
      };

      // Add type-specific fields
      if (isStall) {
        orderPayload.stallType = selectedStall.title;
        orderPayload.stallId = selectedStall.id;
        orderPayload.baseAmount = baseAmount;
        orderPayload.gstAmount = gstAmount;
      } else {
        orderPayload.passType = selectedPass.title;
        orderPayload.passId = selectedPass.id;
        // Also send baseAmount and gstAmount for passes now
        orderPayload.baseAmount = baseAmount;
        orderPayload.gstAmount = gstAmount;
      }

      // Select API URL and endpoint based on environment
      const API_URL = import.meta.env.VITE_API_URL || "https://startupmelabackend.vercel.app";
      const IS_TEST_MODE = import.meta.env.VITE_TEST_MODE === 'true';
      const paymentEndpoint = IS_TEST_MODE ? '/api/payment/test' : '/api/payment/create';

      console.log('Payment Config:', { API_URL, IS_TEST_MODE, paymentEndpoint });

      const response = await fetch(
        `${API_URL}${paymentEndpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderPayload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to initiate payment");
      }

      // Redirect to PhonePe Gateway
      if (data && data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Payment initialization failed. Please try again.");
      setIsProcessing(false);
    }
  };

  if (!selectedItem) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center">
          {isStall ? "Stall" : "Pass"} not found
        </h2>
        <Link
          to="/"
          className="text-blue-500 hover:underline text-sm sm:text-base"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  // Calculate Display Amount
  let numericPrice,
    totalAmount,
    gstAmount = 0,
    baseAmount = 0;

  if (isStall) {
    numericPrice = selectedStall.totalPrice;
    totalAmount = numericPrice;
    baseAmount = selectedStall.basePrice;
    gstAmount = selectedStall.gstAmount;
  } else {
    if (selectedPass.basePrice !== undefined) {
      numericPrice = selectedPass.totalPrice;
      baseAmount = selectedPass.basePrice * quantity;
      gstAmount = selectedPass.gstAmount * quantity;
      totalAmount = selectedPass.totalPrice * quantity;
    } else {
      numericPrice = parseInt(selectedPass.price.replace(/[^0-9]/g, ""));
      totalAmount = isNaN(numericPrice) ? 0 : numericPrice * quantity;
    }
  }

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

      <main className="relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center min-h-screen justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* --- LEFT: Pass Preview Card --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="relative flex flex-col p-6 sm:p-7 md:p-8 rounded-4xl overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[520px] shadow-2xl shadow-blue-900/10 border border-white/10">
              <div className="absolute inset-0 bg-linear-to-br from-neutral-900 via-black to-neutral-950 z-0" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0" />
              {selectedItem?.popular && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] -translate-y-1/2 translate-x-1/2" />
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4 sm:mb-5 md:mb-6">
                    Selected {isStall ? "Stall" : "Pass"}
                  </span>
                  <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                    {selectedItem.title}
                  </h3>

                  <div className="mt-4 sm:mt-5 md:mt-6 mb-6 sm:mb-7 md:mb-8">
                    {isStall ? (
                      <div className="space-y-2">
                        <p className="text-sm text-neutral-400">
                          Base Price: {selectedStall.price}
                        </p>
                        <p className="text-xs text-neutral-500">
                          + GST (18%): ₹
                          {selectedStall.gstAmount.toLocaleString("en-IN")}
                        </p>
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                          {selectedStall.displayPrice}
                          <span className="text-sm sm:text-base md:text-lg font-normal text-neutral-400 ml-2">
                            (incl. GST)
                          </span>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                          {selectedPass.price}
                          {!selectedPass.price.includes("20,000") && (
                            <span className="text-sm sm:text-base md:text-lg font-normal text-neutral-500 ml-2">
                              /person
                            </span>
                          )}
                        </p>
                        {quantity > 1 && (
                          <p className="text-sm text-neutral-400 mt-2">
                            {quantity} tickets × {selectedPass.displayPrice || selectedPass.price} = ₹{totalAmount.toLocaleString("en-IN")}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6 sm:mb-7 md:mb-8" />

                <ul className="space-y-3 sm:space-y-3.5 md:space-y-4">
                  {selectedItem.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-xs sm:text-sm text-neutral-300"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 sm:mr-3 mt-0.5 shrink-0"
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

                {isStall && selectedStall.bestFor && (
                  <>
                    <div className="h-px w-full bg-white/10 my-6" />
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                        Best For
                      </p>
                      <p className="text-sm text-neutral-300">
                        {selectedStall.bestFor}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: Checkout Form --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 text-black shadow-2xl"
          >
            <div className="mb-6 sm:mb-7 md:mb-8 border-b border-neutral-100 pb-4 sm:pb-5 md:pb-6">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-1.5 sm:mb-2">
                Checkout
              </h2>
              <p className="text-sm sm:text-base text-neutral-500">
                Complete your registration for Startup Mela 2026.
              </p>
            </div>

            <form onSubmit={handlePayment} className="space-y-5 sm:space-y-6">
              {/* Quantity Selector - Only show for passes */}
              {!isStall && (
                <div>
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wide text-neutral-500 mb-2 sm:mb-3">
                    Number of Tickets
                  </label>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button
                      type="button"
                      onClick={decrementQty}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-neutral-100 flex items-center justify-center text-lg sm:text-xl font-bold hover:bg-neutral-200 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-xl sm:text-2xl font-bold w-6 sm:w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={incrementQty}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-neutral-100 flex items-center justify-center text-lg sm:text-xl font-bold hover:bg-neutral-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xs text-neutral-500 mt-2">Maximum 5 tickets per booking</p>
                </div>
              )}

              {/* Attendee Details */}
              <div className="space-y-6">
                {attendees.map((attendee, index) => (
                  <div key={index} className="border border-neutral-200 rounded-xl p-4 sm:p-5 space-y-3.5 sm:space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm sm:text-base font-bold text-neutral-700">
                        {index === 0 ? "Primary Contact" : `Attendee ${index + 1}`}
                      </h3>
                      {quantity > 1 && (
                        <span className="text-xs text-neutral-500">
                          {index + 1} of {quantity}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold uppercase tracking-wide text-neutral-500 mb-1.5 sm:mb-2">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        value={attendee.name}
                        onChange={(e) => handleAttendeeChange(index, "name", e.target.value)}
                        placeholder="John Doe"
                        className="w-full p-3 sm:p-3.5 md:p-4 text-sm sm:text-base bg-neutral-50 rounded-lg sm:rounded-xl border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none font-medium transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold uppercase tracking-wide text-neutral-500 mb-1.5 sm:mb-2">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        value={attendee.email}
                        onChange={(e) => handleAttendeeChange(index, "email", e.target.value)}
                        placeholder="john@example.com"
                        className="w-full p-3 sm:p-3.5 md:p-4 text-sm sm:text-base bg-neutral-50 rounded-lg sm:rounded-xl border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none font-medium transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold uppercase tracking-wide text-neutral-500 mb-1.5 sm:mb-2">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        value={attendee.phone}
                        onChange={(e) => handleAttendeeChange(index, "phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full p-3 sm:p-3.5 md:p-4 text-sm sm:text-base bg-neutral-50 rounded-lg sm:rounded-xl border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none font-medium transition-all"
                      />
                    </div>

                    {isStall ? (
                      <div>
                        <label className="block text-xs sm:text-sm font-bold uppercase tracking-wide text-neutral-500 mb-1.5 sm:mb-2">
                          Startup Name
                        </label>
                        <input
                          required
                          type="text"
                          value={attendee.startupName}
                          onChange={(e) => handleAttendeeChange(index, "startupName", e.target.value)}
                          placeholder="Your Startup Name"
                          className="w-full p-3 sm:p-3.5 md:p-4 text-sm sm:text-base bg-neutral-50 rounded-lg sm:rounded-xl border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none font-medium transition-all"
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-xs sm:text-sm font-bold uppercase tracking-wide text-neutral-500 mb-1.5 sm:mb-2">
                          Profession
                        </label>
                        <select
                          required
                          value={attendee.profession}
                          onChange={(e) => handleAttendeeChange(index, "profession", e.target.value)}
                          className="w-full p-3 sm:p-3.5 md:p-4 text-sm sm:text-base bg-neutral-50 rounded-lg sm:rounded-xl border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none font-medium transition-all"
                        >
                          <option value="">Select your profession</option>
                          {PROFESSION_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {!isStall && attendee.profession === "Others" && (
                      <div>
                        <label className="block text-xs sm:text-sm font-bold uppercase tracking-wide text-neutral-500 mb-1.5 sm:mb-2">
                          Please Specify
                        </label>
                        <input
                          required
                          type="text"
                          value={attendee.professionOther}
                          onChange={(e) => handleAttendeeChange(index, "professionOther", e.target.value)}
                          placeholder="Enter your profession"
                          className="w-full p-3 sm:p-3.5 md:p-4 text-sm sm:text-base bg-neutral-50 rounded-lg sm:rounded-xl border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none font-medium transition-all"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Total Summary */}
              <div className="bg-neutral-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 mt-6 sm:mt-7 md:mt-8 space-y-3">
                {/* Show breakdown for BOTH stalls and passes now */}
                <>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-600">Base Amount {(!isStall && quantity > 1) ? `(${quantity} x ₹${selectedPass.basePrice})` : ''}</span>
                    <span className="font-semibold text-black">
                      ₹{baseAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-600">GST (18%)</span>
                    <span className="font-semibold text-black">
                      ₹{gstAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="h-px bg-neutral-200" />
                </>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-neutral-500 font-medium">
                    Total Amount
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-black">
                    ₹{totalAmount.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 sm:py-5 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B] text-white font-bold text-base sm:text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Proceed to Payment"
                )}
              </button>

              {error && (
                <div className="text-red-600 text-xs sm:text-sm text-center font-medium bg-red-50 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg border border-red-200">
                  {error}
                </div>
              )}

              <p className="text-center text-[10px] sm:text-xs text-neutral-400 mt-3 sm:mt-4">
                By proceeding, you agree to our Terms & Conditions.
              </p>
            </form>
          </motion.div>
        </div>
      </main>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">Payment Successful!</h3>
                <p className="text-neutral-600 mb-6">
                  Your booking has been confirmed. Confirmation emails with unique verification codes have been sent to all attendees.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-900">
                    <strong>Order ID:</strong> {successData?.tickets?.[0]?.orderId}
                  </p>
                  <p className="text-sm text-blue-900 mt-1">
                    <strong>Tickets:</strong> {successData?.tickets?.length}
                  </p>
                </div>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B] text-white font-bold hover:shadow-lg transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </div>
  );
};

export default CheckoutPage;
