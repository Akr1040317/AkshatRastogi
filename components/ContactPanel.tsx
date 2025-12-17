'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Copy, Check, FileText } from 'lucide-react';

export default function ContactPanel() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('rastogia@ufl.edu');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="space-y-8 pb-20 md:pb-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="gradient-text">build something serious</span>
        </h2>
        <p className="text-lg text-muted mb-8">
          I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and product building.
        </p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-2 rounded-xl p-8 max-w-md mx-auto"
      >
        <div className="space-y-4">
          {/* Email */}
          <button
            onClick={copyEmail}
            className="w-full flex items-center justify-between p-4 rounded-xl glass hover:glass-2 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple/20">
                <Mail size={20} className="text-purple" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted">Email</div>
                <div className="font-semibold">rastogia@ufl.edu</div>
              </div>
            </div>
            {emailCopied ? (
              <Check size={20} className="text-green-400" />
            ) : (
              <Copy size={20} className="text-muted group-hover:text-white transition-colors" />
            )}
          </button>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/akshat-rastogi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-4 rounded-xl glass hover:glass-2 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue/20">
                <Linkedin size={20} className="text-blue" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted">LinkedIn</div>
                <div className="font-semibold">akshat-rastogi</div>
              </div>
            </div>
            <Linkedin size={20} className="text-muted group-hover:text-blue transition-colors" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Akr1040317"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-4 rounded-xl glass hover:glass-2 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-pink/20">
                <Github size={20} className="text-pink" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted">GitHub</div>
                <div className="font-semibold">Akr1040317</div>
              </div>
            </div>
            <Github size={20} className="text-muted group-hover:text-pink transition-colors" />
          </a>

          {/* Resume */}
          <a
            href="/Akshat_Rastogi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-4 rounded-xl glass hover:glass-2 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange/20">
                <FileText size={20} className="text-orange" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted">Resume</div>
                <div className="font-semibold">Download PDF</div>
              </div>
            </div>
            <FileText size={20} className="text-muted group-hover:text-orange transition-colors" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-sm text-muted"
      >
        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </motion.div>
    </div>
  );
}

