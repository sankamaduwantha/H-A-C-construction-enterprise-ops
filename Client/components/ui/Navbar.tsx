'use client';

import { useState } from 'react';
import { Menu, X,  ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../../public/logo.png';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <div className="w-32 h-32  rounded-lg flex items-center justify-center">
              <img src={logo.src} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              H A C Group
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-neutral-400 hover:text-emerald-400 transition duration-200">
              Features
            </a>
            <a href="#pricing" className="text-neutral-400 hover:text-emerald-400 transition duration-200">
              Pricing
            </a>
            <a href="#solutions" className="text-neutral-400 hover:text-emerald-400 transition duration-200">
              Solutions
            </a>
            <a href="#community" className="text-neutral-400 hover:text-emerald-400 transition duration-200">
              Community
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-neutral-400 hover:text-emerald-400 transition duration-200 font-medium">
              Log In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-neutral-950 font-bold rounded-lg transition duration-200 flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-800 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-neutral-800"
          >
            <div className="pt-4 space-y-4">
              <a href="#features" className="block text-neutral-400 hover:text-emerald-400 transition">
                Features
              </a>
              <a href="#pricing" className="block text-neutral-400 hover:text-emerald-400 transition">
                Pricing
              </a>
              <a href="#solutions" className="block text-neutral-400 hover:text-emerald-400 transition">
                Solutions
              </a>
              <a href="#community" className="block text-neutral-400 hover:text-emerald-400 transition">
                Community
              </a>
              <div className="pt-4 space-y-3 border-t border-neutral-800">
                <button className="w-full px-4 py-2 text-neutral-400 hover:text-emerald-400 transition font-medium text-left">
                  Log In
                </button>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-neutral-950 font-bold rounded-lg transition">
                  Start Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
