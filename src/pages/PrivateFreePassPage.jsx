import { useState } from "react";
import AnimatedBg from "../components/AnimatedBg/AnimatedBg";

const PrivateFreePassPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [attendees, setAttendees] = useState([
    {
      name: "",
      email: "",
      phone: "",
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successData, setSuccessData] = useState(null);

  const handleAttendeeChange = (index, field, value) => {
    const updatedAttendees = [...attendees];
    updatedAttendees[index] = {
      ...updatedAttendees[index],
      [field]: value,
    };
    setAttendees(updatedAttendees);

    if (error) {
      setError("");
    }
  };

  const updateQuantity = (nextQuantity) => {
    const safeQuantity = Math.max(1, Math.min(5, nextQuantity));
    setQuantity(safeQuantity);

    setAttendees((prev) => {
      if (safeQuantity > prev.length) {
        const additional = Array.from(
          { length: safeQuantity - prev.length },
          () => ({
            name: "",
            email: "",
            phone: "",
          }),
        );

        return [...prev, ...additional];
      }

      return prev.slice(0, safeQuantity);
    });
  };

  const incrementQty = () => updateQuantity(quantity + 1);
  const decrementQty = () => updateQuantity(quantity - 1);

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    for (let i = 0; i < attendees.length; i++) {
      const attendee = attendees[i];

      if (!attendee.name || attendee.name.trim().length < 2) {
        setError(
          `Attendee ${i + 1}: Please enter a valid name (minimum 2 characters)`,
        );
        return false;
      }

      if (!attendee.email || !emailRegex.test(attendee.email.trim())) {
        setError(`Attendee ${i + 1}: Please enter a valid email address`);
        return false;
      }

      const cleanPhone = attendee.phone.replace(/[\s+\-()]/g, "");
      if (!phoneRegex.test(cleanPhone.slice(-10))) {
        setError(
          `Attendee ${i + 1}: Please enter a valid 10-digit Indian mobile number (starting with 6-9)`,
        );
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "https://startupmelabackend.vercel.app";

      const response = await fetch(`${API_URL}/api/payment/private-pass/free`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          attendees: attendees.map((attendee) => ({
            name: attendee.name.trim(),
            email: attendee.email.trim(),
            phone: attendee.phone.replace(/[^0-9]/g, "").slice(-10),
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to create free pass order");
      }

      setSuccessData(data);
      setQuantity(1);
      setAttendees([
        {
          name: "",
          email: "",
          phone: "",
        },
      ]);
    } catch (submitError) {
      console.error("Private pass submit error:", submitError);
      setError(
        submitError.message || "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full selection:bg-[#00C2FF]/30 text-white font-sans bg-black">
      <AnimatedBg />

      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-neutral-950/90 p-6 sm:p-8 shadow-2xl">
          <p className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-300 mb-4">
            Special Access
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Registration</h1>
          <p className="text-sm text-neutral-400 mb-6">
            Fill details to complete registration (up to 5 people in one group
            order).
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mb-6">
            <p className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
              Pass Details
            </p>
            <h2 className="text-lg font-semibold text-white mb-2">
              Exhibition + Entertainment Pass
            </h2>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-neutral-500 line-through">
                ₹199
              </span>
              <span className="text-base font-bold text-green-300">₹0</span>
            </div>
            <ul className="space-y-1.5 text-sm text-neutral-300">
              <li>• Entry to Exhibitor Zone</li>
              <li>• Access to startup stalls and demos</li>
              <li>• Access to entertainment sessions</li>
            </ul>
          </div>

          {successData ? (
            <div className="rounded-2xl border border-green-300/30 bg-green-500/10 p-5 mb-6">
              <h2 className="text-lg font-bold text-green-300 mb-3">
                Booking Confirmed
              </h2>
              <p className="text-sm text-neutral-200">
                <strong>Order ID:</strong> {successData.orderId}
              </p>
              <p className="text-sm text-neutral-200 mt-1">
                <strong>Tickets:</strong> {successData.ticketCount}
              </p>
              <p className="text-sm text-neutral-200 mt-1">
                <strong>Amount Paid:</strong> ₹0
              </p>
              <p className="text-xs text-neutral-300 mt-3">
                Confirmation details have been sent to all attendee emails.
              </p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-neutral-400 mb-2">
                Number of Tickets
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={decrementQty}
                  className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 text-white font-bold"
                >
                  -
                </button>
                <span className="text-xl font-bold w-6 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={incrementQty}
                  className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 text-white font-bold"
                >
                  +
                </button>
              </div>
              <p className="text-xs text-neutral-500 mt-2">
                Maximum 5 tickets per group order
              </p>
            </div>

            {attendees.map((attendee, index) => (
              <div
                key={index}
                className="border border-neutral-700 rounded-xl p-4 space-y-3"
              >
                <p className="text-sm font-semibold text-neutral-200">
                  {index === 0 ? "Primary Contact" : `Attendee ${index + 1}`}
                </p>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-neutral-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={attendee.name}
                    onChange={(e) =>
                      handleAttendeeChange(index, "name", e.target.value)
                    }
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-neutral-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={attendee.email}
                    onChange={(e) =>
                      handleAttendeeChange(index, "email", e.target.value)
                    }
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-neutral-400 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={attendee.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      if (value.length <= 10) {
                        handleAttendeeChange(index, "phone", value);
                      }
                    }}
                    maxLength={10}
                    placeholder="9876543210"
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            ))}

            {error ? (
              <div className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-linear-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B] py-3.5 text-sm font-bold text-white disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Complete Registration"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PrivateFreePassPage;
