import { useState } from 'react'
import { contactOptions } from '../data/siteData'

const initialFormState = {
  name: '',
  email: '',
  company: '',
  details: '',
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormData(initialFormState)
  }

  return (
    <div className="page-section-wrap">
      <section className="page-hero section">
        <div className="container narrow-copy">
          <span className="eyebrow">Contact</span>
          <h1>Let’s design the next step in your growth story.</h1>
          <p>
            Share a little about your team, product, and goals. We’ll follow up with a thoughtful recommendation and next steps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-card form-card">
            <h2>Tell us about your project</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <label>
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company or product"
                />
              </label>

              <label>
                <span>Project details</span>
                <textarea
                  rows="5"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, timeline, and challenges."
                  required
                />
              </label>

              <button type="submit" className="button button-primary">
                Send inquiry
              </button>

              {isSubmitted && (
                <p className="form-success" aria-live="polite">
                  Thanks! Your inquiry has been received. We’ll be in touch soon.
                </p>
              )}
            </form>
          </div>

          <div className="contact-card info-card">
            <h2>Reach out</h2>
            <div className="contact-list">
              {contactOptions.map((item) => (
                <div key={item.label} className="contact-item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <small>{item.detail}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
