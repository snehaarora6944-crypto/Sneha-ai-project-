import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">N</span>
            <span>Northstar</span>
          </div>
          <p className="footer-copy">
            Design systems and product experiences that give ambitious teams a clearer path to growth.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Connect</h3>
          <ul className="footer-links">
            <li><a href="mailto:hello@northstar.studio">hello@northstar.studio</a></li>
            <li><a href="tel:+14158122492">+1 (415) 812-2492</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Northstar Studio</span>
        <span>Built for clarity and momentum</span>
      </div>
    </footer>
  )
}
