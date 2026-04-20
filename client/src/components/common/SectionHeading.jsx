const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <header className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  )
}

export default SectionHeading
