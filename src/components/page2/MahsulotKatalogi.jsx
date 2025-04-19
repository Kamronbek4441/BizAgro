import React from "react";
import "./MahsulotKatalogi.css";
import pinoks from "../../assets/pinoks.png";
import landask from "../../assets/landask.png";
import suris from "../../assets/suris.png";
import entus from "../../assets/entus.png";

const MahsulotKatalogi = () => {
  return (
    <div>
      <section class="products-section">
        <div class="product-carousel">
          <div class="product-card">
            <img src={pinoks} alt="" class="product-img" />
            <span class="eco-icon">🍃</span>
            <p class="product-name">PINOKS</p>
          </div>

          <div class="product-card">
            <img src={landask} alt="" class="product-img" />
            <span class="eco-icon">🍃</span>
            <p class="product-name">LANDASK</p>
          </div>

          <div class="product-card">
            <img src={suris} alt="" class="product-img" />
            <span class="eco-icon">🍃</span>
            <p class="product-name">SURIS</p>
          </div>

          <div class="product-card">
            <img src={entus} alt="" class="product-img" />
            <span class="eco-icon">🍃</span>
            <p class="product-name">ENTUS</p>
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
