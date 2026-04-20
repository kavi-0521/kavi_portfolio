import { useEffect, useRef, useState } from 'react'
import './App.css'
import './scroll.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import { usePortfolioData } from './hooks/usePortfolioData'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import ExperienceSection from './sections/ExperienceSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'

const hasIntersectionObserver =
  typeof window !== 'undefined' && 'IntersectionObserver' in window

const ScrollScreen = ({ children, className = '' }) => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(!hasIntersectionObserver)

  useEffect(() => {
    if (!hasIntersectionObserver) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className={`scroll-screen ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

function App() {
  const { data, isLoading, error } = usePortfolioData()

  if (isLoading) {
    return <div className="state-screen">Loading portfolio...</div>
  }

  if (error) {
    return <div className="state-screen">{error}</div>
  }

  return (
    <>
      <div className="theme-backdrop" aria-hidden="true" />
      <Navbar name={data.profile.name} links={data.navigation} />
      <main className="main-flow">
        <ScrollScreen className="screen-hero">
          <HeroSection profile={data.profile} />
        </ScrollScreen>
        <ScrollScreen>
          <AboutSection profile={data.profile} />
        </ScrollScreen>
        <ScrollScreen>
          <ExperienceSection experiences={data.experiences} />
        </ScrollScreen>
        <ScrollScreen>
          <SkillsSection skillGroups={data.skillGroups} />
        </ScrollScreen>
        <ScrollScreen>
          <ProjectsSection projects={data.projects} />
        </ScrollScreen>
        <ScrollScreen>
          <ContactSection contact={data.contact} />
        </ScrollScreen>
      </main>
      <ScrollScreen>
        <Footer profile={{ ...data.profile, ...data.contact }} />
      </ScrollScreen>
    </>
  )
}

export default App
