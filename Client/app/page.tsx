'use client';

import {
  Dumbbell,
  Apple,
  BarChart3,
  MessageSquare,
} from 'lucide-react';
import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/sections/Hero';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { PricingTiers } from '@/components/sections/PricingTiers';
import { Statistics } from '@/components/sections/Statistics';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';


interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface TierFeature {
  title: string;
  description: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Home() {
 
  const features: Feature[] = [
    {
      icon: <Dumbbell className="w-8 h-8 text-emerald-400" />,
      title: 'Workout Programming',
      description:
        'AI-powered workout builder with progressive overload tracking and customization for all fitness levels.',
    },
    {
      icon: <Apple className="w-8 h-8 text-emerald-400" />,
      title: 'Nutrition & Meal Plans',
      description:
        'Intelligent meal planning engine that adapts to client goals, preferences, and macronutrient needs.',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: 'Habit & Progress Coaching',
      description:
        'Real-time progress tracking with automated coaching cues and habit formation insights.',
    },
   
  ];

  // Premium Tier Features
  const premiumFeatures: TierFeature[] = [
    {
      title: 'Advanced Client Metrics',
      description: 'Track every aspect of your premium clients\' progress.',
    },
    {
      title: '1-1 Dedicated Messaging',
      description: 'Private coaching channels for personalized support.',
    },
    {
      title: 'Custom Programming',
      description: 'Unlimited customization for elite athletes.',
    },
    {
      title: 'Priority Support',
      description: 'Dedicated account manager and 24/7 support access.',
    },
  ];

  // Community Tier Features
  const communityFeatures: TierFeature[] = [
    {
      title: 'On-Demand Workout Library',
      description: 'Hundreds of pre-built programs ready to deploy.',
    },
    {
      title: 'Group Challenges & Leaderboards',
      description: 'Gamified community features to boost engagement.',
    },
    {
      title: 'Automated Meal Plan Generation',
      description: 'AI creates personalized nutrition for every member.',
    },
    {
      title: 'Group Messaging & Community Hub',
      description: 'Build a thriving community around your brand.',
    },
  ];

  // Statistics Data
  const stats: Stat[] = [
    { value: '210,000+', label: 'Coaches Trusted' },
    { value: '+90%', label: 'Client Retention' },
    { value: '25+ Hours', label: 'Saved/Week on Admin' },
  ];

  // Footer Data
  const footerSections: FooterSection[] = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'API Reference', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Compliance', href: '#' },
      ],
    },
  ];

  return (
    <div className="bg-neutral-950 text-neutral-50 min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturesGrid features={features} />
      <PricingTiers premiumFeatures={premiumFeatures} communityFeatures={communityFeatures} />
      <Statistics stats={stats} />
      <CTA />
      <Footer sections={footerSections} />
    </div>
  );
}
