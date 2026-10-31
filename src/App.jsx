import { useState } from "react";
import "./index.css";

const projects = [
  { number: "01", type: "PRODUCT / WEB APP", title: "CloudNest", description: "A practical task dashboard that makes everyday work easier to see, manage, and move forward.", tags: ["React", "Node.js", "SQL"], tone: "yellow" },
  { number: "02", type: "EXPERIMENT / CLOUD", title: "Deploying ideas", description: "Exploring the space between a finished interface and the reliable system that keeps it running.", tags: ["Azure", "Git", "DevOps"], tone: "blue" },
];

const capabilities = ["Frontend interfaces", "Cloud foundations", "Backend thinking", "Design systems", "Problem solving", "Continuous learning"];

function Arrow() { return <span className="arrow">↗</span>; }
function GithubIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.4 5.8.4.3.7 1 .7 1.9v2.8c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" /></svg>; }

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return (
    <div className="portfolio">
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={close}><span className="wordmark-dot" /> MANUSHREE / SANE</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><span /><span /></button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#about" onClick={close}>About</a><a href="#work" onClick={close}>Work</a><a href="#contact" onClick={close}>Contact</a>
          <a className="nav-cta" href="mailto:sanemanushree@gmail.com" onClick={close}>Let&apos;s talk <Arrow /></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero shell">
          <div className="hero-intro"><p className="overline">Developer / Cloud enthusiast / Curious human</p><h1>Making<br /><i>useful</i><br />things.</h1><p className="hero-summary">Hi, I&apos;m Manushree — a developer interested in the details that make digital products feel simple, thoughtful, and dependable.</p><a className="underlined-link" href="#work">See selected work <Arrow /></a></div>
          <div className="hero-art"><div className="art-ring ring-a" /><div className="art-ring ring-b" /><div className="art-block block-one">MS</div><div className="art-block block-two">01</div><div className="art-note">Currently learning<br /><b>how ideas scale.</b></div><div className="art-side-label">PORTFOLIO / 2025—27</div></div>
        </section>

        <div className="ticker"><div>OPEN TO OPPORTUNITIES</div><div>BUILD WITH INTENT</div><div>STAY CURIOUS</div><div>OPEN TO OPPORTUNITIES</div></div>

        <section className="about shell" id="about"><div className="section-index">01 <span>ABOUT</span></div><div className="about-grid"><div><h2>A developer with a soft spot for <em>good details.</em></h2></div><div className="about-copy"><p>I like working across the whole shape of a project: understanding the idea, making the interface feel right, connecting the pieces, and learning what happens after launch.</p><p>My current focus is cloud computing and DevOps foundations, supported by a background in full-stack development and a habit of learning by building.</p><a className="round-link" href="mailto:sanemanushree@gmail.com">Say hello <Arrow /></a></div></div></section>

        <section className="capabilities shell"><div className="section-index">02 <span>CAPABILITIES</span></div><div className="capability-layout"><h2>Things I bring<br /><em>to the table.</em></h2><div className="capability-list">{capabilities.map((item, i) => <div className="capability" key={item}><span>0{i + 1}</span><strong>{item}</strong><Arrow /></div>)}</div></div></section>

        <section className="work shell" id="work"><div className="section-index">03 <span>SELECTED WORK</span></div><div className="work-heading"><h2>A few things<br /><em>in progress.</em></h2><p>Small projects, real questions, and a growing toolkit. Each one is a chance to make something clearer than it was before.</p></div><div className="project-grid">{projects.map((project) => <article className={`project ${project.tone}`} key={project.number}><div className="project-top"><span>{project.number}</span><span>{project.type}</span></div><div className="project-shape"><span>{project.number === "01" ? "CN" : "∞"}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-bottom"><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="https://github.com/ManushreeSane" target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><Arrow /></a></div></article>)}</div></section>

        <section className="education shell"><div className="section-index">04 <span>THE FOUNDATION</span></div><div className="education-row"><div><p className="overline">Education</p><h2>Always becoming<br /><em>more capable.</em></h2></div><div className="education-details"><div><span>2025—27</span><strong>Master of Computer Applications</strong><small>Cloud Computing · IMED, Bharati Vidyapeeth University</small></div><div><span>COMPLETED 2025</span><strong>BBA in Computer Applications</strong><small>CGPA 7.91 · Sinhgad College</small></div></div></div></section>

        <section className="contact shell" id="contact"><div className="contact-stamp">LET&apos;S<br />MAKE<br /><b>GOOD</b><br />WORK.</div><div className="contact-copy"><p className="overline">05 / CONTACT</p><h2>Have something<br /><em>in mind?</em></h2><p>I&apos;m always open to a good conversation, an interesting project, or an opportunity to build something that matters.</p><a className="contact-mail" href="mailto:sanemanushree@gmail.com">sanemanushree@gmail.com <Arrow /></a><div className="social"><a href="https://github.com/ManushreeSane" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a><span>Based in India</span></div></div></section>
      </main>
      <footer className="footer shell"><span>© {new Date().getFullYear()} Manushree Sane</span><span>Designed &amp; built with curiosity</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}
export default App;
