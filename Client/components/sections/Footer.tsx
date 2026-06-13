'use client';

import { Dumbbell, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections: FooterSection[];
}

export const Footer = ({ sections }: FooterProps) => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-neutral-950" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Everfit
              </span>
            </div>
            <p className="text-sm text-neutral-400">
              The all-in-one platform for fitness coaches to scale, coach, and win.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 bg-neutral-800 hover:bg-emerald-500/20 rounded-lg transition text-neutral-400 hover:text-emerald-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 hover:bg-emerald-500/20 rounded-lg transition text-neutral-400 hover:text-emerald-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 hover:bg-emerald-500/20 rounded-lg transition text-neutral-400 hover:text-emerald-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 hover:bg-emerald-500/20 rounded-lg transition text-neutral-400 hover:text-emerald-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-neutral-50 mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-emerald-400 transition duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-neutral-400 text-center sm:text-left mb-4 sm:mb-0">
            &copy; 2026 Everfit. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-emerald-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
