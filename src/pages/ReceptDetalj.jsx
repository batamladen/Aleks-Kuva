import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { RECEPTI } from '../recipes/index.js';
import FooterSection from '../components/home/FooterSection';
import { ArrowLeft } from 'lucide-react';
import { SlikaKlikabilna } from '../components/recepti/SlikaLightbox.jsx';

export default function ReceptDetalj() {
  const { slug } = useParams();
  const recept = RECEPTI.find(r => r.slug === slug);

  if (!recept) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 pt-28">
        <h1 className="text-4xl text-espresso font-black mb-4" style={{ fontFamily: "'Bungee Shade', cursive" }}>
          Recept nije pronađen
        </h1>
        <Link to="/recepti" className="text-persimmon font-bold hover:underline">← Nazad na recepte</Link>
      </div>
    );
  }

  return (
    <div>
      <article className="min-h-screen bg-cream px-6 pt-28 pb-20">
        <div className="max-w-2xl mx-auto">

          {/* Nazad */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/recepti"
              className="inline-flex items-center gap-2 text-espresso/50 hover:text-persimmon font-body text-sm font-bold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Svi recepti
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tagovi + kružna slika jela */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-persimmon bg-persimmon/10 px-3 py-1 rounded-full">
                {recept.kategorija}
              </span>
              {recept.maminaKuhinja && (
                <span className="text-xs font-bold text-mustard bg-mustard/15 px-3 py-1 rounded-full">
                  👵 Mamina kuhinja
                </span>
              )}
            </div>

            {/* Kružna slika jela — gore desno */}
            {recept.slika && (
              <div className="relative flex-shrink-0">
                {/* Hand-drawn strelica + tekst — apsolutno pozicionirani levo od slike */}
                <div className="absolute right-full bottom-0 flex flex-col items-start pr-2" style={{ whiteSpace: 'nowrap' }}>
                  {/* SVG strelica koja ide gore-desno prema slici */}
                  <svg width="52" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 30 C12 22, 28 12, 48 6" stroke="#2D1B10" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                    <path d="M48 6 C44 9, 40 5, 43 13" stroke="#2D1B10" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                  </svg>
                  <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1.15rem', fontWeight: 700, color: '#2D1B10', lineHeight: 1.1 }}>
                    KLIKNI ME
                  </span>
                </div>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-mustard shadow-lg">
                  <SlikaKlikabilna
                    src={recept.slika}
                    alt={recept.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            </div>

            {/* Naslov */}
            <h1
              className="text-4xl md:text-6xl text-espresso font-black mb-4 leading-tight"
              style={{ fontFamily: "'Bungee Shade', cursive" }}
            >
              {recept.title}
            </h1>

            {/* Opis */}
            <p className="text-espresso/70 font-body text-lg leading-relaxed mb-8">
              {recept.opis}
            </p>

            {/* Info kartice */}
            <div className="grid grid-cols-3 gap-4 mb-10 p-5 bg-mustard/20 rounded-2xl border-2 border-mustard/30">
              <div className="text-center">
                <div className="text-2xl mb-1">⏱</div>
                <div className="text-xs text-espresso/50 font-body uppercase tracking-wide mb-1">Priprema</div>
                <div className="font-bold text-espresso font-body">{recept.vremePripreme}</div>
              </div>
              <div className="text-center border-x-2 border-mustard/30">
                <div className="text-2xl mb-1">🔥</div>
                <div className="text-xs text-espresso/50 font-body uppercase tracking-wide mb-1">Kuvanje</div>
                <div className="font-bold text-espresso font-body">{recept.vremeKuvanja}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🍽</div>
                <div className="text-xs text-espresso/50 font-body uppercase tracking-wide mb-1">Porcije</div>
                <div className="font-bold text-espresso font-body">{recept.porcije}</div>
              </div>
            </div>
          </motion.div>

          {/* Sastojci */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-10"
          >
            <h2
              className="text-2xl text-espresso font-black mb-5"
              style={{ fontFamily: "'Bungee Shade', cursive" }}
            >
              Sastojci
            </h2>
            <ul className="space-y-2 mb-6">
              {recept.sastojci.map((s, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-espresso/80">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-persimmon flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>

            {/* Slika svih sastojaka */}
            {recept.slikaSastojaka && (
              <div className="rounded-2xl overflow-hidden border-2 border-espresso/10 shadow-md">
                <img
                  src={recept.slikaSastojaka}
                  alt="Svi sastojci"
                  className="w-full h-auto object-cover"
                />
                <div className="bg-mustard/10 px-4 py-2 text-xs text-espresso/50 font-body italic text-center">
                  Svi potrebni sastojci
                </div>
              </div>
            )}
          </motion.div>

          {/* Koraci */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-10"
          >
            <h2
              className="text-2xl text-espresso font-black mb-5"
              style={{ fontFamily: "'Bungee Shade', cursive" }}
            >
              Priprema
            </h2>
            <ol className="space-y-5">
              {recept.koraci.map((korak, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-persimmon text-cream text-sm font-bold flex items-center justify-center"
                  >
                    {i + 1}
                  </span>
                  <div className="font-body text-espresso/80 leading-relaxed pt-1">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <span>{children}</span>,
                        strong: ({ children }) => <strong className="text-espresso font-bold">{children}</strong>,
                        em: ({ children }) => <em className="italic">{children}</em>,
                      }}
                    >
                      {korak}
                    </ReactMarkdown>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Saveti */}
          {recept.saveti && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-5 bg-sage/10 border-l-4 border-sage rounded-r-2xl"
            >
              <div className="text-lg mb-1">💡</div>
              <p className="font-body text-espresso/70 italic text-sm leading-relaxed">
                {recept.saveti}
              </p>
            </motion.div>
          )}

        </div>
      </article>
      <FooterSection />
    </div>
  );
}