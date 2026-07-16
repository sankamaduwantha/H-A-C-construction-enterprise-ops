'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import SpotlightCard from '@/components/sections/card';

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
            PRECISION. POWER.
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#C9A24B] mb-4">
            PROVEN RESULTS.
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            With years of industry experience, we deliver reliable excavation, site preparation, earthmoving, and transportation services. Our skilled operators and modern fleet ensure every project is completed safely, efficiently, and on schedule.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {features.map((feature, index) => (
            <SpotlightCard key={index}>
              <div className="text-center">
                <h3 className="text-xl font-bold text-neutral-50 mb-2">{feature.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
