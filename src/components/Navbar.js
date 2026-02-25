'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Tech Stack', href: '/#tech-stack' },
  { name: 'Services', href: '/#services' },
  { name: 'Blog', href: 'https://devanvil.pages.dev/' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if we've reached the bottom of the page to highlight Contact
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveSection('/#contact');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === '/') {
      const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Active when element crosses the center
        threshold: 0
      };

      const handleIntersect = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'home') setActiveSection('/');
            if (entry.target.id === 'about') setActiveSection('/#about');
            if (entry.target.id === 'tech-stack') setActiveSection('/#tech-stack');
            if (entry.target.id === 'services') setActiveSection('/#services');
            if (entry.target.id === 'contact') setActiveSection('/#contact');
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersect, observerOptions);
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const techStackSection = document.getElementById('tech-stack');
      const servicesSection = document.getElementById('services');
      const contactSection = document.getElementById('contact');

      if (homeSection) observer.observe(homeSection);
      if (aboutSection) observer.observe(aboutSection);
      if (techStackSection) observer.observe(techStackSection);
      if (servicesSection) observer.observe(servicesSection);
      if (contactSection) observer.observe(contactSection);

      return () => observer.disconnect();
    }
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/60 backdrop-blur-lg shadow-sm border-b border-gray-200/50 supports-[backdrop-filter]:bg-white/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group relative z-50">
            <motion.span whileHover={{ scale: 1.05 }} className="block text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              WebStudio
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => {
                const isActive = pathname === '/' ? activeSection === link.href : pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    <span className={`relative z-10 ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-blue-100 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                 const isActive = pathname === '/' ? activeSection === link.href : pathname === link.href;
                 return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                 )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}