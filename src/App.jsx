import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  BookOpen,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Music2,
  Palette,
  X,
} from 'lucide-react'
import { publications } from './data/publications'
import { researchThemes, skills } from './data/research'

// EDIT HERE: Add your real name, profile links and email address.
const profile = {
  name: 'Adwaith B. Uday',
  initials: 'ABU',
  role: 'PhD Student · Structural Biology',
  institution: 'McGill University',
  email: 'adwaith.biniboseuday@mail.mcgill.ca',
  // Add your PDF to public/ and replace null with its filename, for example:
  // cv: 'Adwaith_Uday_CV.pdf',
  cv: 'Adwaith_CV_Sep24_2026.pdf',
  links: {
    scholar: 'https://scholar.google.com/citations?user=KAh1BioAAAAJ&hl=en&oi=ao',
    orcid: 'https://orcid.org/0009-0005-1524-6307',
    linkedin: 'https://www.linkedin.com/in/adwaith-b-uday/',
    github: 'https://github.com/Adwaith99',
  },
}

const navItems = ['Research', 'Publications', 'Journey', 'Methods', 'Beyond', 'Notes']

function MoleculeGraphic() {
  return (
    <div className="molecule" aria-hidden="true">
      <svg viewBox="0 0 640 640" role="img">
        <defs>
          <radialGradient id="orb" cx="35%" cy="30%">
            <stop offset="0" stopColor="#9fe1d7" />
            <stop offset="1" stopColor="#357c75" />
          </radialGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g className="orbit-lines" fill="none" stroke="currentColor">
          <ellipse cx="320" cy="320" rx="238" ry="102" transform="rotate(25 320 320)" />
          <ellipse cx="320" cy="320" rx="236" ry="105" transform="rotate(85 320 320)" />
          <ellipse cx="320" cy="320" rx="212" ry="88" transform="rotate(145 320 320)" />
          <circle cx="320" cy="320" r="175" strokeDasharray="3 12" />
        </g>
        <g className="particles" fill="url(#orb)" filter="url(#softGlow)">
          <circle cx="166" cy="226" r="15" /><circle cx="449" cy="177" r="11" />
          <circle cx="501" cy="365" r="17" /><circle cx="273" cy="487" r="12" />
          <circle cx="177" cy="405" r="9" /><circle cx="342" cy="135" r="8" />
        </g>
        <g className="core">
          <circle cx="320" cy="320" r="112" fill="#102d2d" stroke="#4f8e87" />
          <circle cx="320" cy="320" r="81" fill="none" stroke="#30605d" strokeWidth="24" strokeDasharray="20 10" />
          <circle cx="320" cy="320" r="34" fill="#91d2c8" opacity=".9" />
          <circle cx="310" cy="308" r="8" fill="#d9fff8" />
        </g>
      </svg>
      <span className="graphic-label label-one">dynamics</span>
      <span className="graphic-label label-two">structure</span>
      <span className="graphic-label label-three">function</span>
    </div>
  )
}

function SectionHeader({ number, eyebrow, title, copy, light = false }) {
  return (
    <div className={`section-header ${light ? 'light' : ''}`}>
      <div className="section-kicker"><span>{number}</span>{eyebrow}</div>
      <div className="section-heading-grid">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  )
}

