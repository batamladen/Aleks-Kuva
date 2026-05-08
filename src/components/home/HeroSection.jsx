import React from 'react';
import { motion } from 'framer-motion';

const CAT_IMAGE = 'https://media.base44.com/images/public/user_69fa1b7cd08e0e79287490da/dc8da80d3_image.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream px-4 pt-20 pb-4">
      {/* Decorative stars */}
      <div className="absolute top-24 left-8 text-mustard text-4xl font-bold select-none" aria-hidden="true">✦</div>
      <div className="absolute top-32 right-12 text-persimmon text-2xl font-bold select-none" aria-hidden="true">✦</div>
      <div className="absolute top-[55%] left-6 text-sage text-xl font-bold select-none" aria-hidden="true">✦</div>
      <div className="absolute top-[25%] right-8 text-mustard text-3xl font-bold select-none" aria-hidden="true">★</div>
      <div className="absolute bottom-[15%] right-10 text-persimmon/30 text-5xl font-bold select-none" aria-hidden="true">★</div>

      {/* Title + Cat container — overlapping layout */}
      <div className="relative flex flex-col items-center w-full max-w-xl md:max-w-3xl lg:max-w-4xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center z-10 relative"
        >
          <h1
            className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] leading-[0.85] text-sage tracking-tight"
            style={{ fontFamily: "'Bungee Shade', cursive" }}
          >
            Aleks
          </h1>
          <h1
            className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] leading-[0.85] text-sage tracking-tight"
            style={{ fontFamily: "'Bungee Shade', cursive" }}
          >
            Kuva
          </h1>
        </motion.div>

        {/* Cat illustration — overlaps title slightly from below */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] mt-[-3rem] sm:mt-[-4rem] md:mt-[-5rem]"
        >
          <img
            src={CAT_IMAGE}
            alt="Mačka kuvarica sa kuvarskom kapom"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Subtitle — floating to the right */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-[-2rem] sm:mt-[-1rem] self-end mr-6 md:mr-[18%] text-espresso/70 text-sm md:text-base font-body italic max-w-[200px] text-right z-10"
      >
        Kuvano sa ljubavlju<br />i mačjom snagom ✦
      </motion.p>

      {/* Left vertical text — desktop only */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-[22%] left-4 text-espresso/40 text-xs font-body tracking-widest z-10 hidden md:block"
        style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
      >
        Napravljeno sa ljubavlju i brašnom
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-auto pb-6 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-espresso/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-espresso/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}