const SkillTicker = ({ groups }) => {
  const labels = groups.flatMap((group) => group.items)

  return (
    <div className="ticker-wrap" aria-label="Technology stack">
      <div className="ticker-track">
        {labels.concat(labels).map((label, index) => (
          <span className="ticker-pill" key={`${label}-${index}`}>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillTicker
