import { useEffect, useState } from 'react'
import { getSkills, handleApiError } from '@/lib/api-client'
import type { Skill } from '@/types'

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true)
        const response = await getSkills()
        setSkills(response.data.data || [])
        setError(null)
      } catch (err) {
        const message = handleApiError(err)
        setError(message)
        console.error('Failed to fetch skills:', message)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  const groupByCategory = () => {
    const grouped: Record<string, Skill[]> = {}
    skills.forEach((skill) => {
      if (!grouped[skill.category]) {
        grouped[skill.category] = []
      }
      grouped[skill.category].push(skill)
    })
    return grouped
  }

  return { skills, loading, error, groupByCategory }
}
