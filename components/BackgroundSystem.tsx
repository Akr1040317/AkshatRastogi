'use client';

import AuroraBackground from './AuroraBackground';
import ParticlesBackground from './ParticlesBackground';

export default function BackgroundSystem() {
  return (
    <>
      <AuroraBackground />
      <ParticlesBackground />
      <div className="noise-overlay" />
      <div className="vignette" />
    </>
  );
}


