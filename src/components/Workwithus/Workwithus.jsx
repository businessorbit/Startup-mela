import { useState } from "react";
import { motion } from "framer-motion";

// Backend API Base
const API_BASE = "https://startupmelabackend.vercel.app/api"; // <-- CHANGE THIS

const ROLES = [
  "Video Editing",
  "Sales",
  "Marketing",
  "Graphic Design",
  "Management",
  "Social Media Management",
  "Content Writing",
  "Campus Ambassador"
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
    resumeLink: ""
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
        if (!value || value.trim() === "")
          error = "This Field Is Required.";
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
        behavior: "smooth"
      });
      return;
    }

    // Submit to backend
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE}/volunteer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
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
          resumeLink: ""
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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-12 text-center shadow-xl max-w-2xl mx-auto font-sans"
      >
        <h3 className="text-3xl font-bold text-black mb-4">Application Received!</h3>
        <p className="text-neutral-600 text-lg mb-8">
          Thank You For Your Interest In Joining Startup Mela 2026.
        </p>
        <button
          onClick={() => setSubmitStatus(null)}
          className="px-8 py-3 rounded-full bg-neutral-100 text-neutral-900 font-bold hover:bg-neutral-200 transition-colors"
        >
          Submit Another Response
        </button>
      </motion.div>
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
      className="bg-white rounded-[2.5rem] shadow-2xl shadow-black/5 p-8 py-7 md:p-16 max-w-5xl mx-auto"
      style={{ fontFamily: '"TT Chocolates", sans-serif' }}
    >
      <h2 className="text-[12vw] md:text-[8rem] font-bold tracking-tighter text-black leading-[0.8] mb-16 select-none border-b border-neutral-100 pb-10">
        Application
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10" noValidate>
        {/* ------------------ BASIC INFO ------------------ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} error={errors.name} placeholder="John Doe" />
          <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} placeholder="john@example.com" />
          <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} onBlur={handleBlur} error={errors.phone} placeholder="+91 9876543210" />
          <InputField label="College & Year" name="collegeYear" value={formData.collegeYear} onChange={handleChange} onBlur={handleBlur} error={errors.collegeYear} placeholder="PU - 3rd Year" />
        </div>

        {/* ------------------ ROLE SELECT ------------------ */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-bold text-black uppercase tracking-widest">
            Role You're Applying For <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-6 py-4 rounded-2xl bg-neutral-50 border-2 ${errors.role ? "border-red-500" : "border-transparent hover:border-neutral-200 focus:border-blue-500"} outline-none transition-all appearance-none cursor-pointer text-neutral-900 font-bold text-lg`}
            >
              <option value="" disabled>Select A Role</option>
              {ROLES.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          {errors.role && <span className="text-xs text-red-500 font-bold">{errors.role}</span>}
        </div>

        {/* ------------------ TEXTAREAS ------------------ */}
        <TextAreaField label="Why do you want to be part of Startup Mela 2026?" name="q1" value={formData.q1} onChange={handleChange} onBlur={handleBlur} error={errors.q1} min={50} max={1000} />
        <TextAreaField label="Describe how you complete tasks from start to finish." name="q2" value={formData.q2} onChange={handleChange} onBlur={handleBlur} error={errors.q2} min={50} max={1000} />
        <TextAreaField label="How would you approach a task you’ve never done before?" name="q3" value={formData.q3} onChange={handleChange} onBlur={handleBlur} error={errors.q3} min={50} max={600} />
        <TextAreaField label="Consistency matters. How will you stay committed?" name="q4" value={formData.q4} onChange={handleChange} onBlur={handleBlur} error={errors.q4} min={30} max={600} />

        <InputField label="How many hours can you give every day?" name="hours" value={formData.hours} onChange={handleChange} onBlur={handleBlur} error={errors.hours} placeholder="e.g., 3-4 Hours" />

        <TextAreaField label="Tell us about a situation where you handled pressure." name="q5" value={formData.q5} onChange={handleChange} onBlur={handleBlur} error={errors.q5} min={40} max={800} />

        {/* ------------------ RESUME LINK ------------------ */}
        <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
          <InputField label="Paste Your Resume Link" name="resumeLink" type="url" value={formData.resumeLink} onChange={handleChange} onBlur={handleBlur} error={errors.resumeLink} placeholder="https://..." />
        </div>

        {/* ------------------ SUBMIT ------------------ */}
        <button type="submit" disabled={isSubmitting} className={`w-full py-5 rounded-full text-white font-black text-xl uppercase tracking-widest transition-all transform active:scale-[0.98] ${isSubmitting ? "bg-neutral-400 cursor-not-allowed" : "bg-gradient-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B] hover:scale-[1.01]"}`}>
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
  <div className="flex flex-col gap-3 w-full">
    <label className="text-sm font-bold text-black uppercase tracking-widest">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      className={`w-full px-6 py-4 rounded-2xl bg-neutral-50 border-2 ${
        error ? "border-red-500" : "border-transparent hover:border-neutral-200 focus:border-blue-500"
      } outline-none transition-all placeholder:text-neutral-300 text-neutral-900 font-bold text-lg`}
      {...props}
    />
    {error && <span className="text-xs text-red-500 font-bold">{error}</span>}
  </div>
);

const TextAreaField = ({ label, error, min, max, value, ...props }) => (
  <div className="flex flex-col gap-3 w-full">
    <div className="flex justify-between items-end">
      <label className="text-sm font-bold text-black uppercase tracking-widest">
        {label} <span className="text-red-500">*</span>
      </label>
      <span className={`text-xs font-mono font-bold ${value?.length > max ? "text-red-500" : "text-neutral-400"}`}>
        {value?.length || 0}/{max}
      </span>
    </div>

    <textarea
      rows={props.rows || 6}
      className={`w-full px-6 py-4 rounded-2xl bg-neutral-50 border-2 ${
        error ? "border-red-500" : "border-transparent hover:border-neutral-200 focus:border-blue-500"
      } outline-none transition-all placeholder:text-neutral-300 text-neutral-900 resize-y font-medium text-lg leading-relaxed`}
      value={value}
      {...props}
    />
    {error && <span className="text-xs text-red-500 font-bold">{error}</span>}
  </div>
);

export default VolunteerForm;
