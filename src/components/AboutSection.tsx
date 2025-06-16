'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  {
    number: '08',
    label: 'Years of Experience',
    suffix: '',
  },
  {
    number: '100',
    label: 'Projects',
    suffix: '+',
  },
  {
    number: '50',
    label: 'Clients',
    suffix: '+',
  },
]

const skills = [
  'UI/UX Design',
  'Web Design',
  'Mobile App Design',
  'Brand Identity',
  'Prototyping',
  'Design Systems',
  'User Research',
  'Wireframing',
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="bg-gradient-to-b from-green-900 to-black text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Statistics */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center gap-12 md:gap-20 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-light mb-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                >
                  {stat.number}
                </motion.span>
                <span className="text-2xl md:text-4xl">{stat.suffix}</span>
              </div>
              <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-light leading-tight mb-8">
              I Design,<br />
              to make<br />
              things Work
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I&apos;m a passionate digital designer with over 8 years of experience crafting 
                beautiful and functional digital experiences. My approach combines creative 
                design thinking with strategic problem-solving.
              </p>
              <p>
                I specialize in creating user-centered designs that not only look stunning 
                but also drive business results. From concept to execution, I ensure every 
                detail serves a purpose.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                <span>About</span>
                <div className="w-6 h-6 border border-black rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile and skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile image placeholder */}
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mx-auto flex items-center justify-center relative overflow-hidden">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-light text-white/60">JK</span>
                </div>
                {/* Decorative badge */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-black text-center leading-tight">
                    MULTIDISCIPLINARY<br/>DESIGNER
                  </span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-light mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}