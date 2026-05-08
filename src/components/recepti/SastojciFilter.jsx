import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { X, Search, ChefHat } from 'lucide-react';
import { RECEPTI } from '../../recipes/index.js';

// ─── Hardkodovana lista namirnica (abecedni red) ───────────────────────────
// Kada pišeš recept, koristi TAČNO ove nazive u polju `sastojci`
// npr. "2 jaja", "300g brašna", "1 glavica belog luka"
const SVE_NAMIRNICE = [
  'bademi', 'beli luk', 'biber', 'biljno ulje', 'brašno',
  'brokoli', 'bujon',
  'celer', 'crni luk', 'cvekla',
  'čokolada',
  'dimljena slanina', 'džem',
  'đumbir',
  'fasovan paradajz', 'feta sir',
  'gazirani mineral', 'grašak',
  'hleb',
  'jabuka', 'jaja', 'jogurt',
  'kajmak', 'kakao', 'kapari', 'karanfilić', 'karfiol', 'kefir', 'kesten',
  'kim', 'kisela pavlaka', 'kiseli kupus', 'komorač', 'krastavac', 'krompir',
  'kukuruz', 'kurkuma',
  'lešnik', 'limun', 'luk',
  'majonez', 'maline', 'margarin', 'masline', 'maslinovo ulje', 'maslac',
  'med', 'meso (junetina)', 'meso (piletina)', 'meso (svinjetina)',
  'milk', 'mleveno meso', 'mlevena paprika', 'mozzarella',
  'muskat',
  'ocat', 'oraси', 'orašasto ulje',
  'paprika', 'paradajz', 'paradajz pire', 'parmezan', 'pasulj',
  'pasta', 'pavlaka', 'pečurke', 'pirinač', 'portokala',
  'prezle', 'proja', 'puter',
  'rendani sir', 'ren', 'riža',
  'šargarepa', 'šećer', 'šećer u prahu', 'špinat',
  'sir', 'slanina', 'slatka pavlaka', 'so', 'soja sos', 'spanać',
  'suncokretovo ulje', 'suve šljive', 'suve kajsije',
  'tikvice', 'timijan',
  'ulje', 'ulje od susama',
  'vanila', 'vegeta',
  'zobene pahuljice', 'zucchini',
  'žumance',
].sort((a, b) => a.localeCompare(b, 'sr'));

// Proverava da li recept sadrži traženu namirnicu
function receptImaSastojak(recept, trazena) {
  return recept.sastojci.some(s => s.toLowerCase().includes(trazena.toLowerCase()));
}

