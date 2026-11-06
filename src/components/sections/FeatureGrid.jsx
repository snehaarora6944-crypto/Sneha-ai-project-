export default function FeatureGrid({ features }) {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Why teams hire us</span>
          <h2>Strategy, product clarity, and customer trust</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.id} className="feature-card">
              <span className="feature-index">{feature.accent}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
