import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assetUrl } from '../api/client'
import Icon from '../components/Icon'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(username, password)
      navigate('/portal/alumni')
    } catch {
      setError('Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-8">
      <div className="reveal card overflow-hidden grid md:grid-cols-2 p-0">
        {/* Brand panel */}
        <div className="relative hidden md:flex flex-col justify-between bg-gradient-to-br from-navy-800 via-navy-900 to-clay-800 p-10 text-white">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.14]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <img
              src={assetUrl('Vahani Alumni Association Logo.png')}
              alt=""
              className="w-14 h-14 object-contain rounded-2xl bg-white/10 p-1 mb-8"
            />
            <h1 className="font-display text-3xl leading-tight mb-3">Welcome back to the community</h1>
            <p className="text-white/70 text-sm leading-relaxed">
              One place to reconnect with alumni, explore opportunities, mentor the next generation, and give back.
            </p>
          </div>
          <div className="relative space-y-3 text-sm text-white/80">
            {[
              { icon: 'users' as const, label: 'Alumni directory & network' },
              { icon: 'briefcase' as const, label: 'Jobs & internships' },
              { icon: 'handshake' as const, label: 'Mentorship — Vijayibhawa' },
            ].map((f) => (
              <p key={f.label} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-gold-200">
                  <Icon name={f.icon} size={16} />
                </span>
                {f.label}
              </p>
            ))}
          </div>
        </div>

        {/* Form panel */}
        <div className="p-7 sm:p-10">
          <div className="text-center mb-8">
            <img
              src={assetUrl('Vahani Alumni Association Logo.png')}
              alt="Logo"
              className="w-14 h-14 object-contain mx-auto mb-4 md:hidden"
            />
            <span className="eyebrow mb-3 justify-center">Secure Sign In</span>
            <h2 className="font-display text-3xl text-ink-900">Internal Portal</h2>
            <p className="text-sm text-ink-400 mt-2">Sign in to access alumni resources</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-ink-600 mb-1.5">Username</label>
              <input
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                autoComplete="username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink-600 mb-1.5">Password</label>
              <input
                type="password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>
            {error && (
              <div className="px-4 py-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}
            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? (
                'Signing in…'
              ) : (
                <>
                  <Icon name="lock" size={15} />
                  Sign In
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
