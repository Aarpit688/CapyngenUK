import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  MapPin,
  Send,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

// --- Helper Component: Dropdown (Ported from Source) ---
const Dropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
      <span className="text-sm text-slate-300">{label}</span>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full text-left bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-all flex justify-between items-center"
        >
          <span className={value ? "text-white" : "text-slate-500"}>
            {value || "Select a topic"}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 w-full mt-1 max-h-52 overflow-y-auto bg-[#0f0f11] border border-blue-600 rounded-xl shadow-lg z-50 backdrop-blur-xl">
            <input
              type="text"
              placeholder="Search topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 bg-transparent text-sm text-white border-b border-blue-500 placeholder:text-neutral-500 focus:outline-none"
            />
            <ul className="max-h-44 overflow-y-auto custom-scroll">
              {filteredOptions.length ? (
                filteredOptions.map((opt) => (
                  <li
                    key={opt}
                    onClick={() => {
                      onChange(opt);
                      setIsOpen(false);
                    }}
                    className="px-3 py-2 text-sm hover:bg-blue-600/40 cursor-pointer transition-colors duration-200 text-white"
                  >
                    {opt}
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-neutral-400 text-sm">
                  No matches found
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main Component ---
const ContactUsSection = () => {
  const topics = [
    "Web Development",
    "App Development",
    "Custom AI Solution",
    "E-Commerce Solutions",
    "Blockchain Development",
    "DevOps Solutions",
    "Application Solutions",
    "CRM & Management Software",
    "UI/UX Design",
    "Website Design",
    "Branding & Identity Design",
    "Ecommerce Design",
    "CMS Design",
    "Digital Marketing",
    "Search Engine Optimization (SEO)",
    "Social Media Marketing (SMM)",
    "Pay-Per-Click Advertising (PPC)",
    "Artificial Intelligence",
    "Cybersecurity",
    "Network Solutions & Services",
    "Enterprise Solutions",
    "Data & Analytics",
    "Consulting",
    "Others",
  ];

  // Updated state keys to match API requirements: lastName instead of secondName, phoneNumber instead of phone
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    if (showResponse) {
      const timer = setTimeout(() => {
        setShowResponse(false);
        setResponseMsg("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showResponse]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);
    setResponseMsg("");
    setShowResponse(false);

    try {
      const response = await fetch("https://api.capyngen.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (window.fbq) {
        window.fbq("track", "Lead");
      }

      if (response.ok) {
        setResponseMsg("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          topic: "",
          message: "",
        });
      } else {
        setResponseMsg(
          `❌ Error: ${data.message || "Failed to send message"}`
        );
      }
    } catch {
      setResponseMsg("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setShowResponse(true);
    }
  };

  return (
    <div className="bg-black py-24 w-full relative overflow-hidden">
      {/* Styles for the Dropdown Animation & Scrollbar */}
      <style>{`
        @keyframes popIn {
          0% {transform: scale(0.8); opacity: 0;}
          100% {transform: scale(1); opacity: 1;}
        }
        .animate-popIn {
          animation: popIn 0.35s ease forwards;
        }
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #2563eb;
          border-radius: 8px;
        }
      `}</style>

      {/* Soft minimal glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"></div>

      <section className="max-w-[90vw] mx-auto w-full" id="contact">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Contact Capyngen
          </h2>
          <p className="text-slate-400 text-lg">
            We’re here to answer your questions and support your brokerage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            {/* Contact Card */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white mb-10">
                Contact Information
              </h3>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-cyan-400">
                    <MapPin className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">
                      Headquarters
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      Tower B3, Spaze i-Tech Park <br />
                      Sector 49, Gurugram <br />
                      Haryana 122018
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-cyan-400">
                    <Mail className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">
                      Email Us
                    </h4>
                    <a
                      href="mailto:sales@capyngen.com"
                      className="text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      sales@capyngen.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">Follow Us</h4>

                <div className="flex gap-3">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=100086626928653"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all duration-300
                 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/capyngen-private-limited-5ba173390"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all duration-300
                 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/capyngen/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all duration-300
                 hover:text-white hover:border-pink-500 
                 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>

                  {/* Twitter (X) */}
                  <a
                    href="https://x.com/CapyngenIndia"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all duration-300
                 hover:bg-black hover:border-black hover:text-white"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@Capyngen-pvt-ltd"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all duration-300
                 hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <div className="absolute inset-0 bg-white/5 z-10 mix-blend-overlay pointer-events-none"></div>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.2159924974653!2d77.0415838754927!3d28.41273877578547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x489ffc51a97b2a05%3A0xce07c65b285ef184!2scapyngen!5e0!3m2!1sen!2sin!4v1761233238159!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{
                  border: 0,
                  filter:
                    "invert(90%) hue-rotate(180deg) brightness(90%) contrast(85%)",
                }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT COLUMN — FORM */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20"></div>

            <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-10 md:p-12 backdrop-blur-xl shadow-xl">
              <h3 className="text-3xl font-semibold text-white mb-3">
                Send Us a Message
              </h3>
              <p className="text-slate-400 mb-10">
                Fill out the form and our team will contact you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-all"
                      placeholder="John"
                      required
                    />
                  </div>

                  {/* Last Name (Mapped to API 'lastName') */}
                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone (Mapped to API 'phoneNumber') */}
                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* New Topic Dropdown */}
                <div>
                  <Dropdown
                    label="Select Topic"
                    options={topics}
                    value={formData.topic}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, topic: value }))
                    }
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-slate-300 mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={7}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-all resize-none"
                    placeholder="Tell us what you need..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-2 transition-transform duration-300 disabled:opacity-60"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  <Send className="w-4 h-4" />
                </button>

                {/* Response Message */}
                {showResponse && (
                  <p
                    className={`mt-6 rounded-xl py-2 px-6 text-center text-sm font-semibold max-w-sm mx-auto ${
                      responseMsg.includes("✅")
                        ? "bg-green-600/80 text-green-100"
                        : "bg-red-600/80 text-red-100"
                    } animate-popIn`}
                  >
                    {responseMsg.replace(/^✅|❌/g, "")}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsSection;