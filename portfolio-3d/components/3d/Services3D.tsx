'use client'

import React from 'react'

export default function Services3D() {
  const services = [
    { id: 1, title: 'AI Design', description: 'AI-assisted visual creation for brands' },
    { id: 2, title: 'Branding', description: 'Identity systems that last' },
    { id: 3, title: 'Web & App Development', description: 'React, Next.js, WordPress, custom solutions' },
    { id: 4, title: 'Video Editing & Motion', description: 'Reels, ads, shorts, motion graphics' },
    { id: 5, title: 'Social Media Growth', description: 'Content strategy and execution' },
    { id: 6, title: 'Strategy & Consulting', description: 'Growth-focused creative direction' },
  ]

  return (
    <div className="w-full min-h-screen bg-dark py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs md:text-sm uppercase tracking-widest text-accent font-dm-sans font-bold mb-4">
          WHAT I DO
        </p>
        <h2 className="text-4xl md:text-6xl font-satoshi font-bold text-white mb-16">
          Creativity Meets Technology
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-dark p-8 rounded-lg border border-accent/20 hover:border-accent/100 transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-accent rounded-lg mb-4"></div>
              <h3 className="text-xl font-satoshi font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
