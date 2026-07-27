'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

type HexCell = {
  id: string;
  x: number;
  y: number;
  delay: number;
};

const HEX_SIZE = 26;
const COL_GAP = HEX_SIZE * Math.sqrt(3);
const ROW_GAP = HEX_SIZE * 1.5;
const INFLUENCE_RADIUS = 170;

function hexPoints(cx: number, cy: number, size: number) {
  const points: string[] = [];
  for (let i = 0; i < 6; i += 1) {
    const angle = (Math.PI / 180) * (60 * i - 30);
    points.push(`${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`);
  }
  return points.join(' ');
}

export default function HeroHexField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  const polyRefs = useRef<Map<string, SVGPolygonElement>>(new Map());
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);
  const [bounds, setBounds] = useState({ w: 0, h: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const reduceMotion = useReducedMotion();

  const hexes = useMemo<HexCell[]>(() => {
    if (!bounds.w || !bounds.h) return [];

    const cols = Math.ceil(bounds.w / COL_GAP) + 3;
    const rows = Math.ceil(bounds.h / ROW_GAP) + 3;
    const cells: HexCell[] = [];

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const x = col * COL_GAP + (row % 2 === 1 ? COL_GAP / 2 : 0) - COL_GAP;
        const y = row * ROW_GAP - ROW_GAP;
        cells.push({
          id: `${row}-${col}`,
          x,
          y,
          delay: ((row * 37 + col * 19) % 240) / 100,
        });
      }
    }

    return cells;
  }, [bounds.h, bounds.w]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateBounds = () => {
      const rect = el.getBoundingClientRect();
      setBounds({ w: rect.width, h: rect.height });
    };

    updateBounds();
    const observer = new ResizeObserver(updateBounds);
    observer.observe(el);

    const section = el.closest('section');
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const rect = el.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };
    const onLeave = () => {
      pointerRef.current = null;
    };
    const onTouch = () => setIsTouch(true);

    section?.addEventListener('pointermove', onMove);
    section?.addEventListener('pointerleave', onLeave);
    window.addEventListener('touchstart', onTouch, { once: true, passive: true });

    return () => {
      observer.disconnect();
      section?.removeEventListener('pointermove', onMove);
      section?.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('touchstart', onTouch);
    };
  }, []);

  useEffect(() => {
    const paint = () => {
      const pointer = pointerRef.current;
      const glow = glowRef.current;

      if (glow) {
        if (pointer && !isTouch && !reduceMotion) {
          glow.setAttribute('cx', String(pointer.x));
          glow.setAttribute('cy', String(pointer.y));
          glow.style.opacity = '0.55';
        } else {
          glow.style.opacity = '0';
        }
      }

      hexes.forEach((hex) => {
        const node = polyRefs.current.get(hex.id);
        if (!node) return;

        if (!pointer || isTouch || reduceMotion) {
          node.style.fillOpacity = '0';
          node.style.strokeOpacity = '0.16';
          node.style.strokeWidth = '1';
          node.style.transform = 'scale(1)';
          return;
        }

        const distance = Math.hypot(pointer.x - hex.x, pointer.y - hex.y);
        const influence = Math.max(0, 1 - distance / INFLUENCE_RADIUS);

        if (influence <= 0.02) {
          node.style.fillOpacity = '0';
          node.style.strokeOpacity = '0.16';
          node.style.strokeWidth = '1';
          node.style.transform = 'scale(1)';
          return;
        }

        node.style.fillOpacity = String(0.06 + influence * 0.48);
        node.style.strokeOpacity = String(0.28 + influence * 0.72);
        node.style.strokeWidth = String(1.1 + influence * 1.5);
        node.style.transform = `scale(${1 + influence * 0.14})`;
      });

      rafRef.current = window.requestAnimationFrame(paint);
    };

    rafRef.current = window.requestAnimationFrame(paint);
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [hexes, isTouch, reduceMotion]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none hero-hex-field"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-0)] opacity-85" />

      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <radialGradient id="hero-hex-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 165, 0, 0.5)" />
            <stop offset="70%" stopColor="rgba(255, 194, 77, 0.12)" />
            <stop offset="100%" stopColor="rgba(255, 165, 0, 0)" />
          </radialGradient>
        </defs>

        <circle
          ref={glowRef}
          r={160}
          fill="url(#hero-hex-glow)"
          style={{ opacity: 0, transition: 'opacity 160ms ease' }}
        />

        {hexes.map((hex) => (
          <polygon
            key={hex.id}
            ref={(node) => {
              if (node) polyRefs.current.set(hex.id, node);
              else polyRefs.current.delete(hex.id);
            }}
            points={hexPoints(hex.x, hex.y, HEX_SIZE)}
            className={reduceMotion ? undefined : 'hero-hex-cell'}
            style={{
              fill: 'var(--amber)',
              fillOpacity: 0,
              stroke: 'var(--amber)',
              strokeOpacity: 0.16,
              strokeWidth: 1,
              transformOrigin: `${hex.x}px ${hex.y}px`,
              transition: reduceMotion
                ? undefined
                : 'fill-opacity 120ms ease, stroke-opacity 120ms ease, stroke-width 120ms ease, transform 160ms ease',
              animationDelay: `${hex.delay}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
