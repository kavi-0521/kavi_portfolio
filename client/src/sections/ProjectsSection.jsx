import ProjectCard from '../components/cards/ProjectCard'
import SectionHeading from '../components/common/SectionHeading'

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="panel-section">
      <SectionHeading
        eyebrow="SHOWCASE"
        title="Featured Creations"
        description="Resume-driven project highlights demonstrating MERN delivery, AI integrations, API optimization, and production-grade implementation quality."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
