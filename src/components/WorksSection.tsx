'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Tappe',
    year: '2024',
    category: 'Mobile App Design',
    description: 'A financial tracking app with beautiful UI and seamless user experience',
    image: '/api/placeholder/600/400',
    color: 'bg-pink-100',
  },
  {
    id: 2,
    title: 'CodeSteak',
    year: '2024',
    category: 'Web Design',
    description: 'Modern restaurant website with online ordering system',
    image: '/api/placeholder/600/400',
    color: 'bg-blue-100',
  },
  {
    id: 3,
    title: 'Sendinblue',
    year: '2023',
    category: 'SaaS Design',
    description: 'Email marketing platform redesign focusing on user engagement',
    image: '/api/placeholder/600/400',
    color: 'bg-green-100',
  },
  {
    id: 4,
    title: 'Yaaco',
    year: '2023',
    category: 'Brand Identity',
    description: 'Complete brand identity design for a modern tech startup',
    image: '/api/placeholder/600/400',
    color: 'bg-purple-100',
  },
]

interface ProjectModalProps {
  project: typeof projects[0] | null
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold text-black mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.category} • {project.year}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className={`aspect-video ${project.color} rounded-xl mb-6 flex items-center justify-center`}>
            <span className="text-6xl font-light text-black/20">{project.title[0]}</span>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {project.description}
          </p>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
              View Live <ExternalLink size={16} />
            </button>
            <button className="px-6 py-3 border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition-colors">
              Case Study
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function WorksSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <>
      <section id="works" className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-6xl md:text-8xl font-light mb-8">Works</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              A collection of projects that showcase design excellence and innovative solutions across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <div className={`aspect-[4/3] ${project.color} flex items-center justify-center relative`}>
                    <span className="text-8xl font-light text-black/20 select-none">
                      {project.title[0]}
                    </span>
                    
                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-black/70 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300">{project.year}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className="text-gray-400 text-sm">0{project.id}</span>
                  </div>
                  <p className="text-gray-400">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}