import { useState } from "react";
import { motion } from "framer-motion";

// Backend API Base
const API_BASE = import.meta.env.VITE_API_URL; // <-- CHANGE THIS

const ROLES = [
  "Video Editing",
  "Sales",
  "Marketing",
  "Graphic Design",
  "Management",
  "Social Media Management",
  "Content Writing",
  "Campus Ambassador",
];

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collegeYear: "",
    role: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    hours: "",
    q5: "",
    resumeLink: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // ---------------- VALIDATION ----------------
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Please Enter A Valid Email Address.";
        break;
      case "resumeLink":
        if (!value) error = "Resume Link Is Required.";
        else if (!/^(https?:\/\/)/i.test(value))
          error = "URL Must Start With http:// Or https://";
        break;
      case "q1":
      case "q2":
      case "q3":
      case "q4":
      case "q5":
        if (value.length < 30) error = "Minimum Character Limit Not Met.";
        break;
      default:
        if (!value || value.trim() === "") error = "This Field Is Required.";
    }
    return error;
  };

  // -------------------------------- HANDLERS --------------------------------
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ------------------------- SUBMIT HANDLER -------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      document.getElementById("application-form").scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    // Submit to backend
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE}/api/volunteer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          collegeYear: "",
          role: "",
          q1: "",
          q2: "",
          q3: "",
          q4: "",
          hours: "",
          q5: "",
          resumeLink: "",
        });
      } else {
        setSubmitStatus("error");
        console.error("Backend error:", data.message);
      }
    } catch (error) {
      console.error("Connection failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------------- SUCCESS MESSAGE ----------------
  if (submitStatus === "success") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 sm:p-16 text-center shadow-2xl max-w-3xl w-full mx-auto"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 bg-green-100 rounded-full flex items-center justify-center"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6"
          >
            Application Received!
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-neutral-600 text-lg sm:text-xl mb-8 sm:mb-10 leading-relaxed"
          >
            Thank You For Your Interest In Joining Startup Mela 2026.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => setSubmitStatus(null)}
            className="px-8 py-3 sm:px-10 sm:py-4 rounded-full bg-black text-white font-semibold hover:bg-neutral-800 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Submit Another Response
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // ---------------- FORM UI ----------------
  return (
    <motion.div
      id="application-form"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      // Responsive Padding: p-4 for mobile, p-8/p-16 for larger screens.
      // Adjusted top padding to prevent excessive whitespace on mobile.
      className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-black/5 p-4 pt-20 sm:p-8 sm:pt-32 md:p-16 max-w-5xl mx-auto"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Responsive Heading Size */}
      <h2 className="text-[12vw] md:text-[8rem] font-bold tracking-tighter text-black leading-[0.8] mt-8 mb-10 sm:mt-12 sm:mb-16 select-none border-b border-neutral-100 pb-6 sm:pb-10">
        Application
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 sm:space-y-10"
        noValidate
      >
        {/* ------------------ BASIC INFO ------------------ */}
        {/* Responsive Grid: 1 col mobile, 2 col md, 4 col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            placeholder="John Doe"
          />
          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            placeholder="john@example.com"
          />
          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone}
            placeholder="+91 9876543210"
          />
          <InputField
            label="College & Year"
            name="collegeYear"
            value={formData.collegeYear}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.collegeYear}
            placeholder="PU - 3rd Year"
          />
        </div>

        {/* ------------------ ROLE SELECT ------------------ */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <label className="text-xs sm:text-sm font-bold text-black uppercase tracking-widest">
            Role You're Applying For <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              onBlur={handleBlur}
              // Responsive Padding & Font Size
              className={`w-full px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-neutral-50 border-2 ${
                errors.role
                  ? "border-red-500"
                  : "border-transparent hover:border-neutral-200 focus:border-blue-500"
              } outline-none transition-all appearance-none cursor-pointer text-neutral-900 font-bold text-base sm:text-lg`}
            >
              <option value="" disabled>
                Select A Role
              </option>
              {ROLES.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          {errors.role && (
            <span className="text-xs text-red-500 font-bold">
              {errors.role}
            </span>
          )}
        </div>

        {/* ------------------ TEXTAREAS ------------------ */}
        <TextAreaField
          label="Why do you want to be part of Startup Mela 2026?"
          name="q1"
          value={formData.q1}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.q1}
          min={50}
          max={1000}
        />
        <TextAreaField
          label="Describe how you complete tasks from start to finish."
          name="q2"
          value={formData.q2}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.q2}
          min={50}
          max={1000}
        />
        <TextAreaField
          label="How would you approach a task you’ve never done before?"
          name="q3"
          value={formData.q3}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.q3}
          min={50}
          max={600}
        />
        <TextAreaField
          label="Consistency matters. How will you stay committed?"
          name="q4"
          value={formData.q4}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.q4}
          min={30}
          max={600}
        />

        <InputField
          label="How many hours can you give every day?"
          name="hours"
          value={formData.hours}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.hours}
          placeholder="e.g., 3-4 Hours"
        />

        <TextAreaField
          label="Tell us about a situation where you handled pressure."
          name="q5"
          value={formData.q5}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.q5}
          min={40}
          max={800}
        />

        {/* ------------------ RESUME LINK ------------------ */}
        <div className="p-4 sm:p-8 bg-blue-50 rounded-2xl sm:rounded-3xl border border-blue-100">
          <InputField
            label="Paste Your Resume Link"
            name="resumeLink"
            type="url"
            value={formData.resumeLink}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.resumeLink}
            placeholder="https://..."
          />
        </div>

        {/* ------------------ SUBMIT ------------------ */}
        <button
          type="submit"
          disabled={isSubmitting}
          // Responsive Button Sizing
          className={`w-full py-3 sm:py-5 rounded-full text-white font-black text-lg sm:text-xl uppercase tracking-widest transition-all transform active:scale-[0.98] ${
            isSubmitting
              ? "bg-neutral-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B] hover:scale-[1.01]"
          }`}
        >
          {isSubmitting ? "Processing..." : "Submit Application"}
        </button>

        {submitStatus === "error" && (
          <p className="text-red-500 text-center mt-4 font-bold text-sm">
            Something Went Wrong. Please Try Again.
          </p>
        )}
      </form>
    </motion.div>
  );
};

