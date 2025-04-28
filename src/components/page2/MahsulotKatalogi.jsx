import React from "react";
import "./MahsulotKatalogi.css";
import orgaguman from "../../assets/orgaguman.png";
import orgakaliyfos from "../../assets/orgakaliyfos.png";
import organex30 from "../../assets/organex30.png";
import orgauan32 from "../../assets/orgauan32.png";
import orgapzn from "../../assets/orgapzn.png";
import organexsuper from "../../assets/organexsuper.png";

const MahsulotKatalogi = () => {
  return (
    <div>
      <section class="products-section">
        <div className="button10">
          <button className="btn">Organik</button>
          <button className="btn">Organo Mineral</button>
          <button className="btn">Mineral</button>
          <button className="btn">Fungisid</button>
        </div>
        <div class="product-carousel">
          <div class="product-card">
            <img src={orgaguman} alt="" class="product-img" />
            <span class="eco-icon">🍃</span>
            <p class="product-name">ORGA GUMAT</p>
          </div>

          <div class="product-card">
            <img src={orgakaliyfos} alt="" class="product-img" />
            <span class="eco-icon">🍃</span>
            <p class="product-name">ORGA KALIY FOS</p>
          </div>

          <div class="product-card">
            <img src={orgauan32} alt="" class="product-img" />
            <span class="eco-icon">🍃</span>
            <p class="product-name">ORGAUAN 32</p>
          </div>

          <div class="product-card">
            <img src={orgapzn} alt="" class="product-img" />
            <span class="eco-icon">🍃</span>
            <p class="product-name">ORGA PZN</p>
          </div>
          
          <div class="product-card">
            <img src={organex30} alt="" class="product-img" />
            <span class="eco-icon">🍃</span>
            <p class="product-name">ORGANEX 30</p>
          </div>

          <div class="product-card">
            <img src={organexsuper} alt="" class="product-img" />
            <span class="eco-icon">🍃</span>
            <p class="product-name">ORGANEX SUPER</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MahsulotKatalogi;

{
  /* <section class="catalog">
        <div class="product-card">
          <img src="https://via.placeholder.com/200x200" alt="Mahsulot 1" />
          <h3>Mahsulot nomi 1</h3>
          <p>Qisqacha tavsif: bu yerda mahsulot haqida ma’lumot bo‘ladi.</p>
          <a href="#">Batafsil</a>
        </div>

        <div class="product-card">
          <img src="https://via.placeholder.com/200x200" alt="Mahsulot 2" />
          <h3>Mahsulot nomi 2</h3>
          <p>Qisqacha tavsif: bu yerda mahsulot haqida ma’lumot bo‘ladi.</p>
          <a href="#">Batafsil</a>
        </div>

        <div class="product-card">
          <img src="https://via.placeholder.com/200x200" alt="Mahsulot 3" />
          <h3>Mahsulot nomi 3</h3>
          <p>Qisqacha tavsif: bu yerda mahsulot haqida ma’lumot bo‘ladi.</p>
          <a href="#">Batafsil</a>
        </div>
      </section> */
}
