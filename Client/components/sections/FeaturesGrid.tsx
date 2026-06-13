'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  features: Feature[];
}

export const FeaturesGrid = ({ features }: FeaturesGridProps) => {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Fitness Intelligence Suite
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Everything you need to coach, scale, and grow your fitness business all in one platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, borderColor: '#10b981' }}
              className="group p-8 bg-white/5 backdrop-blur-md border border-neutral-700 hover:border-emerald-500/50 rounded-xl transition duration-300 cursor-pointer"
            >
              <div className="mb-4 p-3 bg-neutral-900 rounded-lg w-fit group-hover:bg-emerald-500/20 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-50 mb-2">{feature.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
              <div className="mt-4 flex items-center gap-2 text-emerald-400 opacity-0 group-hover:opacity-100 transition">
                <span className="text-sm font-semibold">Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
