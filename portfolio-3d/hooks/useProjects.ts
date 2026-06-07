import { useEffect, useState } from 'react'
import { getProjects, handleApiError } from '@/lib/api-client'
import type { Project } from '@/types'

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const response = await getProjects()
        setProjects(response.data.data || [])
        setError(null)
      } catch (err) {
        const message = handleApiError(err)
        setError(message)
        console.error('Failed to fetch projects:', message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return { projects, loading, error }
}
