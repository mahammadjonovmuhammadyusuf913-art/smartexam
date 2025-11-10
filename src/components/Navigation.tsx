'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-black tracking-tight">
            SMART<span className="text-green-500">EXAM</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#exam-types" className="text-gray-300 hover:text-white transition-colors">
              Exam Types
            </a>
            <a href="#stats" className="text-gray-300 hover:text-white transition-colors">
              Stats
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <button className="px-6 py-2 bg-green-500 text-black font-bold hover:bg-green-400 transition-all">
              START EXAM
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white z-50 relative"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-300 delay-100 ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a
            href="#features"
            onClick={closeMobileMenu}
            className="text-3xl font-bold text-white hover:text-green-500 transition-colors"
          >
            Features
          </a>
          <a
            href="#exam-types"
            onClick={closeMobileMenu}
            className="text-3xl font-bold text-white hover:text-green-500 transition-colors"
          >
            Exam Types
          </a>
          <a
            href="#stats"
            onClick={closeMobileMenu}
            className="text-3xl font-bold text-white hover:text-green-500 transition-colors"
          >
            Stats
          </a>
          <a
            href="#pricing"
            onClick={closeMobileMenu}
            className="text-3xl font-bold text-white hover:text-green-500 transition-colors"
          >
            Pricing
          </a>
          <button
            onClick={closeMobileMenu}
            className="mt-8 px-12 py-4 bg-green-500 text-black font-bold text-xl hover:bg-green-400 transition-all"
          >
            START EXAM
          </button>
        </div>
      </div>
    </>
  );
}
