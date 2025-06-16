'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Star, ArrowRight } from 'lucide-react'

const shopItems = [
  {
    id: 1,
    title: 'UI/UX Design Package',
    price: '$2,999',
    originalPrice: '$3,499',
    rating: 5,
    reviews: 24,
    description: 'Complete UI/UX design for web or mobile application including wireframes, prototypes, and design system.',
    features: ['Wireframes', 'High-fidelity designs', 'Prototypes', 'Design System'],
    image: 'bg-gradient-to-br from-blue-500 to-purple-600',
    badge: 'Popular',
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    price: '$1,999',
    originalPrice: '$2,299',
    rating: 5,
    reviews: 18,
    description: 'Complete brand identity package including logo, color palette, typography, and brand guidelines.',
    features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography'],
    image: 'bg-gradient-to-br from-green-500 to-teal-600',
    badge: 'New',
  },
  {
    id: 3,
    title: 'Website Redesign',
    price: '$4,999',
    originalPrice: '$5,999',
    rating: 5,
    reviews: 31,
    description: 'Complete website redesign with modern UI, improved UX, and conversion optimization.',
    features: ['Responsive Design', 'SEO Optimization', 'Speed Optimization', 'Analytics Setup'],
    image: 'bg-gradient-to-br from-orange-500 to-red-600',
    badge: 'Hot',
  },
  {
    id: 4,
    title: 'Design Consultation',
    price: '$299',
    originalPrice: '$399',
    rating: 5,
    reviews: 42,
    description: '1-hour design consultation call to discuss your project and provide expert advice.',
    features: ['60-min Call', 'Design Audit', 'Recommendations', 'Follow-up Report'],
    image: 'bg-gradient-to-br from-pink-500 to-rose-600',
    badge: 'Quick',
  },
]

export default function ShopSection() {
  return (
    <section id="shop" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-light mb-8">Shop</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready-to-go design services and packages to kickstart your project with professional quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shopItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.badge === 'Popular' ? 'bg-blue-500 text-white' :
                      item.badge === 'New' ? 'bg-green-500 text-white' :
                      item.badge === 'Hot' ? 'bg-red-500 text-white' :
                      'bg-pink-500 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className={`aspect-[4/3] ${item.image} flex items-center justify-center relative`}>
                  <ShoppingBag size={48} className="text-white/80" />
                </div>

                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({item.reviews})</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-white">{item.price}</span>
                    <span className="text-lg text-gray-500 line-through">{item.originalPrice}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {item.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                    {item.features.length > 3 && (
                      <div className="text-sm text-gray-500">
                        +{item.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
                  >
                    Get Started
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Need something custom?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
                         Let&apos;s discuss your project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 