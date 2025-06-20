import './ContactUs.css';

const ContactUs = () => {
  return (
    <main className="contact-main">
      <section className="contact-intro">
        <h5 className="contact-intro-title">Kontakt oss</h5>
        <h1 className="contact-main-title">Vi vil gjerne høre fra deg!</h1>
        <div className="contact-content">
          <div className="contact-left">
            <form className="contact-form">
              <label>
                Navn
                <input type="text" name="name" required />
              </label>
              <label>
                E-post
                <input type="email" name="email" required />
              </label>
              <label>
                Melding
                <textarea name="message" rows="5" required />
              </label>
              <button type="submit" className="primary-btn">Send melding</button>
            </form>
          </div>
          <div className="contact-right">
            <div className="contact-info">
              <h3>Fly By Media</h3>
              <p>E-post: <a href="mailto:post@flybymedia.no">post@flybymedia.no</a></p>
              <p>Telefon: <a href="tel:+4799999999">+47 99 99 99 99</a></p>
              <p>Trøndelag, Norge</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;