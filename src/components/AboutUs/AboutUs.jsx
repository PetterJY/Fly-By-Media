import './AboutUs.css';

const AboutUs = () => {
  return (
    <main className="about-main">
      <section className="about-intro">
        <h5 className="about-intro-title">Om oss</h5>
        <h1 className="about-main-title">Din lokale dronepartner i Trøndelag</h1>
        <div className="about-content">
          <div className="about-left">
            <p>
              Fly By Media består av dedikerte fagfolk med lidenskap for dronefotografering og visuell historiefortelling. 
              Vi har base i Trøndelag, og tilbyr tjenester over hele landet.
            </p>
            <p>
              Vår erfaring og kompetanse gjør oss i stand til å levere skreddersydde løsninger for både privatpersoner og bedrifter. 
              Vi legger stor vekt på kvalitet, sikkerhet og fornøyde kunder.
            </p>
            <p>
              Kontakt oss for en uforpliktende prat om hvordan vi kan hjelpe deg med å løfte ditt prosjekt til nye høyder!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;