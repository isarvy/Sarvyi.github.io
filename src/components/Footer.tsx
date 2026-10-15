import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>
          Copyright &copy; {new Date().getFullYear()} by {profile.name}{' '}
          <img src="/images/coolslogo.jpg" alt="" style={{ width: '2rem', verticalAlign: 'middle' }} /> | All
          Rights Reserved.
        </p>
      </div>

      <div className="footer-iconTop">
        <a href="#home" aria-label="Back to top">
          <i className="bx bx-up-arrow-alt" />
        </a>
      </div>
    </footer>
  )
}
