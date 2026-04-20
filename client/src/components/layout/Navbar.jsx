const Navbar = ({ name, links }) => {
  const initials = name
    ?.split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <header className="top-nav">
      <a href="#hero" className="brand-mark" aria-label="Back to hero">
        {initials || 'ME'}
      </a>
      <nav>
        {links.map((label) => (
          <a key={label} href={`#${label.toLowerCase()}`}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
