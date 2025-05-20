import React from 'react';
import partner1 from '../assets/img/fiir_logo.png';
import partner2 from '../assets/img/logo-poli-color9.png';
import LogoSlider from '../components/LogoSlider';

// Lista cu logo-urile partenerilor
const partnerLogos = [
  partner1,
  partner2,
];

export default function Partners() {
  return (
    <main className="partners-page container py-5">
      <h2 className="text-center mb-4" style={{ fontFamily: 'Glaser Stencil D', fontSize: '48px' }}>
        Our Partners
      </h2>
      <LogoSlider logos={partnerLogos} />
    </main>
  );
}