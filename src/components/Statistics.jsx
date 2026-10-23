const metrics = [
  { value: '95%', label: 'Refreshing\nexperience' },
  { value: '90%', label: 'Made for\ngood moments' },
  { value: '100%', label: 'Full-on\nfizz' },
]

export default function Statistics() {
  return (
    <div className="stats" aria-label="Brand highlights">
      {metrics.map((metric) => (
        <article className="stat-card" key={metric.value}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </article>
      ))}
      <p className="stats__disclaimer">Illustrative brand highlights, not verified product claims.</p>
    </div>
  )
}
