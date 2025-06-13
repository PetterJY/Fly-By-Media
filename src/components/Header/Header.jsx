import './Header.css';
import TransparentLogo from '../../resources/logo/logo-transparent.png';

const Header = () => {
  return (
    <header className='header'>
      <button onClick={() => window.location.href = '/home'}>
        <img src={TransparentLogo} alt="Fly By Media" />
      </button>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;