function AuthorList({ authors }) {
  return (
    <p className="publication-authors">
      {authors.map((author, index) => (
        <span key={`${author.name}-${index}`}>
          <span className={author.self ? 'author-self' : undefined}>{author.name}</span>
          {author.equal && <sup aria-label="equal contribution">✦</sup>}
          {index < authors.length - 1 && ', '}
        </span>
      ))}
    </p>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showAllPublications, setShowAllPublications] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#home" aria-label="Go to home">
          <span>{profile.initials}</span>
          <div>{profile.name}<small>Structural Biology</small></div>
        </a>
        <nav id="primary-navigation" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Contact <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="primary-navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="main-content">
        <section id="home" className="hero">
          <div className="hero-noise" />
          <div className="hero-copy reveal">
            <div className="eyebrow"><span /> Structural biology · Cryo-EM</div>
            <h1>Understanding<br /><em>biomolecular mechanisms</em><br />through integrative<br />structural biology.</h1>
            <p>I am a PhD student at {profile.institution} investigating how self-compartmentalized proteases are regulated in <i>M. tuberculosis</i> and human mitochondria.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">Explore my research <ArrowDown size={16} /></a>
              <div className="hero-secondary-actions">
                <a className="text-link" href={`mailto:${profile.email}`}>Get in touch <ArrowRight size={15} /></a>
                {profile.cv && (
                  <a className="text-link" href={`${import.meta.env.BASE_URL}${profile.cv}`} target="_blank" rel="noreferrer">View CV <Download size={15} /></a>
                )}
              </div>
            </div>
            <div className="hero-socials" aria-label="Profile links">
              <a href={profile.links.scholar} target="_blank" rel="noreferrer">Google Scholar <ExternalLink /></a>
              <a href={profile.links.orcid} target="_blank" rel="noreferrer">ORCID <ExternalLink /></a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
              <a href={profile.links.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
            </div>
          </div>
          <div className="hero-visual reveal delay-one">
            <MoleculeGraphic />
            <div className="portrait-placeholder">
              <img src={`${import.meta.env.BASE_URL}me3.jpg`} alt="Portrait of Adwaith B. Uday" width="1241" height="1550" fetchPriority="high" />
            </div>
            <div className="location-chip"><span /> Montréal, Canada</div>
          </div>
          <div className="hero-footer"><span>Current focus</span><p>Mechanisms of allosteric regulation of <i>Mycobacterium tuberculosis</i> proteasome and human mitochondrial ClpP protease</p></div>
        </section>

        <section id="research" className="section research-section">
          <SectionHeader number="01" eyebrow="Research" title={<>Questions at the scale<br />of molecules</>} copy="I combine experimental and computational approaches to connect molecular architecture with mechanism, dynamics and biological function." />
          <div className="research-grid">
            {researchThemes.map(({ number, title, eyebrow, description, icon: Icon }) => (
              <article className="research-card" key={title}>
                <div className="card-top"><span>{number}</span><Icon size={25} strokeWidth={1.4} /></div>
                <div>
                  <p className="card-eyebrow">{eyebrow}</p>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <a href="#contact" aria-label={`Discuss ${title}`}>Discuss this work <ArrowRight size={15} /></a>
              </article>
            ))}
          </div>
        </section>

        <section id="publications" className="section publications-section">
          <SectionHeader light number="02" eyebrow="Selected work" title={<>Publications &<br />preprints</>} copy="Research at the intersection of structural biology, molecular mechanism and computation." />
          <div className="publication-list">
            {publications.slice(0, showAllPublications ? publications.length : 5).map((publication, index) => (
              <article className="publication" key={`${publication.title}-${index}`}>
                <div className="publication-meta">
                  {publication.year && <span>{publication.year}</span>}<span>{publication.journal}</span>
                  {publication.status && <b className="status-badge">{publication.status}</b>}
                </div>
                <div className="publication-content">
                  <h3>{publication.title}</h3>
                  <AuthorList authors={publication.authors} />
                  {publication.citation && <p className="publication-citation">{publication.citation}</p>}
                  {publication.note && <p className="publication-note">{publication.note}</p>}
                  {publication.authors.some((author) => author.equal) && (
                    <span className="equal-note"><i>✦</i> Equal contribution</span>
                  )}
                </div>
                <div className="publication-links">
                  {publication.doi && <a href={publication.doi} target="_blank" rel="noreferrer">View article <ExternalLink size={13} /></a>}
                  {publication.preprint && <a href={publication.preprint} target="_blank" rel="noreferrer">View preprint <ExternalLink size={13} /></a>}
                  {publication.pdf && <a href={publication.pdf} target="_blank" rel="noreferrer">Read PDF <Download size={13} /></a>}
                </div>
              </article>
            ))}
          </div>
          <div className="publication-actions">
            {publications.length > 5 && (
              <button className="button button-outline" type="button" aria-expanded={showAllPublications} onClick={() => setShowAllPublications((current) => !current)}>
                {showAllPublications ? 'Show selected publications' : 'Show all publications'}
                <ArrowDown className={showAllPublications ? 'rotated' : ''} size={15} />
              </button>
            )}
            <a className="publication-scholar-link" href={profile.links.scholar} target="_blank" rel="noreferrer">Google Scholar <ArrowRight size={15} /></a>
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <SectionHeader number="03" eyebrow="Scientific journey" title={<>A path shaped by<br />curiosity</>} copy="Each stage has expanded my skillset and research experience." />
          <div className="timeline">
            {[
              ['BS (Research)', 'Biology · Indian Institute of Science', 'Foundations in molecular biology, and biochemistry.', 'Past'],
              ['MS', 'Biology · Indian Institute of Science', 'Foundations in cryo-EM and structural biology.', 'Past'],
              ['PhD', 'Structural Biology · McGill', 'Resolving mechanisms of protease regulation using cryo-EM.', 'Now'],
              // ['Next', 'Postdoctoral research', 'Integrative structural biology, molecular dynamics and AI-guided protein design.', 'Future'],
            ].map(([year, title, text, status]) => (
              <article className="timeline-item" key={year}>
                <div className={`timeline-marker ${status.toLowerCase()}`}><span /></div>
                <div className="timeline-label">{year}</div>
                <div><p>{status}</p><h3>{title}</h3><span>{text}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section id="methods" className="section methods-section">
          <div className="methods-intro">
            <SectionHeader light number="04" eyebrow="Methods & skills" title={<>From sample<br />to structure</>} />
            <p>My work over the years has involved a range of techniques and approaches.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({ name, detail, icon: Icon }, index) => (
              <article className="skill-card" key={name}>
                <span className="skill-number">0{index + 1}</span>
                <Icon size={25} strokeWidth={1.2} />
                <h3>{name}</h3><p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="beyond" className="section beyond-section">
          <SectionHeader number="05" eyebrow="Beyond science" title={<>Rhythm, form &<br />curiosity</>} />
          <div className="beyond-grid">
            <article className="beyond-feature"><div className="drum-visual"><Music2 /><span className="ring ring-one" /><span className="ring ring-two" /></div><div><span>01 / Rhythm</span><h3>Playing drums</h3><p>Finding balance, precision and creative energy behind the kit.</p></div></article>
            <article className="beyond-small"><Palette /><span>02 / Visual thinking</span><h3>Scientific illustration & design</h3><p>Turning complex scientific ideas into clear, compelling visual stories.</p></article>
            <article className="beyond-small accent"><BrainCircuit /><span>03 / Computation</span><h3>Computational biology</h3><p>Exploring where code, data and molecular discovery meet.</p></article>
          </div>
        </section>

        <section id="notes" className="section notes-section">
          <div className="notes-copy"><span className="section-kicker"><span>06</span>Notes</span><h2>Ideas in<br /><em>progress.</em></h2><p>A future home for thoughts on science, creativity and everything in between.</p><span className="notes-status">Publishing soon</span></div>
          <div className="note-preview"><div className="note-icon"><BookOpen /></div><span>Notebook in development</span><h3>Field notes from the molecular world</h3><p>Short essays on structural biology, research practice and ideas that are still taking shape.</p><div>First note · coming soon</div></div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-orbit" aria-hidden="true" />
          <span className="section-kicker"><span>07</span>Contact</span>
          <h2>Let’s explore the<br /><em>molecular world.</em></h2>
          <p>I’m always happy to discuss science, possible collaborations or future research opportunities.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={19} /> {profile.email} <ArrowRight size={18} /></a>
          <div className="contact-bottom"><span>{profile.name} · {profile.role}</span><span>{profile.institution} · Montréal, Canada</span></div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} {profile.name}</span><a href="#home">Back to top ↑</a><span>Built for discovery</span></footer>
    </div>
  )
}

export default App
