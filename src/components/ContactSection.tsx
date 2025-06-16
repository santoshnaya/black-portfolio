'use client'

import { motion } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'Dribbble',
    url: '#',
    color: 'hover:text-pink-400',
  },
  {
    name: 'Instagram',
    url: '#',
    color: 'hover:text-purple-400',
  },
  {
    name: 'Twitter',
    url: '#',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Webflow',
    url: '#',
    color: 'hover:text-blue-500',
  },
  {
    name: 'LinkedIn',
    url: '#',
    color: 'hover:text-blue-600',
  },
]

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-gray-800 rounded-full opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-gray-800 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Ready to start section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-light mb-4 text-gray-400"
            >
              READY TO START A PROJECT?
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-light mb-12"
          >
                         Let&apos;s Talk
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="w-8 h-8 rotate-45 border-2 border-white"></div>
            <div className="w-12 h-12 border-2 border-white rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 text-2xl md:text-3xl font-light">
            <Mail size={24} />
            <span>Hello@jithinkumar.com</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-8 mb-20"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`text-lg font-medium transition-colors ${link.color} flex items-center gap-2`}
            >
              {link.name}
              <ExternalLink size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-sm">JK</span>
              </div>
              <span className="text-sm">© 2024 Jithin Kumar. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-20 left-20 w-16 h-16 border-2 border-white rounded-full opacity-30"
      ></motion.div>
      
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute top-20 right-20 w-8 h-8 border-2 border-white opacity-40"
      ></motion.div>
    </section>
  )
} 