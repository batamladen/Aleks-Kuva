import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Početna', path: '/' },
  { label: 'Recepti', path: '/recepti' },
  { label: 'Iznenadi me', path: '/iznenadi-me' },
  { label: 'Mamina kuhinja', path: '/mamina-kuhinja' },
  { label: 'O meni', path: '/o-meni' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Fixed header bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-5 py-4 flex items-center justify-between">
        <Link to="/" className="text-espresso font-bold text-lg tracking-wide" style={{ fontFamily: "'Bungee Shade', cursive" }}>
          AK
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-persimmon text-cream hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-persimmon focus:ring-offset-2"
          aria-label="Otvori meni"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Full screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 44px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-mustard flex flex-col"
          >
            {/* Close button */}
            <div className="px-5 py-4 flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-espresso text-cream hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-espresso"
                aria-label="Zatvori meni"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {NAV_LINKS.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`text-3xl md:text-5xl font-bold text-espresso transition-all relative inline-block ${
                        isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                      }`}
                      style={{ fontFamily: "'Bungee Shade', cursive" }}
                    >
                      {link.label}
                      {isActive && (
                        <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                          <path
                            d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5"
                            fill="none"
                            stroke="#E94E1B"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="px-6 py-8 text-center">
              <p className="text-espresso/60 text-sm font-body">
                Napravljeno sa ljubavlju i brašnom ✦
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}