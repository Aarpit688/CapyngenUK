import { useEffect, useState, useRef } from "react";
import { assets, navItems } from "../assets/assets";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import ScrollProgress from "./ScrollProgress";

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
  { icon: FaXTwitter, href: "https://x.com/CapyngenIndia", label: "Twitter" },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@Capyngen-pvt-ltd",
    label: "YouTube",
  },
];

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const lastScrollY = useRef(0);

  // Handle navigation (prevents page reload when clicking current route)
  const handleSameLinkClick = (to) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(to);
    }
  };

  // Scroll show/hide logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(
        currentScrollY < lastScrollY.current || currentScrollY < 100
      );
      setScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [mobileMenuOpen]);

  const shouldBeDark = scrolled || isHovered;
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const handleDropdownClick = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  return (
    <>
      {/* Fixed progress bar - always rendered, visibility controlled by navbar state */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
          showNavbar ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <ScrollProgress fixed={true} />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          shouldBeDark
            ? "bg-slate-900/95 backdrop-blur-lg shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[90vw] mx-auto px-0 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <NavLink
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleSameLinkClick("/");
              }}
              className="shrink-0 z-50 transition-transform hover:scale-105"
            >
              <img
                src={assets.capyngenLogo}
                className="w-26 md:w-36"
                alt="Capyngen Logo"
              />
            </NavLink>

            {/* Desktop Menu */}
            <div
              className="hidden lg:flex items-center space-x-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {navItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <NavLink
                      to={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSameLinkClick(item.href);
                      }}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                        shouldBeDark
                          ? "text-slate-100 hover:text-white hover:bg-slate-800/60"
                          : "text-white hover:text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          activeDropdown === idx ? "rotate-180" : ""
                        }`}
                      />
                    </NavLink>
                  ) : (
                    <NavLink
                      to={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSameLinkClick(item.href);
                      }}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        shouldBeDark
                          ? "text-slate-100 hover:text-white hover:bg-slate-800/60"
                          : "text-white hover:text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </NavLink>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 right-0 transition-all duration-200 pt-2 ${
                        activeDropdown === idx
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <div className="fixed inset-x-0 top-16 lg:top-20 bg-slate-900/98 backdrop-blur-lg border-b border-slate-700/30 shadow-2xl px-2 md:px-8 py-6 max-w-full">
                        <div className="max-w-7xl mx-auto">
                          {item.dropdown.map((section, sectionIdx) => {
                            const cards = section.links || [];
                            const columns =
                              cards.length <= 2
                                ? `grid-cols-${cards.length}`
                                : cards.length === 3
                                ? "grid-cols-3"
                                : cards.length === 4
                                ? "grid-cols-2 md:grid-cols-4"
                                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
                            return (
                              <div
                                key={sectionIdx}
                                className={`grid ${columns} gap-4 md:gap-8 w-full`}
                                style={{
                                  maxWidth: "100vw",
                                  overflow: "hidden",
                                }}
                              >
                                {cards.map((link, linkIdx) => (
                                  <div
                                    key={linkIdx}
                                    className="bg-slate-800 hover:bg-black transition-all rounded-lg p-4 flex flex-col justify-between shadow-lg hover:shadow-xl duration-300 cursor-pointer max-w-72"
                                    onClick={() => {
                                      handleSameLinkClick(link.href);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    <div>
                                      <h3 className="text-base font-semibold text-white mb-2 truncate">
                                        {link.label}
                                      </h3>
                                      <p className="text-xs text-slate-300 mb-4 line-clamp-3 min-h-[2.4em]">
                                        {link.description}
                                      </p>
                                    </div>
                                    {link.imageSrc && (
                                      <img
                                        src={link.imageSrc}
                                        alt={link.label}
                                        className="w-full h-20 sm:h-28 object-cover rounded-md mt-auto"
                                      />
                                    )}
                                  </div>
                                ))}
                              </div>
                            );
                          })}
                          {/* Footer Section */}
                          <div className="pt-6">
                            <hr className="border-t border-slate-700 my-4" />
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-2 py-2">
                              {/* Social Icons */}
                              <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                  <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 hover:bg-black p-3 rounded-full transition shadow-sm flex items-center group"
                                  >
                                    <social.icon className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:scale-110 transition-transform duration-200" />
                                  </a>
                                ))}
                              </div>
                              {/* Docs Link */}
                              <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                                <div>
                                  <span className="font-medium text-slate-100">
                                    Follow the market News and Life
                                  </span>
                                  <span className="block text-slate-400 text-sm md:inline px-1">
                                    of the company in the social or business
                                    media
                                  </span>
                                </div>
                                <a
                                  href="/products/documentation"
                                  className="mt-2 md:mt-0 bg-white/10 hover:bg-slate-200/80 text-slate-800 font-semibold px-4 py-2 rounded-lg shadow transition"
                                >
                                  Products Documentation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                shouldBeDark ? "hover:bg-slate-800/60" : "hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X
                  size={24}
                  className={shouldBeDark ? "text-slate-100" : "text-white"}
                />
              ) : (
                <Menu
                  size={24}
                  className={shouldBeDark ? "text-slate-100" : "text-white"}
                />
              )}
            </button>
          </div>
          {/* Scroll Progress Bar - inside navbar */}
          <ScrollProgress fixed={false} />
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-900 h-full overflow-y-auto">
          <div className="px-4 py-6 space-y-4 mt-16">
            {navItems.map((item, idx) => (
              <div key={idx}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(idx)}
                      className="w-full flex items-center justify-between py-3 text-left text-slate-100 hover:text-white transition-colors"
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          activeDropdown === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === idx && (
                      <div className="mt-2 pl-4 space-y-4">
                        {item.dropdown.map((section, secIdx) => (
                          <div key={secIdx}>
                            {section.title && (
                              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                {section.title}
                              </h4>
                            )}
                            <ul className="space-y-2 mb-4">
                              {section.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                  <NavLink
                                    to={link.href}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleSameLinkClick(link.href);
                                      setMobileMenuOpen(false);
                                    }}
                                    className="text-sm text-slate-300 hover:text-white transition-colors block py-1"
                                  >
                                    {link.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSameLinkClick(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className="block py-3 text-slate-100 hover:text-white font-medium transition-colors"
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
