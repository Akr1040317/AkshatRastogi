'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Calendar, MapPin } from 'lucide-react';
import { leadership } from '@/data/leadership';

export default function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="leadership" ref={ref} className="min-h-[100svh] flex flex-col justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Award className="text-purple" size={32} />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Leadership</span>
            </h2>
          </div>
          <p className="text-xl text-muted">Beyond code. Leading teams and communities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateZ: -2 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateZ: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ scale: 1.02, rotateZ: 1 }}
              className={`glass-2 rounded-hive p-5 sm:p-6 md:p-8 relative overflow-hidden group ${
                index === leadership.length - 1 && leadership.length % 2 === 1
                  ? 'md:col-span-2 md:max-w-xl md:mx-auto md:w-full'
                  : ''
              }`}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-pink/10 to-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple/20 to-pink/20">
                    <Award size={28} className="text-purple" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                    <h4 className="text-xl text-purple mb-3">{item.organization}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>
                          {item.startDate} - {item.endDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted mb-6 leading-relaxed">{item.description}</p>

                <div>
                  <h5 className="font-semibold mb-3 text-blue flex items-center gap-2">
                    <Trophy size={18} />
                    Achievements
                  </h5>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple mt-1">•</span>
                        <span className="text-muted">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

