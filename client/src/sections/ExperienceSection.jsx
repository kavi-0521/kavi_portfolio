import ExperienceCard from '../components/cards/ExperienceCard'
import SectionHeading from '../components/common/SectionHeading'

const ExperienceSection = ({ experiences }) => {
  return (
    <section id="experience" className="panel-section">
      <SectionHeading
        eyebrow="JOURNEY"
        title="Professional Timeline"
        description="Hands-on experience across AI voice systems, full-stack product engineering, authentication, and performance-focused API architecture."
      />
      <div className="timeline-grid">
        {experiences.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
