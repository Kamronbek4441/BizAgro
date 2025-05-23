import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import BizAgro from "../../assets/bizagro.jpg";
import search from "../../assets/search.png";
import telegram from "../../assets/telegram.png";
import phoneIcon from "../../assets/phoneIcon.png";

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <div className="top-bar">
          <div className="logo">
            <img src={BizAgro} alt="Logo" />
            <span>Hirmonga baraka!</span>
          </div>
          <div className="contact-info">
            <span>
              <img src={phoneIcon} alt="" /> +(998) 90 598-51-14
            </span>
            <button className="search-btn">
              <img src={search} alt="" />
            </button>
            <button className="telegram-btn">
              <img src={telegram} alt="" />
            </button>
            <select className="language-selector">
              <option>UZ</option>
              <option>RU</option>
              <option>EN</option>
            </select>
          </div>
        </div>

        <nav className="navbar">
          {/* Hamburger tugma faqat kichik ekranlar uchun */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <ul className={menuOpen ? "active" : ""}>
            <li>
              <Link to="/">BOSH SAHIFA</Link>
            </li>
            <li>
              <Link to="/About">KOMPANIYA</Link>
            </li>
            <li>
              <Link to="/MahsulotKatalogi">MAHSULOT KATALOGI</Link>
            </li>
            <li>
              <Link to="/">BLOG</Link>
            </li>
            <li>
              <Link to="/">YANGILIKLAR</Link>
            </li>
            <li>
              <Link to="/Kontaktlar">KONTAKTLAR</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Main;

// import React from "react";
// import "./Main.css";
// import { Link } from "react-router-dom";
// import BizAgro from "../../assets/bizagro.jpg";
// import search from "../../assets/search.png";
// import telegram from "../../assets/telegram.png";
// import phoneIcon from "../../assets/phoneIcon.png";

// const Main = () => {
//   return (
//     <div>
//       <header>
//         <div class="top-bar">
//           <div class="logo">
//             <img src={BizAgro} alt="" />
//             <span>Hirmonga baraka!</span>
//           </div>
//           <div class="contact-info">
//             <span>
//               <img src={phoneIcon} alt="" /> +(998) 90 598-51-14
//             </span>
//             <button class="search-btn">
//               <img src={search} alt="" />
//             </button>
//             <button class="telegram-btn">
//               <img src={telegram} alt="" />
//             </button>
//             <select class="language-selector">
//               <option>UZ</option>
//               <option>RU</option>
//               <option>EN</option>
//             </select>
//           </div>
//         </div>
//         <nav class="navbar">
//           <ul>
//             <li>
//               <Link to="/">BOSH SAHIFA</Link>
//             </li>
//             <li>
//               <Link to="/About">KOMPANIYA</Link>
//             </li>
//             <li>
//               <Link to="/MahsulotKatalogi">MAHSULOT KATALOGI</Link>
//             </li>
//             <li>
//               <Link to="/">BLOG</Link>
//             </li>
//             <li>
//               <Link to="/">YANGILIKLAR</Link>
//             </li>
//             <li>
//               <Link to="/Kontaktlar">KONTAKTLAR</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Main;
