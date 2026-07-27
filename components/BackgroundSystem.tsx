'use client';

import AuroraBackground from './AuroraBackground';

export default function BackgroundSystem() {
  return (
    <>
      <AuroraBackground />
      <div className="hex-bg" />
      <div className="noise-overlay" />
      <div className="vignette" />
    </>
  );
}
