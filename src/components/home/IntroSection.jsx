import React from 'react';
import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section className="bg-mustard px-6 py-20 md:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-8 right-8 text-espresso/10 text-6xl font-bold select-none" aria-hidden="true">✦</div>
      <div className="absolute bottom-12 left-6 text-cream/20 text-4xl font-bold select-none" aria-hidden="true">★</div>

      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl text-espresso font-black leading-tight mb-6"
          style={{ fontFamily: "'Bungee Shade', cursive" }}
        >
          Dobro došli u<br />moju kuhinju
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-espresso/80 text-lg md:text-xl font-body leading-relaxed mb-8"
        >
          Ovde kuvam ono što volim — od maminih recepata koji mirišu na detinjstvo,
          do mojih novih eksperimenata. Svaki recept je priča, a svaki zalogaj uspomena.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/recepti"
            className="inline-block bg-persimmon text-cream font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg focus:outline-none focus:ring-2 focus:ring-espresso focus:ring-offset-2"
          >
            Pogledaj recepte
          </a>
          <a
            href="/iznenadi-me"
            className="inline-block bg-cream text-espresso font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg border-3 border-espresso/20 focus:outline-none focus:ring-2 focus:ring-espresso focus:ring-offset-2"
          >
            Iznenadi me ✦
          </a>
        </motion.div>
      </div>
    </section>
  );
}