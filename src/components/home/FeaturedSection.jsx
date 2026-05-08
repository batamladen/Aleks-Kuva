import React from 'react';
import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    title: 'Recepti',
    description: 'Moderna jela, klasici, i ponešto neočekivano.',
    icon: '🍳',
    link: '/recepti',
  },
  {
    title: 'Mamina kuhinja',
    description: 'Recepti koji se prenose s kolena na koleno.',
    icon: '👵',
    link: '/mamina-kuhinja',
  },
  {
    title: 'Iznenadi me',
    description: 'Nemoj da biraš — pusti mene da ti preporučim!',
    icon: '🎲',
    link: '/iznenadi-me',
  },
];

export default function FeaturedSection() {
  return (
    <section className="bg-cream px-6 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-6 left-10 text-persimmon/15 text-8xl font-bold select-none" aria-hidden="true">✦</div>

      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl text-espresso font-black text-center mb-14"
          style={{ fontFamily: "'Bungee Shade', cursive" }}
        >
          Šta te zanima?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={cat.link}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, rotate: 0 }}
              className="block bg-background rounded-2xl p-8 border-[3px] border-espresso/10 shadow-md hover:shadow-xl transition-shadow text-center group"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3
                className="text-xl font-black text-espresso mb-2"
                style={{ fontFamily: "'Bungee Shade', cursive" }}
              >
                {cat.title}
              </h3>
              <p className="text-espresso/60 font-body leading-relaxed text-sm">
                {cat.description}
              </p>
              <div className="mt-4 text-persimmon font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Istraži →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}