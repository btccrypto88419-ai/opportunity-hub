import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">OpportunityHub</Link>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          <Link to="/jobs" onClick={() => setOpen(false)}>Jobs</Link>
          <Link to="/internships" onClick={() => setOpen(false)}>Internships</Link>
          <Link to="/scholarships" onClick={() => setOpen(false)}>Scholarships</Link>
          <Link to="/cv-builder" onClick={() => setOpen(false)}>CV Builder</Link>
          <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          <Link to="/register" className="navbar-cta" onClick={() => setOpen(false)}>Register</Link>
        </nav>
      </div>
    </header>
  )
                                 }
