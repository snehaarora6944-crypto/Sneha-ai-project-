import { Link } from 'react-router-dom'

export default function HeroSection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  image,
}) {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>

          <div className="hero-actions">
            {primaryAction && (
              <Link to={primaryAction.to} className="button button-primary">
                {primaryAction.label}
              </Link>
            )}

            {secondaryAction && (
              <Link to={secondaryAction.to} className="button button-secondary">
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card card-large">
            <img src={image} alt="Product preview" />
          </div>
          <div className="floating-badge badge-top">+41% conversion lift</div>
          <div className="floating-badge badge-bottom">Design sprint in 2 weeks</div>
        </div>
      </div>
    </section>
  )
}
