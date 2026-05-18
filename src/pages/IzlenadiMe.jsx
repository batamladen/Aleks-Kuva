import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RECEPTI } from '../recipes/index.js';
import FooterSection from '../components/home/FooterSection';

export default function IzlenadiMe() {
  const navigate = useNavigate();

  const iznenadime = () => {
    const random = RECEPTI[Math.floor(Math.random() * RECEPTI.length)];
    navigate(`/recepti/${random.slug}`);
  };

  return (
    <div>
      <section className="min-h-screen bg-mustard px-6 pt-28 pb-20 flex flex-col items-center justify-center">
        <div className="max-w-xl text-center">
          <div className="text-8xl mb-6">🧑‍🍳</div>
          <h1
            className="text-4xl md:text-6xl text-espresso font-black mb-6"
            style={{ fontFamily: "'Bungee Shade', cursive" }}
          >
            Iznenadi me!
          </h1>
          <p className="text-espresso/70 font-body text-lg mb-8">
            Klikni dugme i pusti da te sudbina odvede do savršenog recepta!
          </p>
          <button
            onClick={iznenadime}
            className="bg-persimmon text-cream font-bold px-10 py-5 rounded-full text-xl hover:scale-105 transition-transform shadow-xl focus:outline-none focus:ring-2 focus:ring-espresso"
          >
            Iznenadi me ✦
          </button>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}