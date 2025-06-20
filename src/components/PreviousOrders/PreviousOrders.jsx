import './PreviousOrders.css';

const PreviousOrders = () => {
  return (
    <main className="orders-main">
      <section className="orders-intro">
        <h5 className="orders-intro-title">Tidligere oppdrag</h5>
        <h1 className="orders-main-title">Se noen av våre tidligere oppdrag</h1>
        <div className="orders-content">
          <div className="orders-list">
            <p>
              Her vil du finne et utvalg av våre tidligere prosjekter. 
            </p>
            <p>
              Vi har levert dronefoto og video til både private og bedrifter over hele Trøndelag.
            </p>
            <div className="orders-placeholder">
              <span>Ingen oppdrag å vise akkurat nå.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PreviousOrders;