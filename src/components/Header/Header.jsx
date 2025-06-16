import { useNavigate } from 'react-router-dom';
import TransparentLogo from '../../resources/logo/logo-transparent.png';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  
  const RedirectHome = () => {
    navigate('/hjem');
  }

  return (
    <header className='header'>
      <button onClick={RedirectHome}>
        <img src={TransparentLogo} alt="Fly By Media" />
      </button>
    </header>
  );
}

export default Header;