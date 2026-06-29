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
    </section>
  );
};
