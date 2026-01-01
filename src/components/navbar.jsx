import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "My เจอนี่" },
  { href: "/about-odos", label: "About ODOS" },
  { href: "/gallery", label: "Gallery" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-xl bg-white/70 border-b border-rose-100/60 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.35)]">
      <span
        className="pointer-events-none absolute -left-8 top-2 h-16 w-16 rounded-full bg-rose-200/70 blur-3xl"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute right-4 -bottom-6 h-16 w-24 rounded-full bg-amber-200/70 blur-3xl"
        aria-hidden="true"
      />
      <div className="max-w-7xl px-6 sm:px-12 lg:px-16">
        <div className="flex h-16 mx-auto items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-3 text-slate-900 shrink-0"
          >
            <div className="h-12 w-12 rounded-2xl overflow-hidden ring-2 ring-white/80 shadow-lg shadow-rose-200/60 bg-rose-50">
              <img
                src="/logo.svg"
                alt="Jaoprim logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-900">
                Jaoprim Blog
              </p>
              <p className="text-xs text-slate-500">Little joys, shared</p>
            </div>
          </Link>

          <div className="flex items-center gap-3 flex-1 justify-end ml-auto">
            <div className="hidden md:flex items-center gap-3 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3.5 py-2.5 rounded-full border border-rose-100/0 hover:border-rose-200/80 hover:text-slate-900 hover:-translate-y-0.5 hover:shadow-sm hover:bg-white transition-all duration-150"
                >
                  {link.label}
                </Link>
              ))}
              <div className="relative">
                <button
                  onClick={() => setContactOpen(!contactOpen)}
                  className="px-3.5 py-2.5 rounded-full border border-rose-100/0 hover:border-rose-200/80 hover:text-slate-900 hover:-translate-y-0.5 hover:shadow-sm hover:bg-white transition-all duration-150"
                >
                  Contact
                </button>
                {contactOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-rose-100 overflow-hidden z-50">
                    <a
                      href="https://instagram.com/person1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-rose-50 transition"
                    >
                      <span className="text-xl">📷</span>
                      <div>
                        <div className="text-sm font-semibold text-slate-800">Person 1</div>
                        <div className="text-xs text-slate-500">@person1</div>
                      </div>
                    </a>
                    <a
                      href="https://instagram.com/person2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-rose-50 transition"
                    >
                      <span className="text-xl">📷</span>
                      <div>
                        <div className="text-sm font-semibold text-slate-800">Person 2</div>
                        <div className="text-xs text-slate-500">@person2</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-slate-800 hover:bg-white transition"
            >
              <span className="sr-only">Open main menu</span>
              <span className="relative block h-5 w-6">
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-200 ${
                    isOpen ? "translate-y-2 rotate-45" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-current transition-opacity duration-200 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-200 ${
                    isOpen ? "-translate-y-2 -rotate-45" : "translate-y-2"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "grid-rows-[1fr] pt-2 pb-4" : "grid-rows-[0fr]"
          } grid overflow-hidden transition-[grid-template-rows] duration-200 md:hidden`}
        >
          <div className="overflow-hidden rounded-2xl p-3 border border-rose-100/80 bg-white/90 backdrop-blur shadow-lg shadow-rose-200/50">
            <div className="flex flex-col gap-1 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-10 py-8 rounded-xl hover:bg-rose-50 hover:text-slate-900 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => setContactOpen(!contactOpen)}
                className="px-10 py-8 rounded-xl hover:bg-rose-50 hover:text-slate-900 transition text-left"
              >
                Contact {contactOpen ? '▼' : '▶'}
              </button>
              {contactOpen && (
                <div className="ml-4 border-l-2 border-rose-200 pl-4">
                  <a
                    href="https://instagram.com/person1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 rounded-xl hover:bg-rose-50 transition"
                  >
                    <span className="text-xl">📷</span>
                    <div>
                      <div className="text-sm font-semibold">Person 1</div>
                      <div className="text-xs text-slate-500">@person1</div>
                    </div>
                  </a>
                  <a
                    href="https://instagram.com/person2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 rounded-xl hover:bg-rose-50 transition"
                  >
                    <span className="text-xl">📷</span>
                    <div>
                      <div className="text-sm font-semibold">Person 2</div>
                      <div className="text-xs text-slate-500">@person2</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
