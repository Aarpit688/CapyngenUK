import { NavLink } from "react-router-dom";
import { assets, navItems } from "../assets/assets";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100086626928653",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/capyngen-private-limited-5ba173390",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/capyngen/",
      label: "Instagram",
    },
    { icon: Twitter, href: "https://x.com/CapyngenIndia", label: "Twitter" },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@Capyngen-pvt-ltd",
      label: "YouTube",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "query@capyngen.com",
      href: "mailto:query@capyngen.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Tower B3, Spaze i-Tech Park, Sector 49, Gurugram, Haryana 122018",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* GREEN Background Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-green-600/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/10 to-teal-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-lime-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-[90vw] mx-auto py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-8 mb-12">
          {/* COMPANY SECTION */}
          <div className="lg:col-span-1">
            <NavLink to="/" className="mb-6 block">
              <img
                src={assets.capyngenLogo || assets.capyngenFavIcon}
                alt="Capyngen Logo"
                className="w-full max-w-[200px]"
              />
            </NavLink>

            <p className="text-slate-300 text-sm">
              Transforming businesses through innovative IT solutions with
              enterprise-grade performance and scalability.
            </p>

            <div className="space-y-4 mt-5">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <c.icon className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-slate-400 font-medium">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-slate-300 hover:text-emerald-400 transition"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-slate-300">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TURNKEY SECTION */}
          <FooterColumn
            title="Turnkey"
            data={navItems.filter((i) => i.label === "TURNKEY")}
            showAll={showAllServices}
            setShowAll={setShowAllServices}
            green
          />

          {/* PRODUCTS SECTION */}
          <FooterColumn
            title="Products"
            data={navItems.filter((i) => i.label === "PRODUCTS")}
            showAll={showAllIndustries}
            setShowAll={setShowAllIndustries}
            green
          />

          {/* PLATFORMS */}
          <FooterColumnSimple
            title="Platforms"
            data={navItems.filter((i) => i.label === "PLATFORMS")}
            green
          />

          {/* SERVICES */}
          <FooterColumnSimple
            title="Services"
            data={navItems.filter((i) => i.label === "SERVICES")}
            green
          />

          {/* COMPANY LINKS */}
          <FooterColumnSimple
            title="Company"
            data={navItems.filter((i) => i.label === "COMPANY")}
            green
          />

          {/* SOCIAL SECTION */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Stay Connected
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600"></span>
            </h4>
            <p className="text-slate-300 text-sm mb-3">
              Follow us on social media
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition hover:scale-110 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* SCROLL TO TOP */}
        <div className="relative border-t border-slate-700/50 my-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={scrollToTop}
              className={`w-12 h-12 rounded-full border border-emerald-500 bg-slate-800/50 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-emerald-500 hover:scale-110 ${
                showScrollTop
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <ArrowUp className="w-5 h-5 text-emerald-400 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* BOTTOM LINKS */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400 gap-4">
          <div>© {currentYear} Capyngen. All rights reserved.</div>
          <div className="flex gap-6">
            <NavLink
              to="/privacy-policy"
              className="hover:text-emerald-400 transition"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms-of-service"
              className="hover:text-emerald-400 transition"
            >
              Terms of Service
            </NavLink>
            <NavLink
              to="/sitemap"
              className="hover:text-emerald-400 transition"
            >
              Sitemap
            </NavLink>
          </div>
        </div>
      </div>

      {/* WATERMARK */}
      <div className="relative h-[50px] md:h-[100px]">
        <div className="absolute top-0 -translate-y-1/2 inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-slate-800/50 text-7xl md:text-9xl lg:text-[12rem] font-bold">
            capyngen
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ---------------------
   HELPING SUB COMPONENTS
---------------------- */

const FooterColumn = ({ title, data, showAll, setShowAll }) => (
  <div>
    <h4 className="text-lg font-bold text-white mb-6 relative">
      {title}
      <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600"></div>
    </h4>

    {data.map((item, idx) => (
      <div key={idx}>
        {item.dropdown?.map((section, secIdx) => (
          <div key={secIdx} className="mb-4">
            {section.title && (
              <div className="text-slate-200 font-semibold mb-2">
                {section.title}
              </div>
            )}
            <ul className="space-y-2">
              {(showAll ? section.links : section.links.slice(0, 5)).map(
                (link, i) => (
                  <li key={i}>
                    <NavLink
                      to={link.href}
                      className="text-slate-300 hover:text-emerald-400 transition text-sm"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}

        {(() => {
          const total =
            item.dropdown?.reduce((sum, s) => sum + s.links.length, 0) || 0;
          return total > 10 ? (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-1 text-emerald-400 text-sm hover:underline"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          ) : null;
        })()}
      </div>
    ))}
  </div>
);

const FooterColumnSimple = ({ title, data }) => (
  <div>
    <h4 className="text-lg font-bold text-white mb-6 relative">
      {title}
      <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600"></div>
    </h4>

    {data.map((item) => (
      <div key={item.label}>
        {item.dropdown?.map((section, i) => (
          <ul key={i} className="space-y-2 mb-4">
            {section.links.map((link, j) => (
              <li key={j}>
                <NavLink
                  to={link.href}
                  className="text-slate-300 hover:text-emerald-400 transition text-sm"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    ))}
  </div>
);
