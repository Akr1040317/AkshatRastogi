'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Users, Calendar, MapPin } from 'lucide-react';
import { leadership } from '@/data/leadership';

export default function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="leadership" ref={ref} className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-20 relative">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Award className="text-purple" size={32} />
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Leadership</span>
            </h2>
          </div>
          <p className="text-xl text-muted">Beyond code - leading teams and communities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
              className="glass-2 rounded-2xl p-8 relative overflow-hidden group"
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

        {/* Additional Leadership Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-2 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users size={28} className="text-purple" />
            <h3 className="text-2xl font-bold">Additional Leadership</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-pink">Entrepreneurship & Product Building</h4>
              <p className="text-muted text-sm leading-relaxed">
                Founded and scaled multiple products including Hive (600+ students), CodingForCharity (70+ members across 8 countries),
                and Gathr (700+ UF students). Led technical development, product strategy, and team coordination.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-blue">Mentorship & Community Impact</h4>
              <p className="text-muted text-sm leading-relaxed">
                Mentored emerging cricketers, led development teams, and built platforms that serve educational communities.
                Received recognition from local media for community impact through CodingForCharity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

