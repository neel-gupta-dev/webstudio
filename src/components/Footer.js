'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Tech Stack', href: '/#tech-stack' },
  { name: 'Contact', href: '/#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex-shrink-0 group relative z-10">
                <span className="block text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                WebStudio
                </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Crafting modern web experiences with precision and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
             <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Contact Us</h3>
             <ul className="mt-4 space-y-2 text-base text-gray-400">
                <li>neelgupta30@zohomail.in</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Web Street, Digital City</li>
             </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              {/*
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Instagram</span><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span><Facebook className="h-6 w-6" /></a>
              */}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} WebStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;