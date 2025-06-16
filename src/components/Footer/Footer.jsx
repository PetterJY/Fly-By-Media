import Logo from '../../resources/logo/logo-transparent.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={Logo} alt="Fly By Media logo" className="footer-logo" />
      </div>
      <div className="footer-center">
        <span>© {new Date().getFullYear()} Fly By Media AS. Alle rettigheter reservert.</span>
      </div>
      <div className="footer-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="mailto:post@flybymedia.no" aria-label="E-post">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;