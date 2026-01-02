import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoimg from "/logo.jpg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "My เจอนี่" },
  { href: "/about-odos", label: "About ODOS" },
  { href: "/gallery", label: "Gallery" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled ? "bg-white shadow-md" : "bg-white/98 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - Simplified */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="h-12 w-12 rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-200"
              style={{
                background:
                  "linear-gradient(to bottom right, rgb(253, 232, 243), rgb(219, 234, 254))",
              }}
            >
              <div className="h-full w-full rounded-full overflow-hidden bg-white p-0.5">
                <img
                  src={logoimg}
                  alt="JaoPrim Blog"
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-slate-800">JaoPrim</h1>
              <p className="text-xs text-slate-500 -mt-0.5">Journey Blog</p>
            </div>
          </Link>

          {/* Desktop Navigation - Clean minimal style */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Nav Links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative px-5 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                      isActive
                        ? "text-pink-600 bg-pink-50"
                        : "text-slate-700 hover:text-pink-600 hover:bg-pink-50/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Contact Button - Minimal */}
            <div className="relative">
              <button
                onClick={() => setContactOpen(!contactOpen)}
                className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
                style={{
                  background:
                    "linear-gradient(to right, rgb(236, 72, 153), rgb(251, 113, 133))",
                }}
              >
                <svg
                  className="w-4 h-4"
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
                <span>Contact</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
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

              {/* Contact Dropdown - Cleaner */}
              {contactOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-fadeIn">
                  <div
                    className="px-4 py-3 border-b border-slate-100"
                    style={{
                      background:
                        "linear-gradient(to right, rgb(253, 242, 248), rgb(254, 242, 242))",
                    }}
                  >
                    <h3 className="text-sm font-semibold text-slate-800">
                      Get in touch
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Follow us on Instagram
                    </p>
                  </div>

                  <div className="p-2">
                    <a
                      href="https://www.instagram.com/dekodosbeijing.chn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-50 transition-all"
                      onClick={() => setContactOpen(false)}
                    >
                      <div className="shrink-0 w-11 h-11 bg-pink-100 rounded-full flex items-center justify-center text-lg">
                        📷
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-800 text-sm">
                          ODOS⭐️
                        </p>
                        <p className="text-xs text-slate-500">
                          @dekodosbeijing.chn
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://www.instagram.com/pxriincezs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-50 transition-all"
                      onClick={() => setContactOpen(false)}
                    >
                      <div className="shrink-0 w-11 h-11 bg-pink-100 rounded-full flex items-center justify-center text-lg">
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
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-50 transition-all"
                      onClick={() => setContactOpen(false)}
                    >
                      <div className="shrink-0 w-11 h-11 bg-pink-100 rounded-full flex items-center justify-center text-lg">
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

          {/* Mobile Menu Button - Simpler */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-lg hover:bg-pink-50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-slate-700 transition-all duration-200 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-slate-700 transition-all duration-200 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-slate-700 transition-all duration-200 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Cleaner */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-5" : "max-h-0"
          }`}
        >
          <div className="pt-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive ? "text-white" : "text-slate-700 hover:bg-pink-50"
                  }`}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(to right, rgb(236, 72, 153), rgb(251, 113, 133))",
                        }
                      : {}
                  }
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 px-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 px-2">
                Contact
              </p>
              <div className="space-y-2">
                <a
                  href="https://www.instagram.com/dekodosbeijing.chn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:from-pink-100 hover:to-rose-100 transition-all"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(253, 242, 248), rgb(254, 242, 242))",
                  }}
                >
                  <span className="text-xl">📷</span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">
                      ODOS⭐️
                    </p>
                    <p className="text-xs text-slate-500">
                      @dekodosbeijing.chn
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/pxriincezs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:from-pink-100 hover:to-rose-100 transition-all"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(253, 242, 248), rgb(254, 242, 242))",
                  }}
                >
                  <span className="text-xl">📷</span>
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
                  className="flex items-center gap-3 p-3 rounded-xl hover:from-pink-100 hover:to-rose-100 transition-all"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(253, 242, 248), rgb(254, 242, 242))",
                  }}
                >
                  <span className="text-xl">📷</span>
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
