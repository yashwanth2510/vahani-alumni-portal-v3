import { FormEvent, useEffect, useState } from 'react'
import {
  fetchMentors,
  submitMentorshipRequest,
  type Alumni,
  type MentorshipAudience,
} from '../api/client'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'

export default function Vijayibhawa() {
  const [audience, setAudience] = useState<MentorshipAudience>('internal')
  const [search, setSearch] = useState('')
  const [mentors, setMentors] = useState<Alumni[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Alumni | null>(null)
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      fetchMentors(search)
        .then(({ data }) => {
          setMentors(data.items)
          setTotal(data.total)
        })
        .catch(() => setError('Could not load mentors. Please try again.'))
        .finally(() => setLoading(false))
    }, 300)
    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    setSelected(null)
    setMsg('')
    setError('')
  }, [audience])

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selected) return
    setSubmitting(true)
    setError('')
    setMsg('')
    const fd = new FormData(e.currentTarget)
    try {
      await submitMentorshipRequest({
        audience_type: audience,
        name: String(fd.get('name') || ''),
        email: String(fd.get('email') || ''),
        phone: String(fd.get('phone') || '') || undefined,
        vahani_scholar_batch: String(fd.get('vahani_scholar_batch') || '') || undefined,
        organization: String(fd.get('organization') || '') || undefined,
        background: String(fd.get('background') || '') || undefined,
        alumni_id: selected.id,
        topic: String(fd.get('topic') || ''),
        preferred_datetime: String(fd.get('preferred_datetime') || '') || undefined,
        message: String(fd.get('message') || '') || undefined,
      })
      setMsg(`Your session request with ${selected.name} has been submitted. We will follow up by email.`)
      e.currentTarget.reset()
      setSelected(null)
    } catch {
      setError('Could not submit your request. Please check the form and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <PageHeader
        title="Vijayibhawa"
        subtitle="Book a mentorship session with Vahani alumni — for scholars inside Vahani and learners beyond."
        badge="Mentorship"
      />

      <Card className="mb-8 border-accent-200 bg-accent-50/60">
        <p className="text-ink-500 leading-relaxed">
          <strong className="text-ink-900">Vijayibhawa</strong> connects mentees with Vahani alumni mentors. Choose a
          mentor, share your goals, and request a session. The Alumni Committee reviews every request.
        </p>
      </Card>

      <div className="inline-flex flex-wrap gap-1 p-1 rounded-full bg-cream-deep border border-line mb-5" role="tablist" aria-label="Audience">
        {(
          [
            ['internal', 'Vahani Scholars'],
            ['external', 'Outside Vahani'],
          ] as [MentorshipAudience, string][]
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={audience === value}
            onClick={() => setAudience(value)}
            className="tab-pill"
            data-active={audience === value}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="text-sm text-ink-500 mb-5">
        {audience === 'internal'
          ? 'For current and former Vahani scholars seeking guidance from alumni mentors.'
          : 'For people outside Vahani who want to learn from Vahani alumni mentors.'}
      </p>

      {msg && (
        <div className="mb-5 px-4 py-3 rounded-2xl bg-accent-50 border border-accent-200 text-accent-800 text-sm">
          {msg}
        </div>
      )}
      {error && (
        <div className="mb-5 px-4 py-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <div className="relative mb-5 max-w-lg">
            <Icon name="search" size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
            <input
              className="input-field pl-11"
              placeholder="Search mentors by name, batch, company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="card p-5 animate-pulse">
                  <div className="w-20 h-20 bg-cream-deep rounded-full mx-auto mb-3" />
                  <div className="h-4 bg-cream-deep rounded w-3/4 mx-auto mb-2" />
                  <div className="h-3 bg-cream-deep rounded w-1/2 mx-auto" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <p className="text-sm text-ink-400 mb-4">
                <span className="text-brand-600 font-semibold">{total}</span> mentors available
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mentors.map((m) => {
                  const active = selected?.id === m.id
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setSelected(m)}
                      className={`text-left rounded-3xl p-5 border transition-all ${
                        active
                          ? 'bg-brand-50 border-brand-300 ring-2 ring-brand-200'
                          : 'card card-hover border-line'
                      }`}
                    >
                      <img
                        src={m.photo_url || '/api/static/photos/default.jpg'}
                        alt={m.name}
                        className="w-20 h-20 object-cover rounded-full border-2 border-brand-100 mx-auto mb-3"
                      />
                      <h3 className="font-display text-lg font-semibold text-ink-900 text-center mb-1">{m.name}</h3>
                      <p className="text-xs text-brand-600 font-semibold text-center mb-2">
                        Batch {m.scholar_batch || '—'}
                      </p>
                      <div className="text-xs text-ink-400 space-y-0.5 text-center">
                        <p>{m.job_profile || '—'}</p>
                        <p>{m.company_name || '—'}</p>
                        <p>{m.field_of_work || '—'}</p>
                      </div>
                      {active && (
                        <p className="mt-3 text-center text-xs font-bold uppercase tracking-wide text-brand-600 flex items-center justify-center gap-1">
                          <Icon name="check" size={13} /> Selected
                        </p>
                      )}
                    </button>
                  )
                })}
              </div>
              {mentors.length === 0 && <Card className="text-center text-ink-400 py-10">No mentors found.</Card>}
            </>
          )}
        </div>

        <div className="lg:col-span-2">
          <Card className="lg:sticky lg:top-24">
            <h3 className="font-display text-2xl font-semibold text-ink-900 mb-1">Request a session</h3>
            <p className="text-sm text-ink-400 mb-4">
              {selected ? (
                <>
                  Mentoring with <span className="text-brand-600 font-semibold">{selected.name}</span>
                </>
              ) : (
                'Select a mentor to continue'
              )}
            </p>

            <form onSubmit={onSubmit} className="space-y-3">
              <input name="name" placeholder="Full Name *" required className="input-field" disabled={!selected} />
              <input name="email" type="email" placeholder="Email *" required className="input-field" disabled={!selected} />
              <input name="phone" placeholder="Contact Number" className="input-field" disabled={!selected} />

              {audience === 'internal' ? (
                <input
                  name="vahani_scholar_batch"
                  placeholder="Vahani Scholar Batch *"
                  required
                  className="input-field"
                  disabled={!selected}
                />
              ) : (
                <>
                  <input name="organization" placeholder="Organization / School" className="input-field" disabled={!selected} />
                  <textarea
                    name="background"
                    placeholder="Brief background"
                    rows={2}
                    className="input-field resize-none"
                    disabled={!selected}
                  />
                </>
              )}

              <input name="topic" placeholder="Session topic *" required className="input-field" disabled={!selected} />
              <input name="preferred_datetime" placeholder="Preferred date & time" className="input-field" disabled={!selected} />
              <textarea
                name="message"
                placeholder="What do you hope to discuss?"
                rows={3}
                className="input-field resize-none"
                disabled={!selected}
              />
              <button type="submit" className="btn-primary w-full" disabled={!selected || submitting}>
                {submitting ? 'Submitting…' : 'Submit Request'}
              </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
