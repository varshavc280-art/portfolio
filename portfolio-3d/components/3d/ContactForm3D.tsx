'use client'

import React, { useState } from 'react'

export default function ContactForm3D() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    category: 'branding',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="w-full min-h-screen bg-dark py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs md:text-sm uppercase tracking-widest text-accent font-dm-sans font-bold mb-4 text-center">
          GET IN TOUCH
        </p>
        <h2 className="text-4xl md:text-6xl font-satoshi font-bold text-white mb-4 text-center">
          YOUR BRAND. OUR CREATIVITY.
        </h2>
        <p className="text-center text-accent font-satoshi font-bold mb-12">Unlimited Growth</p>

        <form onSubmit={handleSubmit} className="glass-dark p-8 rounded-lg space-y-6">
          <div>
            <label className="text-xs uppercase tracking-widest text-gray-400 font-dm-sans font-bold mb-2 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-dark-secondary/50 border border-accent/30 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none focus:shadow-glow transition-all"
              required
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-gray-400 font-dm-sans font-bold mb-2 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-dark-secondary/50 border border-accent/30 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none focus:shadow-glow transition-all"
              required
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-gray-400 font-dm-sans font-bold mb-2 block">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-dark-secondary/50 border border-accent/30 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none focus:shadow-glow transition-all resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-black font-satoshi font-bold py-3 rounded-lg hover:shadow-glow-intense transition-all duration-300 active:scale-95"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  )
}
