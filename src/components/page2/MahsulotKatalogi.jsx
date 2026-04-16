import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MahsulotKatalogi.css";

import orgaguman from "../../assets/orgaguman.png";
import orgakaliyfos from "../../assets/orgakaliyfos.png";
import organex30 from "../../assets/organex30.png";
import orgauan32 from "../../assets/orgauan32.png";
import orgapzn from "../../assets/orgapzn.png";
import organexsuper from "../../assets/organexsuper.png";

const products = [
  {
    name: "ORGA GUMAT",
    image: orgaguman,
    category: "Organik",
    slug: "orga-gumat",
    description: "Organik o‘g‘it, hosildorlikni oshiradi"
  },
  {
    name: "ORGA KALIY FOS",
    image: orgakaliyfos,
    category: "Organik",
    slug: "orga-kaliy-fos",
    description: "Kaliy va fosforga boy o‘g‘it"
  },
  {
    name: "ORGAUAN 32",
    image: orgauan32,
    category: "Mineral",
    slug: "orgauan-32",
    description: "Azotli mineral o‘g‘it"
  },
  {
    name: "ORGA PZN",
    image: orgapzn,
    category: "Organik",
    slug: "orga-pzn",
    description: "Mikroelementlarga boy o‘g‘it"
  },
  {
    name: "ORGANEX 30",
    image: organex30,
    category: "Organo Mineral",
    slug: "organex-30",
    description: "Organik va mineral aralash"
  },
  {
    name: "ORGANEX SUPER",
    image: organexsuper,
    category: "Organo Mineral",
    slug: "organex-super",
    description: "Kuchli kompleks o‘g‘it"
  }
];

const MahsulotKatalogi = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <section className="products-section">

      {/* FILTER */}
      <div className="button10">
        <button className="btn" onClick={() => setFilter("All")}>Hammasi</button>
        <button className="btn" onClick={() => setFilter("Organik")}>Organik</button>
        <button className="btn" onClick={() => setFilter("Organo Mineral")}>Organo Mineral</button>
        <button className="btn" onClick={() => setFilter("Mineral")}>Mineral</button>
      </div>

      {/* PRODUCTS */}
      <div className="product-carousel">
        {filtered.map((item, index) => (
          <div className="product-card" key={index}>
            
            <img src={item.image} alt="" className="product-img" />

            {/* 🔥 YANGI CHIROYLI BADGE */}
            <span className="badge-text">
              {item.category}
            </span>

            <p className="product-name">{item.name}</p>

            <p className="product-desc">{item.description}</p>

            <Link to={`/product/${item.slug}`} className="view-btn">
              Batafsil
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
};

export default MahsulotKatalogi;

// import React from "react";
// import "./MahsulotKatalogi.css";
// import orgaguman from "../../assets/orgaguman.png";
// import orgakaliyfos from "../../assets/orgakaliyfos.png";
// import organex30 from "../../assets/organex30.png";
// import orgauan32 from "../../assets/orgauan32.png";
// import orgapzn from "../../assets/orgapzn.png";
// import organexsuper from "../../assets/organexsuper.png";

// const MahsulotKatalogi = () => {
//   return (
//     <div>
//       <section class="products-section">
//         <div className="button10">
//           <button className="btn">Organik</button>
//           <button className="btn">Organo Mineral</button>
//           <button className="btn">Mineral</button>
//           <button className="btn">Fungisid</button>
//         </div>
//         <div class="product-carousel">
//           <div class="product-card">
//             <img src={orgaguman} alt="" class="product-img" />
//             <span class="eco-icon">🍃</span>
//             <p class="product-name">ORGA GUMAT</p>
//           </div>

//           <div class="product-card">
//             <img src={orgakaliyfos} alt="" class="product-img" />
//             <span class="eco-icon">🍃</span>
//             <p class="product-name">ORGA KALIY FOS</p>
//           </div>

//           <div class="product-card">
//             <img src={orgauan32} alt="" class="product-img" />
//             <span class="eco-icon">🍃</span>
//             <p class="product-name">ORGAUAN 32</p>
//           </div>

//           <div class="product-card">
//             <img src={orgapzn} alt="" class="product-img" />
//             <span class="eco-icon">🍃</span>
//             <p class="product-name">ORGA PZN</p>
//           </div>
          
//           <div class="product-card">
//             <img src={organex30} alt="" class="product-img" />
//             <span class="eco-icon">🍃</span>
//             <p class="product-name">ORGANEX 30</p>
//           </div>

//           <div class="product-card">
//             <img src={organexsuper} alt="" class="product-img" />
//             <span class="eco-icon">🍃</span>
//             <p class="product-name">ORGANEX SUPER</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MahsulotKatalogi;

// {
//   /* <section class="catalog">
//         <div class="product-card">
//           <img src="https://via.placeholder.com/200x200" alt="Mahsulot 1" />
//           <h3>Mahsulot nomi 1</h3>
//           <p>Qisqacha tavsif: bu yerda mahsulot haqida ma’lumot bo‘ladi.</p>
//           <a href="#">Batafsil</a>
//         </div>

//         <div class="product-card">
//           <img src="https://via.placeholder.com/200x200" alt="Mahsulot 2" />
//           <h3>Mahsulot nomi 2</h3>
//           <p>Qisqacha tavsif: bu yerda mahsulot haqida ma’lumot bo‘ladi.</p>
//           <a href="#">Batafsil</a>
//         </div>

//         <div class="product-card">
//           <img src="https://via.placeholder.com/200x200" alt="Mahsulot 3" />
//           <h3>Mahsulot nomi 3</h3>
//           <p>Qisqacha tavsif: bu yerda mahsulot haqida ma’lumot bo‘ladi.</p>
//           <a href="#">Batafsil</a>
//         </div>
//       </section> */
// }
