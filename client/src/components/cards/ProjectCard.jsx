const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <p className="project-meta">
        {project.role} {project.period ? `| ${project.period}` : ''}
      </p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {project.highlights?.length ? (
        <ul className="project-highlights">
          {project.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}

      <ul className="chip-list">
        {project.stack.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a href={project.sourceUrl} target="_blank" rel="noreferrer">
          Source
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
