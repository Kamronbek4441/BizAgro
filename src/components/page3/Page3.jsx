import React, { useRef } from "react";
import "./Page3.css";

const Page3 = () => {
  const form = useRef();

  const sendMessageToTelegram = (e) => {
    e.preventDefault();

    const botToken = "8392553502:AAEay7Yp1q0QCs4qlZ5Fcas49LYpiAmjVMA"; // Telegram bot token
    const chatId = "-1003838043358"; // Chat ID
    const name = form.current.from_name.value;
    const email = form.current.from_email.value;
    const message = form.current.message.value;

    const text = `📩 Yangi xabar!\nIsm: ${name}\nEmail: ${email}\nXabar: ${message}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`)
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          alert("Xabaringiz yuborildi!");
          form.current.reset();
        } else {
          alert("Xatolik yuz berdi, qayta urinib ko'ring.");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Xatolik yuz berdi, qayta urinib ko'ring.");
      });
  };

  return (
    <div className="bg-image">
      <section className="contact-container">
      <h1 className="contact-title">Biz bilan bog'laning</h1>

      <div className="form-section">
        <h2>Fikr-mulohaza yuboring</h2>
        <form ref={form} onSubmit={sendMessageToTelegram}>
          <input type="text" name="from_name" placeholder="Ismingiz" required />
          <input type="email" name="from_email" placeholder="Email manzilingiz" required />
          <textarea name="message" rows="5" placeholder="Xabaringiz" required></textarea>
          <button type="submit">Yuborish</button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Page3;