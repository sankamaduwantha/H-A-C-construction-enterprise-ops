'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
/*Primary:   #1F2937 (Charcoal)
Accent:    #EA580C (Safety Orange)
Background: #FFFFFF or #F8FAFC*/ 
export const Hero = () => {
  return (
    <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-safety-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-neutral-50">The All-In-One Platform to</span>{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  Coach, Scale, and Win.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-400 max-w-lg">
                Empower your coaching business with AI-driven workout builders, intelligent meal plans, automated client
                management, and thriving community features. Transform the way you work with clients and scale to
                unlimited potential.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-neutral-950 font-bold rounded-lg transition duration-200 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 font-bold rounded-lg transition duration-200 flex items-center justify-center gap-2"
              >
                <span>Watch a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            <p className="text-sm text-neutral-500">✓ No credit card required • ✓ 14-day full access • ✓ Cancel anytime</p>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl border border-neutral-700 p-8 backdrop-blur-sm overflow-hidden">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-neutral-50">Trainer Dashboard</h3>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-900/60 rounded-lg p-4 border border-neutral-700">
                    <div className="text-3xl font-bold text-emerald-400">48</div>
                    <div className="text-sm text-neutral-500 mt-1">Active Clients</div>
                  </div>
                  <div className="bg-neutral-900/60 rounded-lg p-4 border border-neutral-700">
                    <div className="text-3xl font-bold text-emerald-400">156</div>
                    <div className="text-sm text-neutral-500 mt-1">Today's Workouts</div>
                  </div>
                  <div className="bg-neutral-900/60 rounded-lg p-4 border border-neutral-700">
                    <div className="text-3xl font-bold text-emerald-400">$8.2K</div>
                    <div className="text-sm text-neutral-500 mt-1">Monthly Revenue</div>
                  </div>
                  <div className="bg-neutral-900/60 rounded-lg p-4 border border-neutral-700">
                    <div className="text-3xl font-bold text-emerald-400">94%</div>
                    <div className="text-sm text-neutral-500 mt-1">Retention Rate</div>
                  </div>
                </div>

                {/* Chart Mockup */}
                <div className="bg-neutral-900/60 rounded-lg p-4 border border-neutral-700">
                  <div className="text-sm font-semibold text-neutral-400 mb-3">Revenue Trend</div>
                  <div className="h-32 flex items-end gap-2">
                    {[45, 52, 48, 65, 72, 68, 85].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t opacity-80 hover:opacity-100 transition"
                        style={{ height: `${height}%`, minHeight: '8px' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
