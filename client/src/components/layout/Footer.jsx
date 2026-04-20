const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p className="footer-heading">Let&apos;s Connect</p>
      <p className="footer-body">
        Have a project in mind? Reach out at{' '}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
      <p className="footer-meta">&copy; {currentYear} {profile.name}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
