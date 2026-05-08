import React from 'react';

export default function DrippyDivider({ fromColor = '#FDF5E6', toColor = '#FABD02' }) {
  return (
    <div className="relative w-full" style={{ marginTop: '-2px', marginBottom: '-2px' }}>
      {/* Top color background fills the top of the SVG */}
      <div className="absolute inset-x-0 top-0 h-1/2" style={{ backgroundColor: fromColor }} />
      {/* Bottom color background fills the bottom of the SVG */}
      <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ backgroundColor: toColor }} />
      
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative w-full block"
        style={{ height: 'clamp(60px, 10vw, 120px)' }}
      >
        {/* The "from" color drips down into the "to" color */}
        <path
          d="M0,0 L0,40 
             C80,40 100,40 120,50 C140,70 145,95 160,95 C175,95 180,70 200,50 C220,40 240,40 280,40
             C320,40 340,40 360,55 C375,75 378,105 400,105 C422,105 425,75 440,55 C460,40 480,40 520,40
             C560,40 590,40 620,48 C640,60 650,85 670,85 C690,85 700,60 720,48 C750,40 780,40 840,40
             C880,40 900,40 920,52 C935,68 940,100 960,100 C980,100 985,68 1000,52 C1020,40 1040,40 1080,40
             C1120,40 1140,40 1160,46 C1175,58 1180,90 1200,90 C1220,90 1225,58 1240,46 C1260,40 1280,40 1320,40
             C1360,40 1380,40 1400,50 C1415,65 1420,88 1440,88
             L1440,0 Z"
          fill={fromColor}
        />
      </svg>
    </div>
  );
}