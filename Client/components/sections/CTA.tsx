'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section id="community" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-12 sm:p-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-2xl overflow-hidden text-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-transparent opacity-50" />

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-neutral-50">
              Ready to Transform Your Coaching Business?
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join over 210,000 coaches using Everfit to scale their business, delight their clients, and build
              sustainable revenue streams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-neutral-950 font-bold rounded-lg transition duration-200 flex items-center justify-center gap-2"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 font-bold rounded-lg transition duration-200"
              >
                Schedule a Demo
              </motion.button>
            </div>

            <p className="text-sm text-neutral-400 mt-6">✓ No credit card required • ✓ 14 days free • ✓ Full feature access</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
