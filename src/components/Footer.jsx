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
import React, { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/aynzenixofficial/",
      label: "Facebook",
    },
    // {
    //   icon: Linkedin,
    //   href: "https://www.linkedin.com/company/aynzenix/",
    //   label: "LinkedIn",
    // },
    {
      icon: Instagram,
      href: "https://www.instagram.com/aynzenixofficial/?hl=en",
      label: "Instagram",
    },
    // { icon: FaXTwitter, href: "https://x.com/Aynzenix", label: "Twitter" },
    // {
    //   icon: Youtube,
    //   href: "https://www.youtube.com/@Aynzenix",
    //   label: "YouTube",
    // },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "query@aynzenix.com",
      href: "mailto:query@aynzenix.com",
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
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#6834B9]/10 to-[#5CFCF9]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#6834B9]/10 to-[#6834B9]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#6834B9]/10 to-[#5CFCF9]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-[90vw] mx-auto py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-6 mb-12">
          {/* Company Section */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <NavLink to="/" className=" block">
              <img
                src={assets.aynzenixLogo || assets.AynzenixFavIcon}
                alt="Aynzenix Logo"
                className="max-w-full w-24 md:w-24"
              />
            </NavLink>

            <p className="text-slate-300 text-sm mb-3">
             Aynzenix Technology Limited is a global fintech infrastructure provider delivering institutional-grade trading technology, liquidity connectivity, and payment solutions for brokers, financial institutions, and fintech companies. The Aynzenix group focuses on scalable financial infrastructure and advanced trading technology to support the evolving digital financial ecosystem.
            </p>

            <div className="space-y-4 mt-5">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <c.icon className="w-4 h-4 text-[#5CFCF9] mt-0.5" />
                  <div className="text-sm">
                    <p className="text-slate-400 font-medium">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-slate-300 hover:text-[#5CFCF9] transition"
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

          {/* Turnkey */}
          <FooterColumn
            title="Turnkey"
            data={navItems.filter((i) => i.label === "TURNKEY")}
            showAll={showAllServices}
            setShowAll={setShowAllServices}
          />

          {/* Products */}
          <FooterColumn
            title="Products"
            data={navItems.filter((i) => i.label === "PRODUCTS")}
            showAll={showAllIndustries}
            setShowAll={setShowAllIndustries}
          />

          {/* Simple columns */}
          <FooterColumnSimple
            title="Platforms"
            data={navItems.filter((i) => i.label === "PLATFORMS")}
          />

          <FooterColumnSimple
            title="Services"
            data={navItems.filter((i) => i.label === "SERVICES")}
          />

          <FooterColumnSimple
            title="Company"
            data={navItems.filter((i) => i.label === "COMPANY")}
          />
        </div>
        {/* Social */}
        <div>
          <h4 className="text-lg font-bold mb-6 relative">
            Stay Connected
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#6834B9] to-[#5CFCF9]"></span>
          </h4>

          <p className="text-slate-300 text-sm mb-3">
            Follow us on social media
          </p>

          <div className="flex space-x-3">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition hover:scale-110 hover:bg-gradient-to-r hover:from-[#5CFCF9] hover:to-green-600"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4 text-slate-300 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Group Companies */}
        <div className="mt-6 text-slate-300 text-sm space-y-3">
          <p>
            <b>AynX Markets Limited</b> is registered and regulated in Seychelles under registration number 0958584 and operates under license number SD365. The registered office of the company is located at Office No. 305, Level 3, House of Francis, Ile Du Port, Mahe, Seychelles.
          </p>
          <p>
            <b>Aynzenix Liquidity Solutions LTD.</b> is incorporated in The Bahamas under company license number SIA-A265. The company provides institutional liquidity connectivity, trading infrastructure, and market access solutions for brokers and financial institutions. Its registered address is 45, E Bay St, Nassau, Bahamas.
          </p>
          <p>
            <b>AynX Payment Limited</b> is authorized in the Union of the Comoros under license number A2365787. The company operates payment processing and financial transaction services, with an additional office located at 98X5+G8W Mangani, Bd Karthala, Moroni, Grande Comore, Comoros.
          </p>
        </div>

        <div className="mt-3 text-slate-300 text-sm">
          <h4 className="font-bold">Legal & Compliance</h4>
          <p>
            This website and the information contained herein are intended exclusively for professional clients, institutional investors, financial intermediaries, and eligible counterparties. The services described on this website are not intended for retail clients or the general public, unless permitted under applicable laws and regulations. Access to this website does not constitute an offer or solicitation in any jurisdiction where such distribution would be contrary to local laws or regulatory requirements. The services offered by the Aynzenix group may not be available in certain jurisdictions and it is the responsibility of users to ensure compliance with the laws applicable in their country of residence.
          </p>
        </div>
        <div className="mt-3 text-slate-300 text-sm">
          <h4 className="font-bold">Jurisdictional Restrictions</h4>
          <p>
            This website is not directed to residents of the United States or to any US Person, as defined under applicable US laws and regulations. Users who fall within this definition should refrain from accessing this website or using any services provided by the Aynzenix group.
          </p>
        </div>
        <div className="mt-3 text-slate-300 text-sm">
          <h4 className="font-bold">AML & Sanctions Compliance</h4>
          <p>
           The Aynzenix group maintains strict compliance with international Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) regulations. The company reserves the right to decline services or terminate business relationships with individuals, entities, or jurisdictions subject to international sanctions or regulatory restrictions.
          </p>
        </div>
        <div className="mt-3 text-slate-300 text-sm">
          <h4 className="font-bold">Risk Disclosure</h4>
          <p>
           Trading in financial instruments including Forex, CFDs, derivatives, and leveraged financial products carries a high level of risk and may not be suitable for all investors. The value of investments may increase or decrease and investors may lose all or part of their invested capital. In leveraged trading, losses may exceed the initial invested amount.
          </p>
          <p>Clients should ensure they fully understand the risks involved before engaging in trading activities.</p>
        </div>
        <div className="mt-3 text-slate-300 text-sm">
          <h4 className="font-bold">Intellectual Property</h4>
          <p>
           All trademarks, logos, and brand names appearing on this website are the property of their respective owners. Any reference to third-party trademarks is used strictly for identification purposes and does not imply endorsement or affiliation unless explicitly stated.
          </p>
        </div>

        {/* Scroll to Top */}
        <div className="relative border-t border-slate-700/50 my-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={scrollToTop}
              className={`w-12 h-12 rounded-full border border-[#5CFCF9] bg-slate-800/50 backdrop-blur-md flex items-center justify-center transition-all ${showScrollTop
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
                }`}
            >
              <ArrowUp className="w-5 h-5 text-[#5CFCF9]" />
            </button>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400 gap-4">
          <div>© {currentYear} Aynzenix Group. All rights reserved.</div>

          <div className="space-x-3">
            <NavLink
              to="/terms-of-service"
              className="hover:text-[#5CFCF9] transition"
            >
              Terms & Conditions
            </NavLink>
            <span>|</span>
            <NavLink
              to="/privacy-policy"
              className="hover:text-[#5CFCF9] transition"
            >
              Privacy Policy
            </NavLink>
            <span>|</span>
            <NavLink
              to="/sitemap"
              className="hover:text-[#5CFCF9] transition"
            >
              AML & KYC Policy
            </NavLink>
            <hr className="my-2" />
            <NavLink
              to="/privacy-policy"
              className="hover:text-[#5CFCF9] transition"
            >
              Risk Disclosure
            </NavLink>
            <span>|</span>
            <NavLink
              to="/terms-of-service"
              className="hover:text-[#5CFCF9] transition"
            >
              Cookie Policy
            </NavLink>
            <span>|</span>
            <NavLink
              to="/sitemap"
              className="hover:text-[#5CFCF9] transition"
            >
              Regulatory Information
            </NavLink>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="relative h-[50px] md:h-[100px]">
        <div className="absolute top-0 -translate-y-1/2 inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-slate-800/50 text-7xl md:text-9xl lg:text-[12rem] font-bold">
            Aynzenix
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* Helper sub-components */

const FooterColumn = ({ title, data, showAll, setShowAll }) => (
  <div>
    <h4 className="text-lg font-bold mb-6 relative">
      {title}
      <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#6834B9] to-[#5CFCF9]"></div>
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
              {(showAll ? section.links : section.links.slice(0, 7)).map(
                (link, i) => (
                  <li key={i}>
                    <NavLink
                      to={link.href}
                      className="text-slate-300 hover:text-[#5CFCF9] text-sm"
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
          const total = item.dropdown?.reduce(
            (sum, s) => sum + s.links.length,
            0
          );
          return total > 10 ? (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-1 text-[#5CFCF9] text-sm hover:underline"
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
    <h4 className="text-lg font-bold mb-6 relative">
      {title}
      <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#6834B9] to-[#5CFCF9]"></div>
    </h4>

    {data.map((item) => (
      <div key={item.label}>
        {item.dropdown?.map((section, i) => (
          <ul key={i} className="space-y-2 mb-4">
            {section.links.map((link, j) => (
              <li key={j}>
                <NavLink
                  to={link.href}
                  className="text-slate-300 hover:text-[#5CFCF9] text-sm"
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
