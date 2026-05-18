import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export function SlikaKlikabilna({ src, alt, className }) {
  const [otvoren, setOtvoren] = useState(false);

  return (
    <>
      <div className="cursor-zoom-in" onClick={() => setOtvoren(true)}>
        <img src={src} alt={alt} className={className} />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {otvoren && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-espresso/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setOtvoren(false)}
          >
            <button
              onClick={() => setOtvoren(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-cream/20 hover:bg-cream/30 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-cream" />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}