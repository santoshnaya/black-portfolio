'use client'

import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Circular patterns */}
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-gray-800 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-gray-800 rounded-full opacity-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-4 h-4 rotate-45 border-2 border-white opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 rotate-45 border-2 border-white opacity-20"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full max-w-7xl mx-auto px-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-gray-700 h-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="w-full">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-light leading-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block">Digital</span>
            </motion.h1>
            
            {/* Consultant & Designer with eye icon */}
            <motion.div 
              className="flex items-center gap-6 text-6xl md:text-8xl lg:text-9xl font-light"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span>Consultant</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6 text-6xl md:text-8xl lg:text-9xl font-light"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="font-serif italic">&</span>
              <div className="w-16 h-16 md:w-24 md:h-24 border-2 border-white rounded-full flex items-center justify-center">
                <Eye size={32} className="md:w-12 md:h-12" />
              </div>
              <span>Designer</span>
            </motion.div>
          </motion.div>

          {/* Circular badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-32 left-6 md:left-20"
          >
            <div className="w-32 h-32 border-2 border-white rounded-full flex items-center justify-center relative">
              <div className="text-center">
                <div className="text-xs font-medium">OPEN FOR</div>
                <div className="text-xs font-medium">PROJECTS</div>
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full"></div>
            </div>
          </motion.div>

          {/* Bottom decorative elements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-20 right-6 md:right-20"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rotate-45 border-2 border-white"></div>
              <div className="w-12 h-12 border-2 border-white rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-white opacity-50"></div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-4 bg-white opacity-70"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
} 