import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>&copy; {new Date().getFullYear()} OpportunityHub. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </footer>
  )
      }
