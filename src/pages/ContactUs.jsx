import React, { useState, useRef } from "react";

const ContactUs = () => {
  const Icon = ({ name, className }) => {
    return <div className={className}>[{name}]</div>;
  };

  const TIMELINE_STEPS = [
    {
      id: 1,
      title: "We'll prepare a proposal",
      description:
        "Required scope, timeline and apr. price will be included if you provide us with detail information about a project.",
    },
    {
      id: 2,
      title: "Together we discuss it",
      description:
        "Let's get acquainted and discuss all the possible variants and options. Google Hangouts or Skype usually works great.",
    },
    {
      id: 3,
      title: "Let's start building",
      description:
        "When the contract is signed, and all goals are set we can start the first sprint.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    details: "",
    file: null,
  });

  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files?.[0]) {
      setFormData((prev) => ({ ...prev, file: e.dataTransfer.files[0] }));
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center py-16 px-4 overflow-hidden">
      {/* --- Animated Gradient Background Elements --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-600 opacity-20 blur-[150px] animate-pulse delay-700"></div>

      {/* --- Floating Blob for Depth --- */}
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-purple-500 opacity-10 blur-[200px] animate-floating"></div>

      {/* --- Main Container --- */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 z-20">
        {/* ------------------------------------------------------
            CONTACT FORM (with animation)
        --------------------------------------------------------- */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-8 md:p-12 w-full animate-slideUp">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-blue-600 text-white p-3 rounded-md shrink-0">
              <Icon name="zap" className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl text-white font-medium leading-snug">
              Write us a few words about your project and we'll prepare a
              proposal within <strong className="font-bold">24 hours.</strong>
            </h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="bg-white/10 rounded-md px-4 py-3 border border-white/20">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white outline-none placeholder-gray-300 text-sm"
                />
              </div>

              {/* Email */}
              <div className="bg-white/10 rounded-md px-4 py-3 border border-white/20">
                <input
                  type="email"
                  name="email"
                  placeholder="Your e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white outline-none placeholder-gray-300 text-sm"
                />
              </div>

              {/* Company */}
              <div className="bg-white/10 rounded-md px-4 py-3 border border-white/20">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white outline-none placeholder-gray-300 text-sm"
                />
              </div>

              {/* Budget */}
              <div className="bg-white/10 rounded-md px-4 py-3 border border-white/20">
                <input
                  type="text"
                  name="budget"
                  placeholder="Apr. budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white outline-none placeholder-gray-300 text-sm"
                />
              </div>
            </div>

            {/* Details */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-3">Optional</h4>

              <div className="bg-white/10 rounded-md px-4 py-4 border border-white/20">
                <textarea
                  name="details"
                  rows={4}
                  placeholder="Project details"
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white outline-none placeholder-gray-300 text-sm resize-none"
                />
              </div>
            </div>

            {/* File Upload */}
            <div
              className={`relative border-2 border-dashed rounded-md p-6 transition-colors cursor-pointer mt-4 flex items-center justify-center bg-white/5 ${
                isDragOver
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-white/30 hover:bg-white/10"
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />

              <div className="flex items-center gap-3 text-gray-300 uppercase text-xs tracking-wide font-semibold">
                <div className=" text-white p-1.5 rounded shadow-sm">
                  <Icon name="file" className="w-4 h-4" />
                </div>

                {formData.file ? (
                  <span className="text-blue-300">{formData.file.name}</span>
                ) : (
                  <span>Drop it like it's hot</span>
                )}
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-md hover:bg-blue-700 transition-colors shadow-lg mt-2 text-sm tracking-wide"
              onClick={(e) => e.preventDefault()}
            >
              Send
            </button>

            <p className="text-center text-xs text-gray-300 mt-4 font-medium">
              If you need to have a DNA first, contact us at{" "}
              <a
                href="mailto:contact@materio.co"
                className="text-white font-bold"
              >
                contact@materio.co
              </a>
            </p>
          </form>
        </div>

        {/* ------------------------------------------------------
            TIMELINE (with fade animation)
        --------------------------------------------------------- */}
        <div className="animate-fadeIn w-full mt-10 md:mt-0">
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            What will <br /> be next step?
          </h2>

          <p className="text-gray-300 mb-12 max-w-xs text-lg leading-relaxed">
            You are one step closer to build your perfect product
          </p>

          <div className="relative border-l-2 border-white/10 ml-3 space-y-12 pb-2">
            {TIMELINE_STEPS.map((step) => (
              <div
                key={step.id}
                className="pl-10 relative group transition-all duration-500 hover:translate-x-2"
              >
                <div className="absolute -left-[9px] top-1 w-[16px] h-[16px] rounded-full border-4 border-rose-500 bg-white z-10"></div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-rose-400 font-bold text-lg">
                      {step.id}.
                    </span>
                    <h3 className="text-white font-bold text-lg">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-floating {
          animation: floating 6s ease-in-out infinite;
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.9s ease-out forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