// --------------------------------------------------------
// HELPER COMPONENTS
// --------------------------------------------------------

const InputField = ({ label, error, ...props }) => (
  <div className="flex flex-col gap-2 sm:gap-3 w-full">
    <label className="text-xs sm:text-sm font-bold text-black uppercase tracking-widest">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      // Responsive Padding & Font Size
      className={`w-full px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-neutral-50 border-2 ${
        error
          ? "border-red-500"
          : "border-transparent hover:border-neutral-200 focus:border-blue-500"
      } outline-none transition-all placeholder:text-neutral-300 text-neutral-900 font-bold text-base sm:text-lg`}
      {...props}
    />
    {error && <span className="text-xs text-red-500 font-bold">{error}</span>}
  </div>
);

const TextAreaField = ({ label, error, min, max, value, ...props }) => (
  <div className="flex flex-col gap-2 sm:gap-3 w-full">
    <div className="flex justify-between items-end">
      <label className="text-xs sm:text-sm font-bold text-black uppercase tracking-widest">
        {label} <span className="text-red-500">*</span>
      </label>
      <span
        className={`text-xs font-mono font-bold ${
          value?.length > max ? "text-red-500" : "text-neutral-400"
        }`}
      >
        {value?.length || 0}/{max}
      </span>
    </div>

    <textarea
      rows={props.rows || 6}
      // Responsive Padding & Font Size
      className={`w-full px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-neutral-50 border-2 ${
        error
          ? "border-red-500"
          : "border-transparent hover:border-neutral-200 focus:border-blue-500"
      } outline-none transition-all placeholder:text-neutral-300 text-neutral-900 resize-y font-medium text-base sm:text-lg leading-relaxed`}
      value={value}
      {...props}
    />
    {error && <span className="text-xs text-red-500 font-bold">{error}</span>}
  </div>
);

export default VolunteerForm;
