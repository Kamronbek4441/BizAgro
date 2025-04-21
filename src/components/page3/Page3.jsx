import React from "react";
import "./Page3.css";

const Page3 = () => {
  return (
    <section className="contact-container">
      <h1 className="contact-title">Biz bilan bog'laning</h1>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Manzil</h3>
          <p>Namangan shahri, Oromgoh ko‘chasi, 27-uy</p>
          <p>Toshkent shahri, Abdulla Qahhor ko‘chasi, 46-uy</p>
        </div>
        <div className="contact-card">
          <h3>Telefon</h3>
          <a href="tel:+998781470500">+998 90 598-51-14</a>
        </div>
        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:info@ifoda.uz">info@bizagro.uz</a>
        </div>
      </div>

      <div className="form-section">
        <h2>Fikr-mulohaza yuboring</h2>
        <form>
          <input type="text" placeholder="Ismingiz" required />
          <input type="email" placeholder="Email manzilingiz" required />
          <textarea rows="5" placeholder="Xabaringiz" required></textarea>
          <button type="submit">Yuborish</button>
        </form>
      </div>
    </section>
  );
};

export default Page3;
