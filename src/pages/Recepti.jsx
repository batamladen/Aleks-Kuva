import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RECEPTI } from '../recipes/index.js';
import FooterSection from '../components/home/FooterSection';
import SastojciFilter from '../components/recepti/SastojciFilter';
import { Salad } from 'lucide-react';

const KATEGORIJE = ['Sve', 'Glavno jelo', 'Dezert', 'Doručak', 'Predjelo', 'Supa', 'Salata'];

export default function Recepti() {
  const [aktivnaKategorija, setAktivnaKategorija] = useState('Sve');
  const [filterSastojciOtvoren, setFilterSastojciOtvoren] = useState(false);
  const [receptiPoSastojcima, setReceptiPoSastojcima] = useState(null);

  const bazaRecepata = receptiPoSastojcima !== null ? receptiPoSastojcima : RECEPTI;

  const filtrirani = aktivnaKategorija === 'Sve'
    ? bazaRecepata
    : bazaRecepata.filter(r => r.kategorija === aktivnaKategorija);

  return (
    <div>
      <section className="min-h-screen bg-cream px-6 pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Naslov */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl text-espresso font-black mb-4 text-center"
            style={{ fontFamily: "'Bungee Shade', cursive" }}
          >
            Recepti
          </motion.h1>

          {/* Filter kategorije + po sastojcima */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {KATEGORIJE.map(kat => (
              <button
                key={kat}
                onClick={() => { setAktivnaKategorija(kat); setReceptiPoSastojcima(null); }}
                className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${
                  aktivnaKategorija === kat && receptiPoSastojcima === null
                    ? 'bg-persimmon text-cream border-persimmon'
                    : 'bg-transparent text-espresso border-espresso/20 hover:border-persimmon/50'
                }`}
              >
                {kat}
              </button>
            ))}

            {/* Separator */}
            <span className="w-px h-8 bg-espresso/15 self-center hidden sm:block" />

            {/* Dugme po sastojcima */}
            <button
              onClick={() => setFilterSastojciOtvoren(true)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${
                receptiPoSastojcima !== null
                  ? 'bg-sage text-cream border-sage'
                  : 'bg-transparent text-espresso border-espresso/20 hover:border-sage/60'
              }`}
            >
              <Salad className="w-4 h-4" />
              Po sastojcima
              {receptiPoSastojcima !== null && (
                <span className="bg-cream/30 text-cream text-xs px-1.5 py-0.5 rounded-full">
                  {receptiPoSastojcima.length}
                </span>
              )}
            </button>
          </div>

          {/* Baner ako je aktivan filter po sastojcima */}
          {receptiPoSastojcima !== null && (
            <div className="flex items-center justify-between bg-sage/10 border border-sage/20 rounded-xl px-4 py-3 mb-6 text-sm font-body">
              <span className="text-sage font-bold">
                🥬 Filter po sastojcima aktivan — {receptiPoSastojcima.length} {receptiPoSastojcima.length === 1 ? 'recept' : 'recepata'}
              </span>
              <button
                onClick={() => setReceptiPoSastojcima(null)}
                className="text-xs text-espresso/50 hover:text-persimmon font-bold transition-colors"
              >
                Poništi ×
              </button>
            </div>
          )}

          {/* Lista recepata */}
          {filtrirani.length === 0 ? (
            <p className="text-center text-espresso/50 font-body text-lg">
              Nema recepata u ovoj kategoriji još uvek. ✦
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtrirani.map((recept, i) => (
                <motion.div
                  key={recept.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    to={`/recepti/${recept.slug}`}
                    className="block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group relative aspect-[4/3]"
                  >
                    {/* Slika pozadina */}
                    {recept.slika ? (
                      <img
                        src={recept.slika}
                        alt={recept.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-mustard/30 flex items-center justify-center text-6xl">
                        🍳
                      </div>
                    )}

                    {/* Tamni gradijent odozdo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent" />

                    {/* Sadrzaj na dnu */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      {/* Kategorija */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-mustard">
                          {recept.kategorija}
                        </span>
                        {recept.maminaKuhinja && (
                          <span className="text-xs text-cream/70">· 👵 Mamina</span>
                        )}
                      </div>

                      {/* Naslov */}
                      <h2
                        className="text-xl md:text-2xl text-cream font-black mb-3 leading-tight"
                        style={{ fontFamily: "'Bungee Shade', cursive" }}
                      >
                        {recept.title}
                      </h2>

                      {/* Statistika */}
                      <div className="flex gap-4 text-xs text-cream/70 font-body">
                        <span>⏱ {recept.vremePripreme}</span>
                        <span>🔥 {recept.vremeKuvanja}</span>
                        <span>🍽 {recept.porcije} por.</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <FooterSection />

      {/* Modal za filter po sastojcima */}
      <AnimatePresence>
        {filterSastojciOtvoren && (
          <SastojciFilter
            onClose={() => setFilterSastojciOtvoren(false)}
            onFilter={(rezultati) => {
              setReceptiPoSastojcima(rezultati);
              setAktivnaKategorija('Sve');
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}