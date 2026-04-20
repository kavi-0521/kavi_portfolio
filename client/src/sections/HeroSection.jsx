const HeroSection = ({ profile }) => {
  const initials = profile.name
    ?.split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <section id="hero" className="hero-section hero-layout">
      <div className="hero-copy-block">
        <p className="hero-kicker">WELCOME TO MY UNIVERSE</p>
        <h1 className="hero-title">
          <span>Crafting</span>
          <span>Digital</span>
          <span>Masterpieces</span>
        </h1>
        <p className="hero-summary">{profile.summary}</p>
        <p className="hero-intro">
          I&apos;m <span>{profile.name}</span>, {profile.role}
        </p>

        <ul className="hero-socials" aria-label="Social links">
          {(profile.socialLinks || []).slice(0, 4).map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                {link.label.slice(0, 2).toUpperCase()}
              </a>
            </li>
          ))}
          {!profile.socialLinks?.length ? (
            <li>
              <a href="#" aria-label="Profile initials">
                {initials || 'ME'}
              </a>
            </li>
          ) : null}
        </ul>

        <div className="hero-actions">
          <a href="#projects">Let&apos;s Collaborate</a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Get Resume
          </a>
        </div>
      </div>

      <div className="hero-code-card" aria-label="Developer code preview">
        <div className="hero-code-head">
          <div className="hero-dot-wrap">
            <span />
            <span />
            <span />
          </div>
          <p>Portfolio.ts</p>
        </div>
        <pre>
{`const developer = {
  name: '${profile.name}',
  focus: '${profile.role}',
  skills: ['React', 'Node', 'MongoDB'],
  passionate: true,
  motto: 'Build with Purpose'
};

developer.showcase();`}
        </pre>
      </div>
    </section>
  )
}

export default HeroSection
