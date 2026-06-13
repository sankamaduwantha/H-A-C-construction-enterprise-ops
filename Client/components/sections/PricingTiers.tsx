'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, ShieldCheck } from 'lucide-react';

interface TierFeature {
  title: string;
  description: string;
}

interface PricingTiersProps {
  premiumFeatures: TierFeature[];
  communityFeatures: TierFeature[];
}

export const PricingTiers = ({ premiumFeatures, communityFeatures }: PricingTiersProps) => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-900/50 to-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Scale From Low-Ticket to High-Ticket
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            One platform, infinite possibilities. Whether you're building a community or offering premium 1-1 coaching.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Premium Personalization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 bg-gradient-to-br from-neutral-800 to-neutral-900 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/50 transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-lg">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-50">Premium Personalization</h3>
            </div>

            <p className="text-neutral-400 mb-8">
              For high-ticket 1-1 coaching and elite client experiences.
            </p>

            <div className="space-y-4">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-50 mb-1">{feature.title}</h4>
                    <p className="text-sm text-neutral-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-neutral-950 font-bold rounded-lg transition flex items-center justify-center gap-2">
              Explore Premium Plan
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Community Focused Value */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 bg-gradient-to-br from-neutral-800 to-neutral-900 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/50 transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-50">Community Focused Value</h3>
            </div>

            <p className="text-neutral-400 mb-8">
              For scalable low-ticket memberships and community engagement.
            </p>

            <div className="space-y-4">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-50 mb-1">{feature.title}</h4>
                    <p className="text-sm text-neutral-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-neutral-950 font-bold rounded-lg transition flex items-center justify-center gap-2">
              Start Community Plan
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
