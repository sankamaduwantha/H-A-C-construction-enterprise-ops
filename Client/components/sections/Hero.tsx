'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGES = ['/images/hero1.jpeg', '/images/hero2.jpeg', '/images/hero3.jpeg', '/images/hero4.jpeg'];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Preload all images on mount to prevent flicker
  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;

    HERO_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.onload = () => {
        loadedCount += 1;
        if (mounted && loadedCount === HERO_IMAGES.length) {
          setLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount += 1;
        if (mounted && loadedCount === HERO_IMAGES.length) {
          setLoaded(true);
        }
      };
      img.src = src;
    });

    return () => {
      mounted = false;
    };
  }, []);

  // Auto-advance slides every 5 seconds
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [loaded, goToNext]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slideshow Layer */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={src}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Build Your Dream Physique
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
            AI-powered coaching platform for fitness professionals. Transform
            lives with intelligent workout programming, nutrition planning, and
            progress tracking.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-lg bg-safety-orange px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-safety-orange/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety-orange"
            >
              Get Started Free
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white flex items-center gap-2 hover:text-gray-300 transition-colors"
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