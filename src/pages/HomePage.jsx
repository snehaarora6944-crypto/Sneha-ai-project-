import { Link } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'
import FeatureGrid from '../components/sections/FeatureGrid'
import StatStrip from '../components/sections/StatStrip'
import WorkflowSection from '../components/sections/WorkflowSection'
import { features, stats, testimonials, workflow } from '../data/siteData'

const heroImage =
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="Northstar design studio"
        title="Turn product complexity into confident customer action."
        description="We help ambitious teams sharpen their story, simplify the product experience, and launch with the clarity that drives growth."
        primaryAction={{ label: 'Book a strategy call', to: '/contact' }}
        secondaryAction={{ label: 'View services', to: '/services' }}
        image={heroImage}
      />

      <StatStrip stats={stats} />
      <FeatureGrid features={features} />
      <WorkflowSection workflow={workflow} />

      <section className="section">
        <div className="container testimonials-wrap">
          <div className="section-heading left-aligned">
            <span className="eyebrow">Client feedback</span>
            <h2>Product teams trust us to convert complexity into momentum.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <p className="quote">“{item.quote}”</p>
                <div className="person-block">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-panel">
          <div>
            <span className="eyebrow">Ready to move faster?</span>
            <h2>Build a product narrative your customers can feel.</h2>
          </div>
          <Link to="/contact" className="button button-primary">
            Start your project
          </Link>
        </div>
      </section>
    </>
  )
}
