import React from 'react';

export default function FooterSection() {
  return (
    <footer className="bg-espresso text-cream/70 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h3
          className="text-2xl md:text-3xl text-cream font-black mb-4"
          style={{ fontFamily: "'Bungee Shade', cursive" }}
        >
          Aleks Kuva
        </h3>
        <p className="font-body text-sm mb-6 max-w-md mx-auto leading-relaxed">
          Svaki recept je pisan sa ljubavlju. Hvala ti što kuvaš sa mnom. ✦
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-body">
          <a href="/" className="hover:text-mustard transition-colors">Početna</a>
          <a href="/recepti" className="hover:text-mustard transition-colors">Recepti</a>
          <a href="/iznenadi-me" className="hover:text-mustard transition-colors">Iznenadi me</a>
          <a href="/mamina-kuhinja" className="hover:text-mustard transition-colors">Mamina kuhinja</a>
          <a href="/o-meni" className="hover:text-mustard transition-colors">O meni</a>
        </div>
        <p className="mt-8 text-xs text-cream/30 font-body">
          © 2026 Aleks Kuva. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}