import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <NavLink to="/" className="brand" aria-label="Northstar home page">
          <span className="brand-mark">N</span>
          <span>Northstar</span>
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="button button-primary nav-cta">
          Book a call
        </NavLink>
      </div>
    </header>
  )
}
