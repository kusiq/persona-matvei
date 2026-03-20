import avatar from './assets/avatar.jpg'

import './styles/pageShell.scss'
import './styles/shared.scss'

import AboutSection from './components/AboutSection/AboutSection'
import CtaSection from './components/CtaSection/CtaSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import MoreSection from './components/MoreSection/MoreSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import Topbar from './components/Topbar/Topbar'

import {
  additionalExperienceBullets,
  extras,
  projects,
  quickFacts,
  skills,
  strengths,
} from './content/resumeData'

function App() {
  return (
    <div className="page-shell">
      <div className="page-shell__glow page-shell__glow--left" />
      <div className="page-shell__glow page-shell__glow--right" />
      <Topbar />
      <main className="page">
        <Hero quickFacts={quickFacts} avatarSrc={avatar} />
        <AboutSection strengths={strengths} />
        <ExperienceSection projects={projects} />
        <SkillsSection
          skills={skills}
          additionalExperienceBullets={additionalExperienceBullets}
        />
        <MoreSection extras={extras} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
