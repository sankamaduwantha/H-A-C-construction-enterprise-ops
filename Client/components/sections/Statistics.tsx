'use client';

import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

interface StatisticsProps {
  stats: Stat[];
}

export const Statistics = ({ stats }: StatisticsProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-emerald-400 mb-2">{stat.value}</div>
              <div className="text-lg text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
