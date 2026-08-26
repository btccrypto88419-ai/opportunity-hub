import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Find your next opportunity.</h1>
        <p>
          Discover jobs, internships, scholarships and career opportunities
          in Nigeria — all in one place.
        </p>
        <div className="hero-actions">
          <Link to="/jobs" className="btn btn-primary">Find Opportunities</Link>
          <Link to="/cv-builder" className="btn btn-secondary">Build My CV</Link>
        </div>
      </section>

      <section className="categories">
        <h2>Browse by category</h2>
        <div className="category-grid">
          <div className="category-card">💼 Jobs</div>
          <div className="category-card">🎓 Internships</div>
          <div className="category-card">📜 Scholarships</div>
          <div className="category-card">🌍 Remote</div>
        </div>
      </section>

      <section className="why">
        <h2>Why OpportunityHub</h2>
        <ul>
          <li>All opportunities in one trusted place</li>
          <li>Build a professional CV for free</li>
          <li>Track every application you make</li>
          <li>Get notified before deadlines</li>
        </ul>
      </section>

      <section className="trust-notice">
        <p>
          Always verify opportunities through the organization's official
          website before submitting personal information or paying any fees.
        </p>
      </section>
    </>
  )
            }
