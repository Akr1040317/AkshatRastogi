'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Users, Calendar, MapPin } from 'lucide-react';
import { leadership } from '@/data/leadership';

export default function LeadershipPanel() {
  return (
    <div className="space-y-6 pb-20 md:pb-8">
      {leadership.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className="glass-2 rounded-xl p-6"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple/20 to-pink/20">
              <Award size={24} className="text-purple" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
              <h4 className="text-xl text-purple mb-2">{item.organization}</h4>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
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

          <p className="text-muted mb-4 leading-relaxed">{item.description}</p>

          <div>
            <h5 className="font-semibold mb-3 text-blue flex items-center gap-2">
              <Trophy size={18} />
              Achievements
            </h5>
            <ul className="space-y-2">
              {item.achievements.map((achievement, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-purple mt-1">•</span>
                  <span className="text-muted">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}

      {/* Additional Leadership Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="glass-2 rounded-xl p-6"
      >
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users size={24} className="text-purple" />
          Additional Leadership
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Entrepreneurship & Product Building</h4>
            <p className="text-muted text-sm">
              Founded and scaled multiple products including Hive (600+ students), CodingForCharity (70+ members across 8 countries),
              and Gathr (700+ UF students). Led technical development, product strategy, and team coordination.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Mentorship & Community Impact</h4>
            <p className="text-muted text-sm">
              Mentored emerging cricketers, led development teams, and built platforms that serve educational communities.
              Received recognition from local media for community impact through CodingForCharity.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

