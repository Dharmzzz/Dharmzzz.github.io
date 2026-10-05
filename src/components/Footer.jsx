import { FaGithub, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">
            <span className="logo-bracket">&lt;</span>dk
            <span className="logo-slash">/</span>
            <span className="logo-bracket">&gt;</span>
          </span>
          <p className="footer-copy">© 2026 Dharmith Kishan. Crafted with passion.</p>
          <div className="footer-socials">
            <a href="https://github.com/dhamzzz" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="https://discord.com/users/dhamzzz" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Discord">
              <FaDiscord size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
