import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { login as apiLogin } from '../api/client'

interface AuthState {
  token: string | null
  role: string | null
  username: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthState | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(localStorage.getItem('vap_token'))
  const [role, setRole] = useState<string | null>(localStorage.getItem('vap_role'))
  const [username, setUsername] = useState<string | null>(localStorage.getItem('vap_username'))

  const value = useMemo<AuthState>(
    () => ({
      token,
      role,
      username,
      isAuthenticated: !!token,
      async login(u: string, p: string) {
        const { data } = await apiLogin(u, p)
        localStorage.setItem('vap_token', data.access_token)
        localStorage.setItem('vap_role', data.role)
        localStorage.setItem('vap_username', data.username)
        setToken(data.access_token)
        setRole(data.role)
        setUsername(data.username)
      },
      logout() {
        localStorage.removeItem('vap_token')
        localStorage.removeItem('vap_role')
        localStorage.removeItem('vap_username')
        setToken(null)
        setRole(null)
        setUsername(null)
      },
    }),
    [token, role, username],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
