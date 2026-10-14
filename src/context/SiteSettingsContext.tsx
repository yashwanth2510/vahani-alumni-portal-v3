import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { fetchSiteSettings, updateSiteSettings } from '../api/client'

interface SiteSettingsState {
  birthdayWallEnabled: boolean
  loading: boolean
  setBirthdayWallEnabled: (enabled: boolean) => Promise<void>
}

const SiteSettingsContext = createContext<SiteSettingsState | null>(null)

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [birthdayWallEnabled, setEnabled] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSiteSettings()
      .then(({ data }) => setEnabled(data.birthday_wall_enabled))
      .catch(() => setEnabled(true))
      .finally(() => setLoading(false))
  }, [])

  const setBirthdayWallEnabled = useCallback(async (enabled: boolean) => {
    const { data } = await updateSiteSettings({ birthday_wall_enabled: enabled })
    setEnabled(data.birthday_wall_enabled)
  }, [])

  const value = useMemo<SiteSettingsState>(
    () => ({ birthdayWallEnabled, loading, setBirthdayWallEnabled }),
    [birthdayWallEnabled, loading, setBirthdayWallEnabled],
  )

  return <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>
}

export function useSiteSettings() {
  const ctx = useContext(SiteSettingsContext)
  if (!ctx) throw new Error('useSiteSettings must be used within SiteSettingsProvider')
  return ctx
}
