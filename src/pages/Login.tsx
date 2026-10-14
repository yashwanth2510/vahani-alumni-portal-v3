import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assetUrl } from '../api/client'
import Card from '../components/Card'
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
    <div className="max-w-md mx-auto">
      <Card className="overflow-hidden">
        <div className="text-center mb-8">
          <img src={assetUrl('Vahani Alumni Association Logo.png')} alt="Logo" className="w-16 mx-auto mb-4" />
          <h2 className="font-display text-3xl font-semibold text-ink-900">Internal Portal</h2>
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
          <button type="submit" disabled={loading} className="btn-primary w-full py-3">
            {loading ? 'Signing in…' : (
              <>
                <Icon name="lock" size={15} />
                Sign In
              </>
            )}
          </button>
        </form>
      </Card>
    </div>
  )
}
