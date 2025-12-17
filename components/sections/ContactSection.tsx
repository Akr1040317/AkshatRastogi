'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Copy, Check, FileText, Send, Calendar } from 'lucide-react';

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const copyEmail = () => {
    navigator.clipboard.writeText('akshatrdev@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-20 relative">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="gradient-text">build something serious</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and product building.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-6"
        >
          {/* Email */}
          <motion.button
            onClick={copyEmail}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-2 rounded-2xl p-6 text-left group hover:glass transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-purple/20">
                <Mail size={24} className="text-purple" />
              </div>
              {emailCopied ? (
                <Check size={20} className="text-green-400" />
              ) : (
                <Copy size={20} className="text-muted group-hover:text-white transition-colors" />
              )}
            </div>
            <div className="text-sm text-muted mb-1">Email</div>
            <div className="font-semibold text-lg">akshatrdev@gmail.com</div>
          </motion.button>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/akshat-rastogi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-2 rounded-2xl p-6 text-left group hover:glass transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-blue/20">
                <Linkedin size={24} className="text-blue" />
              </div>
              <Send size={20} className="text-muted group-hover:text-blue transition-colors" />
            </div>
            <div className="text-sm text-muted mb-1">LinkedIn</div>
            <div className="font-semibold text-lg">akshat-rastogi</div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Akr1040317"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-2 rounded-2xl p-6 text-left group hover:glass transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-pink/20">
                <Github size={24} className="text-pink" />
              </div>
              <Send size={20} className="text-muted group-hover:text-pink transition-colors" />
            </div>
            <div className="text-sm text-muted mb-1">GitHub</div>
            <div className="font-semibold text-lg">Akr1040317</div>
          </motion.a>

          {/* Resume */}
          <motion.a
            href="/Akshat_Rastogi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-2 rounded-2xl p-6 text-left group hover:glass transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-orange/20">
                <FileText size={24} className="text-orange" />
              </div>
              <Send size={20} className="text-muted group-hover:text-orange transition-colors" />
            </div>
            <div className="text-sm text-muted mb-1">Resume</div>
            <div className="font-semibold text-lg">Download PDF</div>
          </motion.a>

          {/* Cal.com */}
          <motion.a
            href="https://cal.com/akshatr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-2 rounded-2xl p-6 text-left group hover:glass transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple/20 to-pink/20">
                <Calendar size={24} className="text-purple" />
              </div>
              <Send size={20} className="text-muted group-hover:text-purple transition-colors" />
            </div>
            <div className="text-sm text-muted mb-1">Book a Meeting</div>
            <div className="font-semibold text-lg">Schedule with Cal.com</div>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-muted"
        >
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </motion.div>
      </div>
    </section>
  );
}

