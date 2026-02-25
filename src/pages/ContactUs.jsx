import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  MapPin,
  Send,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Check,
  ChevronDown,
  AlertCircle
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { getExampleNumber, isValidPhoneNumber } from "libphonenumber-js";
import examples from "libphonenumber-js/examples.mobile.json";

// --- Validation Helpers ---
const validateName = (name) => {
  if (!name.trim()) return false;
  const hasValidChars = /^[a-zA-Z\s\-']+$/.test(name);
  const hasNoConsecutive = !/([\s\-'])\1/.test(name);
  return hasValidChars && hasNoConsecutive;
};

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// --- Enhanced Dropdown Component ---
const Dropdown = ({ label, options, value, onChange, placeholder, isObject = false, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((opt) => {
    const text = isObject ? opt.name : opt;
    return text.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = isObject ? options.find(o => o.name === value) : null;
  const displayValue = selectedOption ? selectedOption.name : (value || placeholder);

  return (
    <div className="flex flex-col gap-2 relative w-full" ref={dropdownRef}>
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`w-full text-left bg-black/20 border rounded-xl px-4 py-3 outline-none transition-all flex justify-between items-center ${error
            ? "border-red-500 focus:ring-1 focus:ring-red-500"
            : isOpen
              ? "border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              : "border-white/10 hover:border-white/20"
            }`}
        >
          <span className={value ? "text-white flex items-center gap-2" : "text-slate-500 truncate pr-4 block"}>
            {isObject && selectedOption?.flagUrl && (
              <img src={selectedOption.flagUrl} alt="flag" className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm shrink-0" />
            )}
            <span className="truncate">{displayValue}</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 shrink-0 ${error ? "text-red-400" : "text-slate-400"
              } ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute left-0 w-full mt-2 max-h-60 overflow-hidden bg-[#121214] border border-white/10 rounded-xl shadow-2xl z-50 backdrop-blur-xl animate-popIn">
            <div className="p-2 border-b border-white/5">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-2 bg-black/30 rounded-lg text-sm text-white border border-white/5 focus:border-cyan-500/50 placeholder:text-slate-500 outline-none transition-colors"
              />
            </div>
            <ul className="max-h-48 overflow-y-auto custom-scroll p-1">
              {filteredOptions.length ? (
                filteredOptions.map((opt, idx) => {
                  const optName = isObject ? opt.name : opt;
                  const isSelected = value === optName;
                  return (
                    <li
                      key={idx}
                      onClick={() => {
                        onChange(isObject ? opt : optName);
                        setIsOpen(false);
                        setSearch("");
                      }}
                      className={`px-3 py-2.5 text-sm rounded-lg cursor-pointer transition-colors duration-200 flex items-center justify-between ${isSelected
                        ? "bg-cyan-500/10 text-cyan-400 font-medium"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        {isObject && opt.flagUrl && (
                          <img src={opt.flagUrl} alt="flag" className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm shrink-0" />
                        )}
                        <span className="truncate">{optName}</span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 shrink-0" />}
                    </li>
                  );
                })
              ) : (
                <li className="px-3 py-4 text-center text-slate-500 text-sm">
                  No matches found
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      {error && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {error}</span>}
    </div>
  );
};

// --- Main Component ---
const ContactUsSection = () => {
  const services = [
    "Forex Broker",
    "Crypto Exchange",
    "PSP Solution",
    "Liquidity Solution",
    "Custom Development"
  ];

  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);

  const [formData, setFormData] = useState({
    isExistingClient: null,
    firstName: "",
    lastName: "",
    country: "",
    countryCodeIso: "",
    dialCode: "",
    phoneNumber: "",
    email: "",
    service: "",
    additionalRequirements: "",
    marketingConsent: false,
    privacyConsent: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2,idd,flags");
        const data = await res.json();

        const formattedCountries = data.map((c) => {
          let code = "";
          if (c.idd && c.idd.root) {
            code = c.idd.suffixes && c.idd.suffixes.length === 1
              ? `${c.idd.root}${c.idd.suffixes[0]}`
              : c.idd.root;
          }
          return {
            name: c.name.common,
            code: c.cca2,
            dialCode: code,
            flagUrl: c.flags?.svg || c.flags?.png
          };
        }).sort((a, b) => a.name.localeCompare(b.name));

        setCountries(formattedCountries);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      } finally {
        setLoadingCountries(false);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (showResponse) {
      const timer = setTimeout(() => {
        setShowResponse(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showResponse]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCountrySelect = (countryObj) => {
    setFormData((prev) => ({
      ...prev,
      country: countryObj.name,
      countryCodeIso: countryObj.code,
      dialCode: countryObj.dialCode,
      phoneNumber: "",
    }));
    setErrors((prev) => ({ ...prev, country: "", phoneNumber: "" }));
  };

  const handleClientToggle = (val) => {
    setFormData((prev) => ({ ...prev, isExistingClient: val }));
    if (errors.isExistingClient) {
      setErrors((prev) => ({ ...prev, isExistingClient: "" }));
    }
  };

  const getPhonePlaceholder = () => {
    if (!formData.countryCodeIso) return "555 000 0000";
    try {
      const example = getExampleNumber(formData.countryCodeIso, examples);
      return example ? example.formatNational() : "555 000 0000";
    } catch (e) {
      return "555 000 0000";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.isExistingClient === null) newErrors.isExistingClient = "Please select an option.";

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = "Invalid format. No special characters or consecutive spaces/dashes.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = "Invalid format. No special characters or consecutive spaces/dashes.";
    }

    if (!formData.countryCodeIso) newErrors.country = "Please select a country.";

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (formData.countryCodeIso && !isValidPhoneNumber(formData.phoneNumber, formData.countryCodeIso)) {
      newErrors.phoneNumber = `Invalid phone number for ${formData.country}.`;
    }

    if (!formData.email) {
      newErrors.email = "Email address is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) newErrors.service = "Please select a service.";

    if (!formData.privacyConsent) newErrors.privacyConsent = "You must accept the Privacy Policy to continue.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setResponseMsg("❌ Please fix the errors highlighted in red above.");
      setShowResponse(true);
      return;
    }

    if (loading) return;
    setLoading(true);
    setResponseMsg("");
    setShowResponse(false);

    const payload = {
      ...formData,
      fullPhoneNumber: `${formData.dialCode} ${formData.phoneNumber}`.trim(),
    };

    try {
      const response = await fetch("https://api.Aynzenix.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (window.fbq) {
        window.fbq("track", "Lead");
      }

      if (response.ok) {
        setResponseMsg("✅ Enquiry submitted successfully!");
        setFormData({
          isExistingClient: null,
          firstName: "",
          lastName: "",
          country: "",
          countryCodeIso: "",
          dialCode: "",
          phoneNumber: "",
          email: "",
          service: "",
          additionalRequirements: "",
          marketingConsent: false,
          privacyConsent: false,
        });
        setErrors({});
      } else {
        setResponseMsg(`❌ Error: ${data.message || "Failed to send message"}`);
      }
    } catch {
      setResponseMsg("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setShowResponse(true);
    }
  };

  return (
    <div className="bg-[#050505] py-16 w-full relative overflow-hidden font-sans">
      <style>{`
        @keyframes popIn {
          0% {transform: translateY(10px); opacity: 0;}
          100% {transform: translateY(0); opacity: 1;}
        }
        .animate-popIn {
          animation: popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #334155; border-radius: 8px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <section className="max-w-[85vw] xl:max-w-7xl mx-auto w-full relative z-10" id="contact">

        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Together</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tell us about your requirements, and our specialists will get back to you with the perfect solution.
          </p>
        </div>

        {/* --- FORM SECTION (Centered) --- */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>

              {/* 1. Existing Client Toggle */}
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-black/20 border transition-colors ${errors.isExistingClient ? 'border-red-500' : 'border-white/5'}`}>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-300 font-medium">Are you an existing client?</span>
                  {errors.isExistingClient && <span className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.isExistingClient}</span>}
                </div>
                <div className="flex gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleClientToggle(true)}
                    className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${formData.isExistingClient === true
                      ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => handleClientToggle(false)}
                    className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${formData.isExistingClient === false
                      ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* 2. First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 block">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full bg-black/20 border rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-all ${errors.firstName
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-white/10 hover:border-white/20 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      }`}
                    placeholder="John"
                  />
                  {errors.firstName && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.firstName}</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 block">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full bg-black/20 border rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-all ${errors.lastName
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-white/10 hover:border-white/20 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.lastName}</span>}
                </div>
              </div>

              {/* 3. Country & Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <Dropdown
                  label="Country"
                  options={countries}
                  value={formData.country}
                  onChange={handleCountrySelect}
                  placeholder={loadingCountries ? "Loading countries..." : "Select Country"}
                  isObject={true}
                  error={errors.country}
                />

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 block">Phone Number</label>
                  <div className="flex relative">
                    <div className={`flex items-center justify-center bg-white/5 border border-r-0 rounded-l-xl px-3 min-w-[70px] text-white select-none text-sm transition-colors ${errors.phoneNumber ? "border-red-500" : "border-white/10"
                      }`}>
                      {formData.dialCode || "+"}
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`w-full bg-black/20 border rounded-r-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-all ${errors.phoneNumber
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-white/10 hover:border-white/20 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        }`}
                      placeholder={getPhonePlaceholder()}
                      disabled={!formData.countryCodeIso}
                    />
                  </div>
                  {errors.phoneNumber && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.phoneNumber}</span>}
                </div>
              </div>

              {/* 4. Email & Select Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-black/20 border rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-all ${errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-white/10 hover:border-white/20 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-400 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.email}</span>}
                </div>

                <Dropdown
                  label="Select Service"
                  options={services}
                  value={formData.service}
                  onChange={(val) => {
                    setFormData(prev => ({ ...prev, service: val }));
                    if (errors.service) setErrors(prev => ({ ...prev, service: "" }));
                  }}
                  placeholder="Choose a service"
                  error={errors.service}
                />
              </div>

              {/* 5. Additional Requirements */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-slate-300 block">Additional Requirements (If any)</label>
                  <span className={`text-xs ${formData.additionalRequirements.length >= 500 ? "text-red-400 font-bold" : "text-slate-500"}`}>
                    {formData.additionalRequirements.length}/500
                  </span>
                </div>
                <textarea
                  name="additionalRequirements"
                  rows={4}
                  maxLength={500}
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                  placeholder="Tell us briefly about your needs..."
                ></textarea>
              </div>

              {/* 6. Consents */}
              <div className="space-y-4 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input
                      type="checkbox"
                      name="marketingConsent"
                      checked={formData.marketingConsent}
                      onChange={handleChange}
                      className="peer appearance-none w-5 h-5 border-2 border-white/20 rounded bg-transparent checked:bg-cyan-500 checked:border-cyan-500 transition-colors"
                    />
                    <Check className="absolute w-3 h-3 text-black opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                  </div>
                  <span className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    I agree to receive marketing communications from Aynzenix via email, WhatsApp, and other relevant channels, and I understand that I may withdraw my consent at any time.
                  </span>
                </label>

                <div className="flex flex-col gap-1">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input
                        type="checkbox"
                        name="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={handleChange}
                        className={`peer appearance-none w-5 h-5 border-2 rounded bg-transparent checked:bg-cyan-500 checked:border-cyan-500 transition-colors ${errors.privacyConsent ? "border-red-500" : "border-white/20"
                          }`}
                      />
                      <Check className="absolute w-3 h-3 text-black opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                    </div>
                    <span className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      I declare that I have carefully read and fully understood the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Aynzenix Ltd Privacy Policy</a>. <span className="text-red-400">*</span>
                    </span>
                  </label>
                  {errors.privacyConsent && <span className="text-red-400 text-xs flex items-center gap-1 mt-1 ml-8"><AlertCircle className="w-3 h-3" /> {errors.privacyConsent}</span>}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black hover:bg-cyan-400 font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-4"
              >
                <span>{loading ? "Submitting..." : "Submit Your Enquiry"}</span>
                <Send className="w-4 h-4" />
              </button>

              {/* Status Message */}
              {showResponse && (
                <div className={`mt-4 rounded-xl p-4 text-sm font-semibold flex items-center justify-center animate-popIn border ${responseMsg.includes("✅")
                  ? "bg-green-500/10 border-green-500/20 text-green-400"
                  : "bg-red-500/10 border-red-500/20 text-red-400"
                  }`}>
                  {responseMsg}
                </div>
              )}

            </form>
          </div>
        </div>

        {/* --- BOTTOM SECTION (Contact Info & Map) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

          {/* Contact Info Card */}
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center border border-white/5 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Headquarters</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      Tower B3, Spaze i-Tech Park <br />
                      Sector 49, Gurugram <br />
                      Haryana 122018
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center border border-white/5 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <a href="mailto:sales@aynzenix.com" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm break-all">
                      sales@aynzenix.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <h4 className="text-white font-medium mb-5">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.facebook.com/aynzenix" target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/aynzenix-private-limited-5ba173390" target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:bg-[#0A66C2] hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/aynzenix/" target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                {/* <a href="https://x.com/aynzenixIndia" target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:bg-black hover:text-white transition-all">
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@aynzenix-pvt-ltd" target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:bg-[#FF0000] hover:text-white transition-all">
                  <Youtube className="w-5 h-5" />
                </a> */}
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-xl min-h-[350px] lg:min-h-full">
            <div className="absolute inset-0 bg-white/5 z-10 mix-blend-overlay pointer-events-none"></div>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.431302829283!2d77.03666031500392!3d28.40624029381882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229df5bc8999%3A0xc66513511b816a3f!2sSpaze%20i-Tech%20Park!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) brightness(90%) contrast(85%)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUsSection;