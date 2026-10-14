import { useEffect, useState } from 'react'
import { fetchAlumni, type Alumni } from '../../api/client'
import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import Icon from '../../components/Icon'

export default function AlumniDirectory() {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState<Alumni[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      fetchAlumni(search)
        .then(({ data }) => {
          setItems(data.items)
          setTotal(data.total)
        })
        .finally(() => setLoading(false))
    }, 300)
    return () => clearTimeout(timer)
  }, [search])

  return (
    <div>
      <PageHeader
        title="Alumni Directory"
        subtitle="Search and connect with fellow Vahani scholars across batches."
        badge="Internal"
      />

      <div className="relative mb-6 max-w-lg">
        <Icon name="search" size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
        <input
          className="input-field pl-11"
          placeholder="Search by name, batch, company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card p-6 animate-pulse">
              <div className="w-28 h-28 bg-cream-deep rounded-full mx-auto mb-4" />
              <div className="h-4 bg-cream-deep rounded w-3/4 mx-auto mb-2" />
              <div className="h-3 bg-cream-deep rounded w-1/2 mx-auto" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="text-sm text-ink-400 mb-5">
            <span className="text-brand-600 font-semibold">{total}</span> alumni found
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((a) => (
              <Card key={a.id} hover className="text-center">
                <img
                  src={a.photo_url || '/api/static/default.jpg'}
                  alt={a.name}
                  className="w-28 h-28 object-cover rounded-full border-2 border-brand-100 mx-auto mb-4"
                />
                <h3 className="font-display text-xl font-semibold text-ink-900 mb-1">{a.name}</h3>
                <span className="chip chip-brand mb-3">Batch {a.scholar_batch || '—'}</span>
                <div className="text-sm text-ink-500 space-y-1 text-left mt-2">
                  <p><span className="text-ink-400">Role:</span> {a.job_profile || '—'}</p>
                  <p><span className="text-ink-400">Company:</span> {a.company_name || '—'}</p>
                  <p><span className="text-ink-400">Field:</span> {a.field_of_work || '—'}</p>
                  {a.email && (
                    <p className="truncate"><span className="text-ink-400">Email:</span> {a.email}</p>
                  )}
                  {a.linkedin?.startsWith('http') && (
                    <a
                      href={a.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 font-semibold mt-2"
                    >
                      <Icon name="linkedin" size={14} />
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
