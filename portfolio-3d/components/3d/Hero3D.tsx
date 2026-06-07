'use client'

import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'

interface Hero3DProps {
  isVisible?: boolean
}

export default function Hero3D({ isVisible = true }: Hero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="w-full h-screen bg-dark relative">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 300], fov: 75 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.4} color="#ffffff" />
        <pointLight position={[0, 0, 200]} intensity={2} color="#FF6A00" />

        {/* Placeholder mesh */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[100, 100, 100]} />
          <meshStandardMaterial color="#FF6A00" emissive="#FF6A00" emissiveIntensity={0.5} />
        </mesh>
      </Canvas>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-7xl md:text-9xl font-satoshi font-bold text-center text-white mb-4 drop-shadow-lg">
          PHANINDRA
        </h1>
        <p className="text-xl md:text-2xl text-accent font-dm-sans font-bold tracking-widest">
          AI-POWERED CREATIVITY.
        </p>
        <button className="mt-12 px-8 py-4 bg-accent text-black font-satoshi font-bold rounded-lg hover:shadow-glow-intense transition-all duration-300 pointer-events-auto">
          START A PROJECT →
        </button>
      </div>
    </div>
  )
}
