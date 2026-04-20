import SectionHeading from '../components/common/SectionHeading'
import SkillTicker from '../components/SkillTicker'

const SkillsSection = ({ skillGroups }) => {
  return (
    <section id="skills" className="panel-section">
      <SectionHeading
        eyebrow="INVENTORY"
        title="The Tech Stack"
        description="A focused blend of frontend craftsmanship and backend reliability."
      />
      <SkillTicker groups={skillGroups} />
    </section>
  )
}

export default SkillsSection
