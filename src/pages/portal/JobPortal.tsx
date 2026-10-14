import { FormEvent, useEffect, useState } from 'react'
import {
  createJob,
  deleteJob,
  fetchJobs,
  fetchReferrals,
  submitReferral,
  updateReferralStatus,
  type Job,
  type Referral,
} from '../../api/client'
import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import Icon from '../../components/Icon'
import { useAuth } from '../../context/AuthContext'

type Tab = 'post' | 'open' | 'closed' | 'referral' | 'admin'

export default function JobPortal() {
  const { role } = useAuth()
  const [tab, setTab] = useState<Tab>('open')
  const [jobs, setJobs] = useState<Job[]>([])
  const [referrals, setReferrals] = useState<Referral[]>([])
  const [msg, setMsg] = useState('')

  const load = () => {
    fetchJobs().then(({ data }) => setJobs(data))
    fetchReferrals().then(({ data }) => setReferrals(data))
  }

  useEffect(() => { load() }, [])

  const openJobs = jobs.filter((j) => j.status === 'Open')
  const closedJobs = jobs.filter((j) => j.status === 'Closed')

  const postJob = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    await createJob({
      name: String(fd.get('name') || 'Anonymous'),
      company: String(fd.get('company') || 'Not Specified'),
      role: String(fd.get('role') || 'Not Specified'),
      location: String(fd.get('location') || 'Not Specified'),
      description: String(fd.get('description') || ''),
      link: String(fd.get('link') || '#'),
      date_posted: String(fd.get('date_posted') || undefined),
      deadline: String(fd.get('deadline') || undefined),
      referral_contact: String(fd.get('referral_contact') || ''),
    })
    setMsg('Opportunity posted successfully!')
    load()
    e.currentTarget.reset()
  }

  const submitRef = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const jobId = Number(fd.get('job_id'))
    if (!jobId) return
    await submitReferral(jobId, fd)
    setMsg('Referral request submitted!')
    load()
    e.currentTarget.reset()
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'post', label: 'Post' },
    { id: 'open', label: `Open (${openJobs.length})` },
    { id: 'closed', label: `Closed (${closedJobs.length})` },
    { id: 'referral', label: 'Referral' },
    ...(role === 'admin' ? [{ id: 'admin' as Tab, label: 'Admin' }] : []),
  ]

  const JobCard = ({ job }: { job: Job }) => (
    <Card hover padding="sm" className="mb-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-display text-xl font-semibold text-ink-900">{job.role}</h4>
          <p className="text-brand-600 text-sm font-semibold">{job.company}</p>
        </div>
        <span
          className={`shrink-0 px-3 py-0.5 text-xs font-bold rounded-full border ${
            job.status === 'Open'
              ? 'bg-accent-50 text-accent-700 border-accent-200'
              : 'bg-cream-deep text-ink-500 border-line'
          }`}
        >
          {job.status}
        </span>
      </div>
      <div className="mt-3 text-sm text-ink-500 space-y-1">
        <p className="flex items-center gap-2"><Icon name="map-pin" size={15} className="text-ink-400" /> {job.location}</p>
        <p className="flex items-center gap-2">
          <Icon name="calendar" size={15} className="text-ink-400" />
          Posted: {job.date_posted || 'N/A'} · Deadline: {job.deadline || 'N/A'}
        </p>
        <p className="flex items-center gap-2"><Icon name="users" size={15} className="text-ink-400" /> {job.name}</p>
        {job.description && <p className="text-ink-600 pt-1">{job.description}</p>}
        {job.link && job.link !== '#' && (
          <a
            href={job.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 font-semibold text-brand-600 hover:text-brand-700"
          >
            Apply here <Icon name="arrow-right" size={14} />
          </a>
        )}
      </div>
      {role === 'admin' && (
        <button type="button" onClick={async () => { await deleteJob(job.id); load() }} className="btn-danger mt-3 text-xs">
          Delete
        </button>
      )}
    </Card>
  )

  return (
    <div>
      <PageHeader
        title="Job / Internship Portal"
        subtitle="Post opportunities, browse openings, and request referrals from fellow alumni."
        badge="Careers"
      />

      {msg && (
        <div className="mb-5 px-4 py-3 rounded-2xl bg-accent-50 border border-accent-200 text-accent-800 text-sm">
          {msg}
        </div>
      )}

      <div className="scroll-tabs mb-6 bg-cream-deep rounded-full border border-line w-full">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            data-active={tab === t.id}
            className="tab-pill shrink-0"
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'post' && (
        <Card className="max-w-xl">
          <h3 className="font-display text-2xl font-semibold text-ink-900 mb-4">Post an Opportunity</h3>
          <form onSubmit={postJob} className="space-y-4">
            <input name="name" placeholder="Your Name" className="input-field" />
            <input name="company" placeholder="Company Name *" required className="input-field" />
            <input name="role" placeholder="Job/Internship Role *" required className="input-field" />
            <input name="location" placeholder="Location" className="input-field" />
            <textarea name="description" placeholder="Description" rows={3} className="input-field resize-none" />
            <input name="link" placeholder="Application Link" className="input-field" />
            <div className="grid grid-cols-2 gap-3">
              <input name="date_posted" type="date" className="input-field" />
              <input name="deadline" type="date" className="input-field" />
            </div>
            <input name="referral_contact" placeholder="Referral Contact" className="input-field" />
            <button type="submit" className="btn-primary">Post Opportunity</button>
          </form>
        </Card>
      )}

      {tab === 'open' &&
        (openJobs.length ? (
          openJobs.map((j) => <JobCard key={j.id} job={j} />)
        ) : (
          <Card className="text-center text-ink-400 py-10">No open opportunities right now.</Card>
        ))}
      {tab === 'closed' &&
        (closedJobs.length ? (
          closedJobs.map((j) => <JobCard key={j.id} job={j} />)
        ) : (
          <Card className="text-center text-ink-400 py-10">No closed opportunities.</Card>
        ))}

      {tab === 'referral' && (
        <div>
          {openJobs.length === 0 ? (
            <Card className="text-center text-ink-400 py-10">No open opportunities for referral.</Card>
          ) : (
            <Card className="max-w-xl mb-8">
              <h3 className="font-display text-2xl font-semibold text-ink-900 mb-4">Request a Referral</h3>
              <form onSubmit={submitRef} className="space-y-4">
                <input name="user_name" placeholder="Your Name *" required className="input-field" />
                <input name="user_email" type="email" placeholder="Your Email *" required className="input-field" />
                <input name="user_vahani_scholar_batch" placeholder="Vahani Scholar Batch *" required className="input-field" />
                <select name="job_id" required className="input-field">
                  <option value="">Select Opportunity</option>
                  {openJobs.map((j) => (
                    <option key={j.id} value={j.id}>{j.role} at {j.company}</option>
                  ))}
                </select>
                <input name="referral_person_name" placeholder="Referral Person Name *" required className="input-field" />
                <input name="referral_contact" type="email" placeholder="Referral Contact Email *" required className="input-field" />
                <input name="portfolio_link" placeholder="Portfolio Link" className="input-field" />
                <div>
                  <label className="text-sm text-ink-500 mb-1 block font-semibold">Resume (PDF)</label>
                  <input name="resume" type="file" accept=".pdf" className="text-sm text-ink-500" />
                </div>
                <div>
                  <label className="text-sm text-ink-500 mb-1 block font-semibold">Cover Letter (PDF)</label>
                  <input name="cv" type="file" accept=".pdf" className="text-sm text-ink-500" />
                </div>
                <button type="submit" className="btn-primary">Submit Referral</button>
              </form>
            </Card>
          )}

          {role === 'admin' && referrals.length > 0 && (
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink-900 mb-4">All Referrals</h3>
              {referrals.map((r) => (
                <Card key={r.id} padding="sm" className="mb-3">
                  <p className="font-semibold text-ink-900">{r.user_name} · {r.opportunity}</p>
                  <p className="text-sm text-ink-500 mt-1">
                    {r.user_email} · Batch {r.user_vahani_scholar_batch}
                  </p>
                  <select
                    defaultValue={r.status}
                    onChange={async (e) => { await updateReferralStatus(r.id, e.target.value); load() }}
                    className="input-field mt-3 text-sm"
                  >
                    {['Pending', 'Accepted', 'Rejected', 'Under Review'].map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'admin' && role === 'admin' && (
        <Card>
          <h3 className="font-display text-2xl font-semibold text-ink-900 mb-3">Admin Tools</h3>
          <p className="text-sm text-ink-500 mb-4">
            Manage jobs and referrals. Legacy Google Sheet sync reference:
          </p>
          <a
            href="https://docs.google.com/spreadsheets/d/1rA2vr8ZY9hZB9MTJhCC1Fju-tl0aMC5cjwBzgg7O68w/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 font-semibold text-sm"
          >
            Open Google Sheet <Icon name="arrow-right" size={14} />
          </a>
        </Card>
      )}
    </div>
  )
}
