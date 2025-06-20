import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const RedirectContactUs = () => {
    navigate('/kontakt-oss');
  }

  const RedirectPreviousOrders = () => {
    navigate('/tidligere-jobber');
  }

  const RedirectAboutUs = () => {
    navigate('/om-oss');
  }

  return (
    <main className="home-main">
      <section className="intro">
        <h5 className="intro-title">Kort om Fly By Media</h5>
        <h1 className="main-title">Fang din opplevelse fra luften</h1>
        <div className="intro-content">
          <div className="intro-left">
            <p>
              Vi som jobber i Fly By Media er din lokale partner i Trøndelag, 
              med lang erfaring og høy kompetanse innen dronefotografering og produksjon av visuelt innhold fra luften. 
              Vi spesialiserer oss på å skape imponerende bilder og videoer, for eksempel av eiendommer, som gir unik synlighet på nettet.
            </p>
            <p>
              Alene eller i samarbeid med våre partnere, 
              planlegger og utfører vi alle typer droneoppdrag i Trøndelag og store deler av landet, 
              og leverer alltid høykvalitetsresultater tilpasset dine behov!
            </p>
            <div className="home-buttons">
              <button className="home-btn" onClick={RedirectAboutUs}>Om oss</button>
              <button className="home-btn" onClick={RedirectContactUs}>Kontakt oss</button>
              <button className="home-btn" onClick={RedirectPreviousOrders}>Se tidligere oppdrag</button>
            </div>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="stat">
          <div className="stat-number">1</div>
          <div className="stat-label">Ansatte</div>
        </div>
        <div className="stat">
          <div className="stat-number">200+</div>
          <div className="stat-label">Utførte oppdrag</div>
        </div>
      </section>
    </main>
  );
}

export default Home;