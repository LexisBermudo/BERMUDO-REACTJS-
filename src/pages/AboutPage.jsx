import Footer from '../components/Footer.jsx'
import lexisImage from '../assets/lexis.webp'


function AboutPage({ navigate }) {
  return (
    <>
      <main>
        <section className="about-hero">
          <div className="about-hero-copy"><p className="eyebrow"><span /> MEET THE PERSON BEHIND THE PROJECT</p><h1>Hi, I’m<br /><em>Lexis.</em></h1><p>I’m Lexis Bermudo, the creator of Common Ground Project. I care about making more room for neighbors to grow food, share what they know, and feel connected close to home.</p></div>
          <div className="about-photo"><img src={lexisImage} alt="Portrait of Lexis Bermudo" /><span>GROWING IS BETTER<br />WHEN IT’S SHARED.</span></div>
          <div className="about-side-note">GOOD SOIL.<br />OPEN DOORS.<br />ROOM TO GROW.</div>
        </section>
        <section className="about-story section-wrap">
          <div className="section-index">01 <span>/ WHY I STARTED</span></div>
          <div className="about-story-content"><h2>A little more connection, close to home.</h2><p className="about-lede">I imagined an overlooked patch of ground becoming a place where anyone could feel welcome.</p><p>That idea became Common Ground Project: a community garden concept built around growing fresh food and growing stronger neighborhood connections at the same time. I wanted the garden to be about more than what we harvest. It should also be a place to learn by doing, share skills, and get to know the people around you.</p><p>I believe getting involved should feel approachable. You don’t need gardening experience or a perfect plan to begin; curiosity and a little willingness to pitch in are enough. My hope is to help create a project where neighbors shape the garden together and everyone has something to bring.</p></div>
        </section>
        <section className="about-bio-section">
          <div className="section-wrap about-bio">
            <div>
              <div className="section-index">02 <span>/ A LITTLE MORE ABOUT ME</span></div>
              <h2>Student, creator,<br /><em>and neighbor.</em></h2>
              <p>I’m Lexis Bermudo, a 21-year-old BSIT student at Angeles University Foundation. I’m based in Mabalacat City, where I’m learning, building ideas, and finding ways to bring people together.</p>
            </div>
            <dl className="bio-details">
              <div><dt>Age</dt><dd>21</dd></div>
              <div><dt>Birthday</dt><dd>September 1, 2005</dd></div>
              <div><dt>Course / section</dt><dd>BSIT 3B</dd></div>
              <div><dt>School</dt><dd>Angeles University Foundation</dd></div>
              <div><dt>Location</dt><dd>Mabalacat City</dd></div>
            </dl>
          </div>
        </section>
        <section className="values-section">
          <div className="section-wrap values-inner"><div className="values-title"><div className="section-index">03 <span>/ MY APPROACH</span></div><h2>What I want<br /><em>to grow.</em></h2></div>
            <div className="values-list"><article><span>01</span><div><h3>Start with neighbors</h3><p>People who live nearby should shape the spaces and the decisions that affect them.</p></div></article><article><span>02</span><div><h3>Make it welcoming</h3><p>Gardens should be easy to join, generous with knowledge, and open to all experience levels.</p></div></article><article><span>03</span><div><h3>Share what grows</h3><p>Food, skills, time, and care all become more valuable when they move between people.</p></div></article></div>
          </div>
        </section>
        <section className="about-cta section-wrap"><div><p className="eyebrow"><span /> LET’S MAKE SOMETHING GROW</p><h2>There’s room<br />to grow <em>together.</em></h2></div><a className="button button-dark" href="/#get-involved" onClick={(event) => navigate(event, '/#get-involved')}>Get involved <span aria-hidden="true">↗</span></a></section>
      </main>
      <Footer navigate={navigate} />
    </>
  )
}

export default AboutPage
