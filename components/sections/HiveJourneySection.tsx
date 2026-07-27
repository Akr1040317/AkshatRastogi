'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { hiveJourney } from '@/data/hiveJourney';

export default function HiveJourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="journey" ref={ref} className="min-h-[80svh] flex flex-col justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="eyebrow text-amber-deep mb-3">Hive Journey</p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-purple" size={28} />
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Moments that mattered</span>
            </h2>
          </div>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            International expansion, national bee results, and first live classrooms. What we shipped, and what it took.
          </p>
        </motion.div>

        <div className="relative space-y-6">
          <div className="hidden md:block absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber via-amber-soft to-honey-line opacity-70" />

          {hiveJourney.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="glass-2 rounded-hive p-6 md:p-8 md:ml-4 relative"
            >
              <div className="hidden md:block absolute -left-[1.35rem] top-8 w-4 h-4 rounded-full bg-amber border-2 border-paper shadow-amber" />

              <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-honey text-amber-ink font-mono text-xs font-semibold tracking-wide uppercase">
                  <Calendar size={12} />
                  {event.date}
                </span>
                {event.location && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} />
                    {event.location}
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-text mb-3">{event.title}</h3>
              <p className="text-muted leading-relaxed mb-5">{event.summary}</p>

              <ul className="space-y-2">
                {event.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-purple mt-1 font-bold">•</span>
                    <span className="text-text">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
