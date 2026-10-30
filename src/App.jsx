import { useState } from "react";
import "./index.css";

const skills = ["AWS", "Azure", "JavaScript", "React", "Node.js", "Express", "SQL", "Git", "GitHub"];
const workshops = ["UI/UX Design", "Full Stack Development", "Cloud Computing", "AI Tools"];
const navItems = ["About", "Skills", "Journey", "Work", "Contact"];

function ArrowUpRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDown({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.4 5.8.4.3.7 1 .7 1.9v2.8c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" />
    </svg>
  );
}

function MailIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Sparkle({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m12 2 1.4 6.6L20 10l-6.6 1.4L12 18l-1.4-6.6L4 10l6.6-1.4L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z" fill="currentColor" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Manushree Sane home">
          <span className="brand-mark">MS</span>
          <span className="brand-name">Manushree Sane</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-github" href="https://github.com/ManushreeSane" target="_blank" rel="noreferrer">
            <GithubIcon size={16} /> GitHub
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-dot" /> Portfolio / 2025—27</p>
            <h1 id="hero-title">Learning the cloud.<br /><em>Shipping with intent.</em></h1>
            <p className="hero-lede">
              I&apos;m <strong>Manushree Sane</strong>, an aspiring Cloud and DevOps Engineer building thoughtful web experiences and learning how to make them run better.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See my work <ArrowUpRight /></a>
              <a className="button button-quiet" href="#contact">Let&apos;s connect <ArrowDown /></a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay" aria-label="Cloud and DevOps visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-core"><Sparkle size={30} /></div>
            <span className="float-label label-cloud">CLOUD</span>
            <span className="float-label label-build">BUILD</span>
            <span className="float-label label-ship">SHIP</span>
            <div className="visual-caption">
              <span>01</span>
              <p>From a working app<br />to a reliable deployment.</p>
            </div>
          </div>
        </section>

        <section className="signal-bar section-wrap" aria-label="Profile highlights">
          <div className="signal-item"><span className="signal-number">01</span><span>Cloud computing</span></div>
          <div className="signal-item"><span className="signal-number">02</span><span>Full-stack foundations</span></div>
          <div className="signal-item"><span className="signal-number">03</span><span>Curious by default</span></div>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-heading reveal">
            <p className="eyebrow">A little context</p>
            <h2 id="about-title">I like the part where<br /><span>ideas become systems.</span></h2>
          </div>
          <div className="about-content reveal reveal-delay">
            <p className="large-copy">My path started with building web applications and grew into a fascination with what happens after the code works: deployment, automation, observability, and the small choices that make a digital product feel dependable.</p>
            <div className="about-aside">
              <div className="mini-stat"><strong>MCA</strong><span>Cloud Computing<br />2025 — 2027</span></div>
              <div className="mini-stat"><strong>7.91</strong><span>BBA-CA CGPA<br />Completed 2025</span></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills" aria-labelledby="skills-title">
          <div className="section-heading section-heading-light reveal">
            <p className="eyebrow">The toolkit</p>
            <h2 id="skills-title">Things I&apos;m<br /><span>comfortable exploring.</span></h2>
          </div>
          <div className="skills-layout reveal reveal-delay">
            <p className="skills-intro">A practical mix of cloud platforms, web technologies, and tools that help turn a concept into a project you can share.</p>
            <div className="skill-cloud">
              {skills.map((skill, index) => <span className={index < 2 ? "skill-pill skill-pill-featured" : "skill-pill"} key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="journey-section section-wrap" id="journey" aria-labelledby="journey-title">
          <div className="section-heading reveal">
            <p className="eyebrow">The journey so far</p>
            <h2 id="journey-title">Learning in<br /><span>public and practice.</span></h2>
          </div>
          <div className="journey-grid">
            <div className="timeline reveal reveal-delay">
              <article className="timeline-item current">
                <div className="timeline-marker">02</div>
                <div className="timeline-content">
                  <p className="timeline-date">2025 — expected 2027</p>
                  <h3>Master of Computer Applications</h3>
                  <p>IMED, Bharati Vidyapeeth University</p>
                  <span className="timeline-status">Currently pursuing</span>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-marker">01</div>
                <div className="timeline-content">
                  <p className="timeline-date">Completed 2025</p>
                  <h3>BBA in Computer Applications</h3>
                  <p>Sinhgad College</p>
                  <span className="timeline-status">CGPA 7.91</span>
                </div>
              </article>
            </div>

            <div className="credential-card reveal reveal-delay-more">
              <div className="credential-top"><span className="credential-icon"><Sparkle size={19} /></span><span>Certification</span></div>
              <h3>AI and Life &amp;<br />Employability Skills</h3>
              <p>Magic Bus India Foundation</p>
              <div className="credential-line" />
              <span className="credential-complete">Completed <span>↗</span></span>
            </div>
          </div>

          <div className="workshops reveal reveal-delay-more">
            <p className="eyebrow">Workshops</p>
            <div className="workshop-row">{workshops.map((workshop) => <span key={workshop}>{workshop}</span>)}</div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading reveal">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">One project.<br /><span>Many moving parts.</span></h2>
          </div>
          <article className="project-card reveal reveal-delay">
            <div className="project-number">01 / PROJECT</div>
            <div className="project-main">
              <div>
                <p className="project-kicker">CloudNest</p>
                <h3>Task Dashboard</h3>
              </div>
              <a className="circle-link" href="https://github.com/ManushreeSane/Cloudnet" target="_blank" rel="noreferrer" aria-label="View CloudNest Task Dashboard on GitHub"><ArrowUpRight size={22} /></a>
            </div>
            <p className="project-description">A focused task management dashboard with an Express backend and SQL database. Add, update, and track tasks from one clear workspace — now shaped for deployment on Microsoft Azure App Service.</p>
            <div className="project-footer">
              <div className="project-tags"><span>JavaScript</span><span>Express.js</span><span>Node.js</span><span>SQL</span><span>Azure</span></div>
              <a className="text-link" href="https://github.com/ManushreeSane/Cloudnet" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={16} /></a>
            </div>
          </article>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-card reveal">
            <div className="contact-copy">
              <p className="eyebrow">Have an idea?</p>
              <h2 id="contact-title">Let&apos;s make<br /><em>something useful.</em></h2>
              <p>Whether it&apos;s a project, an opportunity, or a conversation about cloud and DevOps, my inbox is open.</p>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href="mailto:sanemanushree@gmail.com"><MailIcon /> sanemanushree@gmail.com <ArrowUpRight size={17} /></a>
              <div className="contact-links">
                <a href="https://github.com/ManushreeSane" target="_blank" rel="noreferrer"><GithubIcon size={17} /> GitHub</a>
                <span className="linkedin-note">LinkedIn — not available</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <span>© {new Date().getFullYear()} Manushree Sane</span>
        <span>Built with curiosity &amp; React</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
