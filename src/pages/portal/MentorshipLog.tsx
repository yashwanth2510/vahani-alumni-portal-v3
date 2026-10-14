import { useEffect, useState } from 'react'
import {
  fetchMentorshipRequests,
  updateMentorshipStatus,
  type MentorshipRequest,
} from '../../api/client'
import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import { useAuth } from '../../context/AuthContext'

const STATUS_STYLES: Record<string, string> = {
  Pending: 'bg-brand-50 text-brand-700 border-brand-200',
  Accepted: 'bg-accent-50 text-accent-700 border-accent-200',
  Rejected: 'bg-red-50 text-red-700 border-red-200',
  Completed: 'bg-cream-deep text-ink-600 border-line',
}

export default function MentorshipLog() {
  const { role } = useAuth()
  const [requests, setRequests] = useState<MentorshipRequest[]>([])
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [audienceFilter, setAudienceFilter] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const load = () => {
    if (role !== 'admin') return
    setLoading(true)
    setError('')
    fetchMentorshipRequests({
      search,
      status: statusFilter || undefined,
      audience_type: audienceFilter || undefined,
    })
      .then(({ data }) => setRequests(data))
      .catch(() => setError('Could not load mentorship requests.'))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [role, search, statusFilter, audienceFilter])

  const setStatus = async (id: number, status: string) => {
    await updateMentorshipStatus(id, status)
    load()
  }

  if (role !== 'admin') {
    return (
      <div>
        <PageHeader
          title="Vijayibhawa Log"
          subtitle="Mentorship session tracking is available to administrators."
          badge="Portal"
        />
        <Card className="text-center text-ink-400 py-10">
          Only admins can view and update mentorship requests.
        </Card>
      </div>
    )
  }

  return (
    <div>
      <PageHeader
        title="Vijayibhawa Log"
        subtitle="Track who requested mentorship sessions and who accepted them."
        badge="Admin"
      />

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6">
        <input
          className="input-field max-w-md flex-1"
          placeholder="Search by name, email, mentor, topic..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="input-field max-w-[160px]"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All statuses</option>
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
          <option value="Completed">Completed</option>
        </select>
        <select
          className="input-field max-w-[180px]"
          value={audienceFilter}
          onChange={(e) => setAudienceFilter(e.target.value)}
        >
          <option value="">All audiences</option>
          <option value="internal">Vahani Scholars</option>
          <option value="external">Outside Vahani</option>
        </select>
      </div>

      {error && (
        <div className="mb-5 px-4 py-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

      {loading ? (
        <Card className="text-center text-ink-400 py-10">Loading…</Card>
      ) : requests.length === 0 ? (
        <Card className="text-center text-ink-400 py-10">No mentorship requests yet.</Card>
      ) : (
        <div className="space-y-4">
          {requests.map((r) => (
            <Card key={r.id} hover padding="sm">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <h4 className="font-semibold text-ink-900">{r.name}</h4>
                  <p className="text-sm text-brand-600 font-semibold">
                    {r.audience_type === 'internal' ? 'Vahani Scholar' : 'External'}
                    {r.vahani_scholar_batch ? ` · Batch ${r.vahani_scholar_batch}` : ''}
                    {r.organization ? ` · ${r.organization}` : ''}
                  </p>
                </div>
                <span
                  className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${
                    STATUS_STYLES[r.status] || 'bg-cream-deep text-ink-600 border-line'
                  }`}
                >
                  {r.status}
                </span>
              </div>

              <div className="mt-3 text-sm text-ink-500 space-y-1">
                <p>
                  <span className="text-ink-400">Mentor:</span>{' '}
                  <span className="text-ink-800">{r.alumni_name}</span>
                </p>
                <p>
                  <span className="text-ink-400">Topic:</span> {r.topic}
                </p>
                <p>
                  <span className="text-ink-400">Preferred:</span> {r.preferred_datetime || '—'}
                </p>
                <p>
                  {r.email}
                  {r.phone ? ` · ${r.phone}` : ''}
                </p>
                {r.message && <p className="text-ink-600">{r.message}</p>}
                {r.background && <p className="text-ink-600">Background: {r.background}</p>}
                <p className="text-xs text-ink-400">
                  Requested {new Date(r.created_at).toLocaleString()}
                  {r.reviewed_by
                    ? ` · Reviewed by ${r.reviewed_by}${
                        r.reviewed_at ? ` on ${new Date(r.reviewed_at).toLocaleString()}` : ''
                      }`
                    : ''}
                </p>
                {r.admin_notes && <p className="text-xs text-ink-500">Notes: {r.admin_notes}</p>}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {r.status === 'Pending' && (
                  <>
                    <button
                      type="button"
                      onClick={() => setStatus(r.id, 'Accepted')}
                      className="btn-primary text-xs py-2"
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus(r.id, 'Rejected')}
                      className="px-3 py-2 text-xs rounded-full border border-red-200 text-red-700 hover:bg-red-50 transition-colors"
                    >
                      Reject
                    </button>
                  </>
                )}
                {r.status === 'Accepted' && (
                  <button
                    type="button"
                    onClick={() => setStatus(r.id, 'Completed')}
                    className="btn-primary text-xs py-2"
                  >
                    Mark Completed
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
