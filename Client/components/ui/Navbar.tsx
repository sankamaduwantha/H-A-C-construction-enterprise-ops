"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { motion } from "framer-motion";
import logo from "../../public/log.png";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[70%] z-50 bg-neutral-950/40 backdrop-blur-xl ring-1 ring-[#C9A24B]/20 shadow-2xl rounded-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 flex items-center gap-2.5"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="10"
                width="16"
                height="3.2"
                rx="1"
                fill="#C9A24B"
              />
              <rect x="4" y="4" width="9" height="3.2" rx="1" fill="white" />
              <rect
                x="11"
                y="16.8"
                width="9"
                height="3.2"
                rx="1"
                fill="white"
              />
            </svg>
            <span className="text-xl font-medium tracking-tight">
              <span className="text-white">HAC</span>{" "}
              <span className="text-neutral-400 font-normal">Group</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#features" className="relative group text-neutral-300 text-sm tracking-widest  font-medium">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.25 bg-[#C9A24B] group-hover:w-full transition-all duration-300 origin-left"></span>
            </a>
            <a href="#pricing" className="relative group text-neutral-300 text-sm tracking-widest  font-medium">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.25 bg-[#C9A24B] group-hover:w-full transition-all duration-300 origin-left"></span>
            </a>
            <a href="#solutions" className="relative group text-neutral-300 text-sm tracking-widest  font-medium">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.25 bg-[#C9A24B] group-hover:w-full transition-all duration-300 origin-left"></span>
            </a>
            <a href="#community" className="relative group text-neutral-300 text-sm tracking-widest  font-medium">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.25 bg-[#C9A24B] group-hover:w-full transition-all duration-300 origin-left"></span>
            </a>
          </div>

          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#"
              className="group relative p-2.5 text-neutral-400 hover:text-[#C9A24B] hover:scale-110 active:scale-95 transition-all duration-300 rounded-full hover:bg-amber-500/10"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Facebook
              </span>
            </a>
            <a
              href="#"
              className="group relative p-2.5 text-neutral-400 hover:text-[#C9A24B] hover:scale-110 active:scale-95 transition-all duration-300 rounded-full hover:bg-amber-500/10"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Instagram
              </span>
            </a>
            <a
              href="#"
              className="group relative p-2.5 text-neutral-400 hover:text-[#C9A24B] hover:scale-110 active:scale-95 transition-all duration-300 rounded-full hover:bg-amber-500/10"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                WhatsApp
              </span>
            </a>
            <a
              href="#"
              className="group relative p-2.5 text-neutral-400 hover:text-[#C9A24B] hover:scale-110 active:scale-95 transition-all duration-300 rounded-full hover:bg-amber-500/10"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5" />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                TikTok
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-800 transition"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-neutral-800"
          >
            <div className="pt-4 space-y-4">
              <a
                href="#features"
                className="block text-neutral-400 hover:text-amber-200 transition"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block text-neutral-400 hover:text-amber-200 transition"
              >
                Pricing
              </a>
              <a
                href="#solutions"
                className="block text-neutral-400 hover:text-amber-200 transition"
              >
                Solutions
              </a>
              <a
                href="#community"
                className="block text-neutral-400 hover:text-amber-200 transition"
              >
                Contact
              </a>

              {/* Mobile Social Media Icons */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
                <a
                  href="#"
                  className="text-neutral-500 hover:text-[#C9A24B] hover:scale-110 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-neutral-500 hover:text-[#C9A24B] hover:scale-110 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-neutral-500 hover:text-[#C9A24B] hover:scale-110 transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-neutral-500 hover:text-[#C9A24B] hover:scale-110 transition-all duration-200"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
