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
            {/* Rotating ring — conic-gradient disc spins behind 2px gap, clipped by overflow-hidden */}
            <div className="relative w-full sm:w-auto overflow-hidden rounded-lg p-[2px]">

              {/* Step 1: centering shell — keeps spinning inner div from affecting layout */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px]"
                aria-hidden="true"
              >
                {/* Step 2: the conic-gradient disc that rotates */}
                <div
                  className="h-full w-full animate-spin-ring"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, transparent 200deg,' +
                      ' #C9A24B 250deg, #FDE68A 290deg, #C9A24B 330deg, transparent 360deg)',
                  }}
                />
              </div>

              {/* Step 3: opaque fill masks the center — only the 2px border ring is visible */}
              <div
                className=" absolute inset-[2px] rounded-[6px] bg-neutral-900"
                aria-hidden="true"
              />

              {/* Step 4: actual button sits on top */}
              <button
                type="button"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg   bg-white/30 px-8 py-3.5 text-sm  text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:gap-3  "
              >
                Book a Service
              </button>
            </div>
            <button
              type="button"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-white/35 bg-[#C9A24B]/50 px-8 py-3.5 text-sm  text-white backdrop-blur-sm transition-all duration-200 hover:bg-[#C9A24B]/70 hover:gap-3 ring-1 ring-white/20 "
            >
              View Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
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