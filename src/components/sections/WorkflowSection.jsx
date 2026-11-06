export default function WorkflowSection({ workflow }) {
  return (
    <section className="section">
      <div className="container workflow-layout">
        <div className="section-heading left-aligned">
          <span className="eyebrow">Our process</span>
          <h2>A lean system for better decisions and smoother launches</h2>
        </div>

        <div className="workflow-list">
          {workflow.map((step, index) => (
            <div key={step} className="workflow-step">
              <span className="step-number">0{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
