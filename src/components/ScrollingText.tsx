'use client'

import { motion } from 'framer-motion'

const services = [
  'Saas Designing',
  'WEB & MOBILE',
  'UI/UX Design',
  'Brand Identity',
  'Saas Designing',
  'WEB & MOBILE',
  'UI/UX Design',
  'Brand Identity',
]

export default function ScrollingText() {
  return (
    <section className="bg-black text-white py-8 border-y border-gray-800 overflow-hidden">
      <div className="relative">
        {/* First row - left to right */}
        <motion.div
          animate={{ x: [0, -50 + '%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex whitespace-nowrap space-x-12 mb-4"
        >
          {services.map((service, index) => (
            <span
              key={`row1-${index}`}
              className="text-4xl md:text-6xl font-light text-gray-400 select-none"
            >
              {service}
            </span>
          ))}
        </motion.div>

        {/* Second row - right to left */}
        <motion.div
          animate={{ x: [-50 + '%', 0] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex whitespace-nowrap space-x-12"
        >
          {services.reverse().map((service, index) => (
            <span
              key={`row2-${index}`}
              className="text-4xl md:text-6xl font-light text-gray-600 select-none"
            >
              {service}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 