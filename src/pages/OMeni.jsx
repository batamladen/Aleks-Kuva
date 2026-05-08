import React from 'react';
import FooterSection from '../components/home/FooterSection';

export default function OMeni() {
  return (
    <div>
      <section className="min-h-screen bg-cream px-6 pt-28 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl text-espresso font-black mb-6"
            style={{ fontFamily: "'Bungee Shade', cursive" }}
          >
            O meni
          </h1>
          <p className="text-espresso/70 font-body text-lg leading-relaxed">
            Zdravo! Ja sam Aleks, i obožavam da kuvam. Kuhinja mi je omiljeno mesto na svetu —
            tu puštam muziku, eksperimentišem sa ukusima, i pravim nered od kog nastanu najlepša jela.
            Ovaj sajt je moj mali kutak gde delim recepte, priče, i poneki mamini trik. ✦
          </p>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}