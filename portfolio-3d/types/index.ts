// Project types
export interface Project {
  _id: string
  title: string
  slug: string
  category: 'branding' | 'web' | 'video' | 'ai-design'
  description: string
  challenge?: string
  solution?: string
  results?: string
  imageUrl: string
  videoUrl?: string
  technologies: string[]
  link?: string
  featured: boolean
  createdAt: string
  updatedAt: string
}

// Skill types
export interface Skill {
  _id: string
  name: string
  category: 'frontend' | 'backend' | 'design' | 'video' | 'ai'
  level: 1 | 2 | 3 | 4 | 5
  icon?: string
  yearsExp?: number
  createdAt: string
}

// Contact types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  category: 'branding' | 'web' | 'video' | 'ai' | 'other'
}

export interface ContactSubmission {
  _id: string
  name: string
  email: string
  phone?: string
  message: string
  category: string
  createdAt: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  error?: string
}

// 3D Scene types
export interface ParticleConfig {
  count: number
  size: number
  speed: number
  color: string
}

export interface CameraConfig {
  position: [number, number, number]
  fov: number
  near?: number
  far?: number
}
