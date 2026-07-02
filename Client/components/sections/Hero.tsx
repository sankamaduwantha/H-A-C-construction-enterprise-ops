'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface HeroSlide {
  src: string;
  alt: string;
}

const SLIDES: HeroSlide[] = [
  {
    src: 'https://images.unsplash.com/photo-1583024011792-b165975b52f5?auto=format&fit=crop&w=1920&q=95',
    alt: 'Yellow Caterpillar excavator operating on a construction site',
  },
  {
    src: '/images/hero4.jpg',
    alt: 'Heavy construction excavator at work',
  },
  {
    src: 'https://images.unsplash.com/photo-1614977645540-7abd88ba8e56?auto=format&fit=crop&w=1920&q=95',
    alt: 'Blue tractor operating on an agricultural field',
  },
  {
    src: 'https://images.unsplash.com/photo-1757782631020-78cc0c1bbf3a?auto=format&fit=crop&w=1920&q=95',
    alt: 'Isuzu delivery truck on the road in Fukuoka',
  },
];

const SLIDE_INTERVAL_MS = 5000;

const HEADINGS = [
  'Your Trusted Partner in Transport & Construction',
  'Delivering Excellence in Logistics & Site Works',
  'Professional Haulage & Heavy Equipment Services',
] as const;

const HEADING_INTERVAL_MS = 3000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [headingIndex, setHeadingIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadingIndex((prev) => (prev + 1) % HEADINGS.length);
    }, HEADING_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  // ── Mouse glow ────────────────────────────────────────────────────────────
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);
  const rectCache  = useRef<DOMRect | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow    = glowRef.current;
    if (!section || !glow) return;

    // Cache bounds once; refresh only on resize to avoid reflow on every move
    const cacheRect = () => {
      rectCache.current = section.getBoundingClientRect();
    };
    cacheRect();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = rectCache.current;
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.background =
        `radial-gradient(150px circle at ${x}px ${y}px,` +
        ` rgba(255,255,255,0.15) 0%,` +
        ` rgba(180,210,255,0.07) 45%,` +
        ` transparent 80%)`;
    };

    const handleMouseEnter = () => { glow.style.opacity = '1'; };
    const handleMouseLeave = () => { glow.style.opacity = '0'; };

    window.addEventListener('resize', cacheRect, { passive: true });
    section.addEventListener('mousemove',  handleMouseMove,  { passive: true });
    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', cacheRect);
      section.removeEventListener('mousemove',  handleMouseMove);
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero slideshow"
    >
      {/* Background slideshow — decorative, hidden from assistive technology */}
      <div className="absolute inset-0" aria-hidden="true">
        {SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                quality={95}
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-[1.02]' : 'scale-100'
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Cinematic gradient overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/85"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"
        aria-hidden="true"
      />

      {/* Cursor spotlight — DOM-mutated via ref, zero re-renders */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-[5] opacity-0 mix-blend-screen blur-sm transition-opacity duration-500"
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 flex h-full items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">

          <AnimatePresence mode="wait">
            <motion.h1
              key={headingIndex}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl font-bold tracking-tight text-white leading-tight drop-shadow-lg sm:text-5xl md:text-6xl"
            >
              {HEADINGS[headingIndex]}
            </motion.h1>
          </AnimatePresence>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-100 drop-shadow sm:text-xl">
            We deliver professional logistics, heavy equipment transport,
            excavation, and construction services with quality, reliability, and efficiency.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-5">
            <a
              href="#"
              className="w-full sm:w-auto rounded-lg bg-safety-orange px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-all duration-200 hover:bg-safety-orange/90 hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety-orange"
            >
              Book a Service
            </a>
            <a
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:gap-3"
            >
              View Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade for smooth section transition */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-neutral-950 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}