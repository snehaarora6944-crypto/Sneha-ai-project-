import { values } from '../data/siteData'

export default function AboutPage() {
  return (
    <div className="page-section-wrap">
      <section className="page-hero section">
        <div className="container narrow-copy">
          <span className="eyebrow">About us</span>
          <h1>We help teams translate ambition into product clarity.</h1>
          <p>
            Northstar is a strategy and design studio focused on turning complex ideas into elegant experiences that people actually understand and trust.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <div className="story-panel">
            <h2>Built for founders, product teams, and evolving brands.</h2>
            <p>
              We work closely with teams that need more than a pretty interface. They need sharper positioning, a more intuitive journey, and a system that scales with the business.
            </p>
            <p>
              Our approach blends insight, design craft, and rapid iteration so the work stays useful, compelling, and grounded in real user behavior.
            </p>
          </div>

          <div className="image-panel">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
              alt="Team collaboration session"
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our principles</span>
            <h2>Clarity is the real differentiator.</h2>
          </div>

          <div className="value-grid">
            {values.map((value) => (
              <article key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
