import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for contacting Capyngen. We will get back to you shortly."
    );
  };

  return (
    <div className="bg-black py-24 w-full relative overflow-hidden">
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
                src="https://maps.google.com/maps?q=Tower+B3,+Spaze+i-Tech+Park,+Sector+49,+Gurugram,+Haryana&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

                  {/* Second Name */}
                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      Second Name
                    </label>
                    <input
                      type="text"
                      name="secondName"
                      value={formData.secondName}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 outline-none transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm text-slate-300 mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
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
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-2 transition-transform duration-300"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsSection;
