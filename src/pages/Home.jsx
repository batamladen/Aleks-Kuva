import React from 'react';
import HeroSection from '../components/home/HeroSection';
import DrippyDivider from '../components/home/DrippyDivider';
import IntroSection from '../components/home/IntroSection';
import FeaturedSection from '../components/home/FeaturedSection';
import FooterSection from '../components/home/FooterSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DrippyDivider fromColor="#FDF5E6" toColor="#FABD02" />
      <IntroSection />
      <DrippyDivider fromColor="#FABD02" toColor="#FDF5E6" />
      <FeaturedSection />
      <DrippyDivider fromColor="#FDF5E6" toColor="#2D1B10" />
      <FooterSection />
    </div>
  );
}