export default function SastojciFilter({ onClose, onFilter }) {
  const [pretraga, setPretraga] = useState('');
  const [odabrani, setOdabrani] = useState([]);

  const sviSastojci = SVE_NAMIRNICE;

  const filtrirani = pretraga.trim()
    ? sviSastojci.filter(s => s.toLowerCase().includes(pretraga.toLowerCase().trim()))
    : sviSastojci;

  // Koji recepti imaju bar neke od odabranih sastojaka
  const poklapajuciRecepti = useMemo(() => {
    if (odabrani.length === 0) return null;
    return RECEPTI.filter(recept =>
      odabrani.some(s => receptImaSastojak(recept, s))
    ).sort((a, b) => {
      const brA = odabrani.filter(s => receptImaSastojak(a, s)).length;
      const brB = odabrani.filter(s => receptImaSastojak(b, s)).length;
      return brB - brA;
    });
  }, [odabrani]);

  const toggle = (s) => {
    setOdabrani(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );
  };

  const primeniFiltter = () => {
    onFilter(poklapajuciRecepti || RECEPTI);
    onClose();
  };

  const resetuj = () => {
    setOdabrani([]);
    onFilter(null);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-espresso/60 backdrop-blur-sm flex items-end md:items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-cream w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-2 border-espresso/10 max-h-[85vh] flex flex-col"
      >
        {/* Zaglavlje */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-espresso/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-persimmon rounded-full flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-cream" />
            </div>
            <div>
              <h2 className="text-lg font-black text-espresso" style={{ fontFamily: "'Bungee Shade', cursive" }}>
                Šta imaš kod kuće?
              </h2>
              <p className="text-xs text-espresso/50 font-body">Čekiraj sastojke, naći ćemo recept ✦</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-espresso/10 flex items-center justify-center hover:bg-espresso/20 transition-colors">
            <X className="w-4 h-4 text-espresso" />
          </button>
        </div>

        {/* Pretraga */}
        <div className="px-6 py-3 border-b border-espresso/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-espresso/30" />
            <input
              type="text"
              placeholder="Traži sastojak..."
              value={pretraga}
              onChange={e => setPretraga(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border-2 border-espresso/10 focus:border-persimmon/50 outline-none font-body text-sm text-espresso placeholder:text-espresso/30 transition-colors"
            />
          </div>
        </div>

        {/* Odabrani tagovi */}
        {odabrani.length > 0 && (
          <div className="px-6 py-3 bg-persimmon/5 border-b border-espresso/10">
            <div className="flex flex-wrap gap-1.5">
              {odabrani.map(s => (
                <button
                  key={s}
                  onClick={() => toggle(s)}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-persimmon text-cream text-xs font-bold rounded-full"
                >
                  {s} <X className="w-3 h-3" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lista sastojaka grupisana po slovima */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {filtrirani.length === 0 ? (
            <p className="text-espresso/40 font-body text-sm">Nema rezultata za "{pretraga}"</p>
          ) : pretraga.trim() ? (
            // Ako pretražuje — flat lista bez grupiranja
            <div className="flex flex-wrap gap-2">
              {filtrirani.map(s => (
                <button
                  key={s}
                  onClick={() => toggle(s)}
                  className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-all ${
                    odabrani.includes(s)
                      ? 'bg-persimmon text-cream border-persimmon'
                      : 'bg-white text-espresso/70 border-espresso/15 hover:border-persimmon/40'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          ) : (
            // Bez pretrage — grupisano po prvom slovu
            (() => {
              const grupe = {};
              filtrirani.forEach(s => {
                const slovo = s[0].toUpperCase();
                if (!grupe[slovo]) grupe[slovo] = [];
                grupe[slovo].push(s);
              });
              return Object.entries(grupe).map(([slovo, stavke]) => (
                <div key={slovo}>
                  <div className="text-xs font-black text-espresso/30 uppercase tracking-widest mb-2 font-body">
                    {slovo}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stavke.map(s => (
                      <button
                        key={s}
                        onClick={() => toggle(s)}
                        className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-all ${
                          odabrani.includes(s)
                            ? 'bg-persimmon text-cream border-persimmon'
                            : 'bg-white text-espresso/70 border-espresso/15 hover:border-persimmon/40'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ));
            })()
          )}
        </div>

        {/* Rezultati i dugme */}
        <div className="px-6 py-4 border-t border-espresso/10 bg-white/50">
          {odabrani.length > 0 && poklapajuciRecepti !== null && (
            <p className="text-xs text-espresso/50 font-body mb-3 text-center">
              {poklapajuciRecepti.length > 0
                ? `Pronađeno ${poklapajuciRecepti.length} recept${poklapajuciRecepti.length === 1 ? '' : poklapajuciRecepti.length < 5 ? 'a' : 'a'} koji koriste ove sastojke`
                : 'Nema recepata sa ovim sastojcima još uvek ✦'}
            </p>
          )}
          <div className="flex gap-3">
            {odabrani.length > 0 && (
              <button
                onClick={resetuj}
                className="flex-1 py-3 rounded-full border-2 border-espresso/20 text-espresso/60 font-bold text-sm hover:border-espresso/40 transition-colors"
              >
                Poništi
              </button>
            )}
            <button
              onClick={primeniFiltter}
              disabled={odabrani.length === 0}
              className={`flex-1 py-3 rounded-full font-bold text-sm transition-all ${
                odabrani.length > 0
                  ? 'bg-persimmon text-cream hover:scale-[1.02] shadow-lg'
                  : 'bg-espresso/10 text-espresso/30 cursor-not-allowed'
              }`}
            >
              {odabrani.length === 0 ? 'Čekiraj sastojke...' : `Prikaži recepte (${poklapajuciRecepti?.length ?? 0})`}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}