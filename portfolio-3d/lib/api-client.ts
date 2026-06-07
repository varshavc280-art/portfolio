import axios from 'axios'
import type { Project, Skill, ContactFormData, ApiResponse } from '@/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Projects
export const getProjects = () => apiClient.get<ApiResponse<Project[]>>('/api/projects')
export const getProjectById = (id: string) => apiClient.get<ApiResponse<Project>>(`/api/projects/${id}`)
export const createProject = (data: any) => apiClient.post<ApiResponse<Project>>('/api/projects', data)
export const updateProject = (id: string, data: any) => apiClient.put<ApiResponse<Project>>(`/api/projects/${id}`, data)
export const deleteProject = (id: string) => apiClient.delete<ApiResponse>(`/api/projects/${id}`)

// Skills
export const getSkills = () => apiClient.get<ApiResponse<Skill[]>>('/api/skills')
export const createSkill = (data: any) => apiClient.post<ApiResponse<Skill>>('/api/skills', data)

// Contact
export const submitContact = (data: ContactFormData) =>
  apiClient.post<ApiResponse>('/api/contact', data)

export const getContactSubmissions = () =>
  apiClient.get<ApiResponse>('/api/contact')

// Error handler
export const handleApiError = (error: any): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || error.message
  }
  return 'An unexpected error occurred'
}
