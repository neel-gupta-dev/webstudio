'use client';

import { motion } from 'framer-motion';
import { Code, Database, Layout, Server } from 'lucide-react';
import { fadeInUp, staggerContainer } from './framer';
import GridBackground from './GridBackground';

const technologies = [
  {
    category: "Frontend",
    icon: Layout,
    items: [
      { name: "React", logo: "https://cdn.simpleicons.org/react" },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Framer Motion", logo: "https://cdn.simpleicons.org/framer" }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", logo: "https://cdn.simpleicons.org/express" },
      // { name: "Python", logo: "https://cdn.simpleicons.org/python" },
      { name: "PHP", logo: "https://cdn.simpleicons.org/php" }
    ]
  },
  {
    category: "Database",
    icon: Database,
    items: [
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
      // { name: "Redis", logo: "https://cdn.simpleicons.org/redis" },
      { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" }
    ]
  },
  {
    category: "Tools & DevOps",
    icon: Code,
    items: [
      { name: "Git", logo: "https://cdn.simpleicons.org/git" },
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
      { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel" }
    ]
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0">
        <GridBackground magnification={false} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Our Technology Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Built with the latest and most robust technologies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <tech.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.category}</h3>
              <ul className="space-y-2">
                {tech.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <img src={item.logo} alt={item.name} className="w-5 h-5 mr-3 object-contain" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}