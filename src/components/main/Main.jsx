import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Main.css";
import BizAgro from "../../assets/bizagro.jpg";
import search from "../../assets/search.png";
import telegram from "../../assets/telegram.png";
import phoneIcon from "../../assets/phoneIcon.png";

const Main = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Sahifa o'zgarganda hamburgerni avtomatik yopish
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div>
      <header>
        <div className="top-bar">
          <div className="logo">
            <img src={BizAgro} alt="Logo" />
            <span>Hirmonga baraka!</span>
          </div>

          <div className="contact-info">
            <a href="tel:+998905985114" className="phone-link">
              <img src={phoneIcon} alt="Phone" />
              +(998) 90 598-51-14
            </a>

            <button className="search-btn">
              <img src={search} alt="Search" />
            </button>

            <a
              href="https://t.me/bizagrouz"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-btn"
            >
              <img src={telegram} alt="Telegram" />
            </a>

            <select className="language-selector">
              <option>UZ</option>
              <option>RU</option>
              <option>EN</option>
            </select>
          </div>

          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`navbar ${open ? "active" : ""}`}>
          <ul>
            <li><Link to="/">BOSH SAHIFA</Link></li>
            <li><Link to="/About">KOMPANIYA</Link></li>
            <li><Link to="/MahsulotKatalogi">MAHSULOT KATALOGI</Link></li>
            <li><Link to="/">BLOG</Link></li>
            <li><Link to="/">YANGILIKLAR</Link></li>
            <li><Link to="/Kontaktlar">KONTAKTLAR</Link></li>
          </ul>

          <div className="mobile-contact">
            <a href="tel:+998905985114" className="phone-link mobile-phone">
              <img src={phoneIcon} alt="Phone" />
              +(998) 90 598-51-14
            </a>

            <div className="mobile-icons">
              <a
                href="https://t.me/bizagrouz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telegram} alt="Telegram" />
              </a>

              <button className="search-btn">
                <img src={search} alt="Search" />
              </button>
            </div>

            <select className="language-selector mobile-lang">
              <option>UZ</option>
              <option>RU</option>
              <option>EN</option>
            </select>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Main;

// import React, { useState } from "react";
// import "./Main.css";
// import { Link } from "react-router-dom";
// import BizAgro from "../../assets/bizagro.jpg";
// import search from "../../assets/search.png";
// import telegram from "../../assets/telegram.png";
// import phoneIcon from "../../assets/phoneIcon.png";

// const Main = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div>
//       <header>
//         <div className="top-bar">
//           <div className="logo">
//             <img src={BizAgro} alt="" />
//             <span>Hirmonga baraka!</span>
//           </div>

//           <div className="contact-info">
//             <a href="tel:+998905985114" className="phone-link">
//               <img src={phoneIcon} alt="" />
//               +(998) 90 598-51-14
//             </a>

//             <button className="search-btn">
//               <img src={search} alt="" />
//             </button>

//             <a
//               href="https://t.me/bizagrouz"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="telegram-btn"
//             >
//               <img src={telegram} alt="" />
//             </a>

//             <select className="language-selector">
//               <option>UZ</option>
//               <option>RU</option>
//               <option>EN</option>
//             </select>
//           </div>

//           <div className="hamburger" onClick={() => setOpen(!open)}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>

//         <nav className={`navbar ${open ? "active" : ""}`}>
//           <ul>
//             <li><Link to="/">BOSH SAHIFA</Link></li>
//             <li><Link to="/About">KOMPANIYA</Link></li>
//             <li><Link to="/MahsulotKatalogi">MAHSULOT KATALOGI</Link></li>
//             <li><Link to="/">BLOG</Link></li>
//             <li><Link to="/">YANGILIKLAR</Link></li>
//             <li><Link to="/Kontaktlar">KONTAKTLAR</Link></li>
//           </ul>

//           {/* MOBILE CONTACT */}
//           <div className="mobile-contact">
//             <a href="tel:+998905985114" className="phone-link mobile-phone">
//               <img src={phoneIcon} alt="" />
//               +(998) 90 598-51-14
//             </a>

//             <div className="mobile-icons">
//               <a
//                 href="https://t.me/bizagrouz"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img src={telegram} alt="" />
//               </a>

//               <button className="search-btn">
//                 <img src={search} alt="" />
//               </button>
//             </div>

//             <select className="language-selector mobile-lang">
//               <option>UZ</option>
//               <option>RU</option>
//               <option>EN</option>
//             </select>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Main;