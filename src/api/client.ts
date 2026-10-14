import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('vap_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export interface LoginResponse {
  access_token: string
  token_type: string
  role: string
  username: string
}

export interface Alumni {
  id: number
  name: string
  scholar_batch?: string
  job_profile?: string
  company_name?: string
  field_of_work?: string
  email?: string
  linkedin?: string
  photo_filename?: string
  photo_url?: string
  is_mentor?: boolean
}

export interface Job {
  id: number
  name?: string
  company?: string
  role?: string
  location?: string
  description?: string
  link?: string
  date_posted?: string
  deadline?: string
  referral_contact?: string
  status: string
}

export interface Referral {
  id: number
  user_name?: string
  user_email?: string
  user_vahani_scholar_batch?: string
  opportunity?: string
  referral_contact?: string
  resume_file?: string
  cv_file?: string
  portfolio_link?: string
  status: string
  referral_person_name?: string
}

export interface SupportRequest {
  id: number
  name: string
  alumni_batch?: string
  email?: string
  phone?: string
  reason?: string
  supporting_document?: string
  requested_amount: number
  status: string
  created_at: string
}

export interface MentorshipRequest {
  id: number
  audience_type: 'internal' | 'external' | string
  name: string
  email: string
  phone?: string
  vahani_scholar_batch?: string
  organization?: string
  background?: string
  alumni_id: number
  alumni_name: string
  topic: string
  preferred_datetime?: string
  message?: string
  status: string
  reviewed_by?: string
  reviewed_at?: string
  admin_notes?: string
  created_at: string
}

export type MentorshipAudience = 'internal' | 'external'

export interface MentorshipRequestPayload {
  audience_type: MentorshipAudience
  name: string
  email: string
  phone?: string
  vahani_scholar_batch?: string
  organization?: string
  background?: string
  alumni_id: number
  topic: string
  preferred_datetime?: string
  message?: string
}

export const login = (username: string, password: string) =>
  api.post<LoginResponse>('/auth/login', { username, password })

export const fetchAlumni = (search = '', page = 1) =>
  api.get<{ items: Alumni[]; total: number }>('/alumni', { params: { search, page } })

export const fetchJobs = (status?: string) =>
  api.get<Job[]>('/jobs', { params: status ? { status } : {} })

export const createJob = (data: Partial<Job>) => api.post<Job>('/jobs', data)

export const deleteJob = (id: number) => api.delete(`/jobs/${id}`)

export const fetchReferrals = (status?: string) =>
  api.get<Referral[]>('/jobs/referrals/all', { params: status ? { status } : {} })

export const updateReferralStatus = (id: number, status: string) =>
  api.patch(`/jobs/referrals/${id}/status`, { status })

export const submitReferral = (jobId: number, form: FormData) =>
  api.post(`/jobs/${jobId}/referrals`, form, { headers: { 'Content-Type': 'multipart/form-data' } })

export const fetchSupportRequests = (search = '') =>
  api.get<SupportRequest[]>('/support-requests', { params: { search } })

export const submitSupportRequest = (form: FormData) =>
  api.post('/support-requests', form, { headers: { 'Content-Type': 'multipart/form-data' } })

export const updateSupportStatus = (id: number, status: string) =>
  api.patch(`/support-requests/${id}/status`, { status })

export const deleteSupportRequest = (id: number) => api.delete(`/support-requests/${id}`)

export const fetchMentors = (search = '', page = 1) =>
  api.get<{ items: Alumni[]; total: number; page: number; page_size: number }>('/mentorship/mentors', {
    params: { search, page },
  })

export const submitMentorshipRequest = (data: MentorshipRequestPayload) =>
  api.post<MentorshipRequest>('/mentorship/requests', data)

export const fetchMentorshipRequests = (params?: { search?: string; status?: string; audience_type?: string }) =>
  api.get<MentorshipRequest[]>('/mentorship/requests', { params })

export const updateMentorshipStatus = (id: number, status: string, admin_notes?: string) =>
  api.patch<MentorshipRequest>(`/mentorship/requests/${id}/status`, { status, admin_notes })

export interface SiteSettings {
  birthday_wall_enabled: boolean
}

export const fetchSiteSettings = () => api.get<SiteSettings>('/settings')

export const updateSiteSettings = (data: SiteSettings) => api.patch<SiteSettings>('/settings', data)

export const assetUrl = (path: string) => `/api/static/${encodeURI(path)}`

export default api
