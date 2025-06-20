import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Siden ble ikke funnet</p>
      <p className="notfound-description">Siden du leter etter eksisterer ikke.</p>
      <button className="notfound-btn" onClick={() => navigate('/hjem')}>
        Gå til forsiden
      </button>
    </main>
  );
}

export default PageNotFound;