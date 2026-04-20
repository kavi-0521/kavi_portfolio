import SectionHeading from '../components/common/SectionHeading'

const AboutSection = ({ profile }) => {
  return (
    <section id="about" className="panel-section about-grid">
      <SectionHeading
        eyebrow="DISCOVERY"
        title="About The Architect"
        description={profile.careerObjective}
      />

      <div className="stats-grid">
        <article>
          <p className="stat-value">{profile.yearsExperience}</p>
          <p>Professional Experience</p>
        </article>
        <article>
          <p className="stat-value">{profile.projectsDelivered}</p>
          <p>Projects Delivered</p>
        </article>
        <article>
          <p className="stat-value">{profile.location}</p>
          <p>Current Location</p>
        </article>
      </div>

      <div className="about-details-grid">
        <article className="detail-card">
          <h3>Education</h3>
          <ul>
            {(profile.education || []).map((item) => (
              <li key={`${item.degree}-${item.duration}`}>
                <p className="detail-title">{item.degree}</p>
                <p>{item.institution}</p>
                <p>{item.duration}</p>
                <p>{item.score}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="detail-card">
          <h3>Certifications</h3>
          <ul>
            {(profile.certifications || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="detail-card">
          <h3>Achievements</h3>
          <ul>
            {(profile.achievements || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default AboutSection
