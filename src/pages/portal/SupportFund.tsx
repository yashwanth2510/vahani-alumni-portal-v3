import { FormEvent, useEffect, useState } from 'react'
import {
  deleteSupportRequest,
  fetchSupportRequests,
  submitSupportRequest,
  updateSupportStatus,
  type SupportRequest,
} from '../../api/client'
import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import { useAuth } from '../../context/AuthContext'

export default function SupportFund() {
  const { role } = useAuth()
  const [requests, setRequests] = useState<SupportRequest[]>([])
  const [search, setSearch] = useState('')
  const [msg, setMsg] = useState('')

  const load = () => {
    if (role === 'admin') {
      fetchSupportRequests(search).then(({ data }) => setRequests(data))
    }
  }

  useEffect(() => { load() }, [role, search])

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    await submitSupportRequest(fd)
    setMsg('Your request has been submitted successfully.')
    e.currentTarget.reset()
  }

  return (
    <div>
      <PageHeader
        title="Alumni Support Fund"
        subtitle="Financial support for alumni facing medical emergencies, personal crises, or unforeseen challenges."
        badge="Community Care"
      />

      <Card className="mb-8 border-brand-200 bg-brand-50/60">
        <p className="text-ink-500 leading-relaxed">
          The <strong className="text-ink-900">Vahani Alumni Support Fund</strong> is powered by contributions from our
          alumni community and well-wishers. To contribute, reach out at{' '}
          <span className="text-brand-600 font-semibold">valumniassociation@gmail.com</span>.
        </p>
      </Card>

      {role === 'alumni' && (
        <>
          {msg && (
            <div className="mb-5 px-4 py-3 rounded-2xl bg-accent-50 border border-accent-200 text-accent-800 text-sm">
              {msg}
            </div>
          )}
          <Card className="max-w-xl">
            <h3 className="font-display text-2xl font-semibold text-ink-900 mb-4">Apply for Support</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <input name="name" placeholder="Full Name *" required className="input-field" />
              <input name="alumni_batch" placeholder="Vahani Scholar Batch *" required className="input-field" />
              <input name="email" type="email" placeholder="Email *" required className="input-field" />
              <input name="phone" placeholder="Contact Number *" required className="input-field" />
              <textarea name="reason" placeholder="Reason for Support Request *" required rows={4} className="input-field resize-none" />
              <input name="requested_amount" type="number" min={0} step={1000} placeholder="Requested Amount (INR)" className="input-field" />
              <div>
                <label className="text-sm text-ink-500 mb-1 block font-semibold">Supporting Document (PDF)</label>
                <input name="supporting_document" type="file" accept=".pdf" className="text-sm text-ink-500" />
              </div>
              <button type="submit" className="btn-primary">Submit Request</button>
            </form>
          </Card>
        </>
      )}

      {role === 'admin' && (
        <div>
          <input
            className="input-field max-w-md mb-5"
            placeholder="Search by name, email or batch..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {requests.length === 0 ? (
            <Card className="text-center text-ink-400 py-10">No support requests yet.</Card>
          ) : (
            <div className="space-y-4">
              {requests.map((r) => (
                <Card key={r.id} hover padding="sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-ink-900">{r.name}</h4>
                      <p className="text-sm text-brand-600 font-semibold">Batch {r.alumni_batch}</p>
                    </div>
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${
                      r.status === 'Approved'
                        ? 'bg-accent-50 text-accent-700 border-accent-200'
                        : 'bg-brand-50 text-brand-700 border-brand-200'
                    }`}>
                      {r.status}
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-ink-500 space-y-1">
                    <p>{r.email} · {r.phone}</p>
                    <p>{r.reason}</p>
                    <p className="text-ink-700 font-semibold">Requested: ₹{r.requested_amount?.toLocaleString()}</p>
                    <p className="text-xs text-ink-400">{new Date(r.created_at).toLocaleString()}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {r.status !== 'Approved' && (
                      <button
                        type="button"
                        onClick={async () => { await updateSupportStatus(r.id, 'Approved'); load() }}
                        className="btn-primary text-xs py-2"
                      >
                        Approve
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={async () => { await deleteSupportRequest(r.id); load() }}
                      className="btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
