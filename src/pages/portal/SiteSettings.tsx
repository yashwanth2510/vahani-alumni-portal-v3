import { useState } from 'react'
import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import { useAuth } from '../../context/AuthContext'
import { useSiteSettings } from '../../context/SiteSettingsContext'

export default function SiteSettings() {
  const { role } = useAuth()
  const { birthdayWallEnabled, setBirthdayWallEnabled } = useSiteSettings()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  if (role !== 'admin') {
    return (
      <div>
        <PageHeader
          title="Site Settings"
          subtitle="Visibility controls are available to administrators."
          badge="Portal"
        />
        <Card className="text-center text-ink-400 py-10">
          Only admins can change site settings.
        </Card>
      </div>
    )
  }

  const toggle = async () => {
    setSaving(true)
    setError('')
    try {
      await setBirthdayWallEnabled(!birthdayWallEnabled)
    } catch {
      setError('Could not update Birthday Wall visibility.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <PageHeader
        title="Site Settings"
        subtitle="Control which public sections are visible to alumni and visitors."
        badge="Admin"
      />

      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="min-w-0">
            <h2 className="font-display text-xl font-semibold text-ink-900 mb-1">Show Birthday Wall</h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              {birthdayWallEnabled
                ? 'Visible to everyone in the public navigation.'
                : 'Hidden from visitors and alumni. Admins can still open it to preview.'}
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={birthdayWallEnabled}
            aria-label="Show Birthday Wall"
            disabled={saving}
            onClick={toggle}
            className="toggle-switch"
          >
            <span className="toggle-switch-knob" />
          </button>
        </div>
        {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
      </Card>
    </div>
  )
}
