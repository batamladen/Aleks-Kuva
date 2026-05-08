import React from 'react';
import FooterSection from '../components/home/FooterSection';

export default function MaminaKuhinja() {
  return (
    <div>
      <section className="min-h-screen bg-cream px-6 pt-28 pb-20 relative">
        {/* Aged paper overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'300\' height=\'300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence baseFrequency=\'0.8\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          }} 
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <h1
            className="text-4xl md:text-6xl text-espresso font-black mb-6"
            style={{ fontFamily: "'Bungee Shade', cursive" }}
          >
            Mamina kuhinja
          </h1>
          <p className="text-espresso/60 font-body text-lg max-w-md mx-auto">
            Recepti sa maminog stola — onaj ukus koji nikad ne staviš u reči, ali uvek prepoznaš. ✦
          </p>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}