'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// All CDN photo IDs verified from Unsplash photo pages. hero4.jpg kept — 4.2 MB local photo.
// Unsplash License: free to use — https://unsplash.com/license
const HERO_IMAGES = [

  'https://images.unsplash.com/photo-1583024011792-b165975b52f5?auto=format&fit=crop&w=1920&q=95', // Yellow Caterpillar excavator on site (1.86M views)
  '/images/hero4.jpg',                                                                               // Local 4.2 MB construction excavator
  'https://images.unsplash.com/photo-1614977645540-7abd88ba8e56?auto=format&fit=crop&w=1920&q=95', // Blue tractor on field
  'https://images.unsplash.com/photo-1757782631020-78cc0c1bbf3a?auto=format&fit=crop&w=1920&q=95', // Isuzu delivery truck, Fukuoka
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 5 seconds
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slideshow Layer */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={src}
              alt={`Hero background ${index + 1}`}
              fill
              quality={95}
              className={`object-cover object-center transition-transform duration-[8000ms] ease-out ${
                index === currentIndex ? 'scale-[1.02]' : 'scale-100'
              }`}
              priority={index === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1920px) 100vw, 100vw"
            />
          </div>
        ))}
      </div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
            Build Your Dream Physique
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl max-w-2xl mx-auto">
            AI-powered coaching platform for fitness professionals. Transform
            lives with intelligent workout programming, nutrition planning, and
            progress tracking.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-lg bg-safety-orange px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-safety-orange/90 hover:scale-105 hover:shadow-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety-orange"
            >
              Get Started Free
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white flex items-center gap-2 hover:text-gray-300 hover:gap-3 transition-all duration-200"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
};