'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Hero3D = dynamic(() => import('@/components/3d/Hero3D'), {
  loading: () => <div className="w-full h-screen bg-dark flex items-center justify-center">Loading...</div>,
  ssr: false,
})

const Services3D = dynamic(() => import('@/components/3d/Services3D'), { ssr: false })
const Portfolio3D = dynamic(() => import('@/components/3d/Portfolio3D'), { ssr: false })
const SkillsUniverse = dynamic(() => import('@/components/3d/SkillsUniverse'), { ssr: false })
const ContactForm3D = dynamic(() => import('@/components/3d/ContactForm3D'), { ssr: false })

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-dark overflow-x-hidden">
      <section className="relative w-full min-h-screen">
        <Suspense fallback={<div className="w-full h-screen bg-dark" />}>
          <Hero3D />
        </Suspense>
      </section>

      <section className="relative w-full min-h-screen bg-dark">
        <Suspense fallback={<div className="w-full h-screen bg-dark" />}>
          <Services3D />
        </Suspense>
      </section>

      <section className="relative w-full min-h-screen bg-dark">
        <Suspense fallback={<div className="w-full h-screen bg-dark" />}>
          <Portfolio3D />
        </Suspense>
      </section>

      <section className="relative w-full min-h-screen bg-dark">
        <Suspense fallback={<div className="w-full h-screen bg-dark" />}>
          <SkillsUniverse />
        </Suspense>
      </section>

      <section className="relative w-full min-h-screen bg-dark">
        <Suspense fallback={<div className="w-full h-screen bg-dark" />}>
          <ContactForm3D />
        </Suspense>
      </section>
    </main>
  )
}
