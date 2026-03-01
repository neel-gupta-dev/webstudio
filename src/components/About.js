'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp } from './framer';
import { CheckCircle, Code, Zap, Globe, ArrowRight } from 'lucide-react';

const features = [
  { name: 'Modern Tech Stack', icon: Code, description: 'Built with Next.js & Tailwind' },
  { name: 'High Performance', icon: Zap, description: 'Optimized for speed & SEO' },
  { name: 'Global Reach', icon: Globe, description: 'Scalable infrastructure' },
];

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm">
                About WebStudio
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900">
                We Build Digital <span className="text-blue-600">Experiences</span> That Matter
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a team of passionate developers and designers dedicated to transforming ideas into reality. 
                By leveraging cutting-edge technology and creative design, we help businesses establish a powerful online presence.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm text-blue-600">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
               <button className="inline-flex h-12 items-center justify-center rounded-full bg-gray-900 px-8 text-base font-medium text-white shadow-lg transition-all hover:bg-gray-800 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                Discover Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative lg:order-last"
          >
            {/* Abstract Background Blob */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            {/* Main Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white aspect-[4/3]">
               {/* Placeholder for actual image */}
               <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <p className="text-gray-500 font-medium">Innovation in Motion</p>
                  </div>
               </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-50 max-w-xs"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-full">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-500">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
