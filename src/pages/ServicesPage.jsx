import { Link } from 'react-router-dom'
import { services } from '../data/siteData'

export default function ServicesPage() {
  return (
    <div className="page-section-wrap">
      <section className="page-hero section">
        <div className="container narrow-copy">
          <span className="eyebrow">Services</span>
          <h1>Design support built for product momentum.</h1>
          <p>
            We combine strategy, interface design, and UX research to help teams clarify priorities, convert more users, and ship with confidence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-grid">
          {services.map((service) => (
            <article key={service.name} className="service-card">
              <div className="service-meta">
                <h3>{service.name}</h3>
                <span>{service.price}</span>
              </div>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-panel compact-panel">
          <div>
            <span className="eyebrow">Let’s build your next milestone</span>
            <h2>Need a custom plan for your product?</h2>
          </div>
          <Link to="/contact" className="button button-primary">
            Request a consult
          </Link>
        </div>
      </section>
    </div>
  )
}
