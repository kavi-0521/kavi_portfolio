const ExperienceCard = ({ item }) => {
  return (
    <article className="timeline-card">
      <p className="timeline-duration">{item.duration}</p>
      <h3>{item.title}</h3>
      <p className="timeline-company">{item.company}</p>

      <ul>
        {item.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {item.techStack?.length ? (
        <ul className="chip-list timeline-stack">
          {item.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

export default ExperienceCard
