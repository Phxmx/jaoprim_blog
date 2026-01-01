import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "My เจอนี่" },
  { href: "/about-odos", label: "About ODOS" },
  { href: "/gallery", label: "Gallery" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-28">
          {/* Logo Section - Left Side with generous spacing */}
          <Link to="/" className="flex items-center gap-6 group pl-12">
            <div className="relative">
              <div className="h-20 w-20 rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-blue-100 p-1 shadow-md group-hover:shadow-xl transition-all duration-300">
                <div className="h-full w-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/logo.jpg"
                    alt="JaoPrim Blog"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-pink-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                JaoPrim
              </h1>
              <p className="text-xs text-slate-500 font-medium">Journey Blog</p>
            </div>
          </Link>

          {/* Desktop Navigation - Center/Right */}
          <div className="hidden lg:flex items-center gap-10 pr-6">
            {/* Nav Links */}
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative px-8 py-3.5 text-base font-semibold transition-all duration-200 group ${
                      isActive
                        ? "text-pink-600"
                        : "text-slate-700 hover:text-pink-600"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span
                      style={{ bottom: "-8px" }}
                      className={`absolute left-0 h-1 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Contact Button */}
            <div className="relative">
              <button
                onClick={() => setContactOpen(!contactOpen)}
                className="flex items-center gap-3 px-8 py-3.5 bg-white text-slate-800 border-2 border-rose-100 rounded-full hover:bg-rose-50 hover:border-rose-200 transition-all duration-200"
              >
                <svg
                  className="w-4 h-4 text-rose-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-base font-semibold">Contact</span>
                <svg
                  className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${
                    contactOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Contact Dropdown */}
              {contactOpen && (
                <div className="absolute right-0 mt-4 w-80 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                  <div className="px-4 py-3 border-b border-rose-50 bg-rose-50/30">
                    <h3 className="text-sm font-semibold text-slate-800">
                      Get in touch
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Follow us on Instagram
                    </p>
                  </div>

                  <div className="p-2">
                    <a
                      href="https://www.instagram.com/pxriincezs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-rose-50 transition-all"
                      onClick={() => setContactOpen(false)}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-xl">
                        📷
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-800 text-sm">
                          Jaoying 💖
                        </p>
                        <p className="text-xs text-slate-500">@pxriincezs</p>
                      </div>
                    </a>

                    <a
                      href="https://www.instagram.com/primary_fond/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-rose-50 transition-all"
                      onClick={() => setContactOpen(false)}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-xl">
                        📷
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-800 text-sm">
                          Prim ✨
                        </p>
                        <p className="text-xs text-slate-500">@primary_fond</p>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-slate-700 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-slate-700 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-slate-700 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[600px] pb-6" : "max-h-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-8 py-4 mb-2 rounded-xl font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white"
                      : "text-slate-700 hover:bg-pink-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 px-6">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-3">
                Contact
              </p>
              <div className="space-y-2">
                <a
                  href="https://www.instagram.com/pxriincezs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all"
                >
                  <span className="text-2xl">📷</span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">
                      Jaoying 💖
                    </p>
                    <p className="text-xs text-slate-500">@pxriincezs</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/primary_fond/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all"
                >
                  <span className="text-2xl">📷</span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">
                      Prim ✨
                    </p>
                    <p className="text-xs text-slate-500">@primary_fond</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
