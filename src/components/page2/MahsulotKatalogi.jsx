import React from 'react'
import "./MahsulotKatalogi.css"

const MahsulotKatalogi = () => {
  return (
    <div>
       <main class="catalog-container">
    <section class="page-title">
      <h1>O‘SIMLIKLARNI HIMOYA QILISH VOSITALARI</h1>
      <p>Bosh sahifa / O‘simliklarni himoya qilish vositalari</p>
    </section>

    <section class="intro-card">
      <div class="number-box">8+<br /><span>Mahsulot turlari</span></div>
      <p>
        Kompaniyamiz mahsulotlari yuqori ishlab chiqarish samaradorligiga ega.
        Ular bilan ishlov berilganda, begona o‘t va zararkunandalar yo‘q qilinadi.
        Natijada hosildorlik 30-35% gacha oshadi.
      </p>
    </section>

    <section class="filters">
      <button class="filter-item">Akaratsidlar</button>
      <button class="filter-item active">Stimuluyatorlar</button>
      <button class="filter-item">Nematoditsidlar</button>
      <button class="filter-item">Insektitsidlar</button>
      <button class="filter-item">Fungitsidlar</button>
      <button class="filter-item">Gerbitsidlar</button>
    </section>

    <section class="products">
      <div class="product-card">
        <img src="https://ifoda.uz/uploads/products/thumbs/ENTOPIKS.png" alt="ENTOPIKS" />
        <p>ENTOPIKS</p>
      </div>
      <div class="product-card">
        <img src="https://ifoda.uz/uploads/products/thumbs/SIKLODEFOL.png" alt="SIKLODEFOL" />
        <p>SIKLODEFOL</p>
      </div>
      <div class="product-card">
        <img src="https://ifoda.uz/uploads/products/thumbs/ENTO_DEFOL.png" alt="ENTO DEFOL" />
        <p>ENTO DEFOL</p>
      </div>
      <div class="product-card">
        <img src="https://ifoda.uz/uploads/products/thumbs/XCHANGE.png" alt="X-CHANGE" />
        <p>X-CHANGE</p>
      </div>
      <div class="product-card">
        <img src="https://ifoda.uz/uploads/products/thumbs/ENTOVAKS_200.png" alt="ENTOVAKS 200" />
        <p>ENTOVAKS 200</p>
      </div>
      <div class="product-card">
        <img src="https://ifoda.uz/uploads/products/thumbs/SILVER.png" alt="SILVER" />
        <p>SILVER</p>
      </div>
      <div class="product-card">
        <img src="https://ifoda.uz/uploads/products/thumbs/HOSILIN.png" alt="HOSILIN" />
        <p>HOSILIN</p>
      </div>
      <div class="product-card">
        <img src="https://ifoda.uz/uploads/products/thumbs/ENTOJEAN.png" alt="ENTOJEAN" />
        <p>ENTOJEAN</p>
      </div>
    </section>
  </main>
    </div>
  );
}

export default MahsulotKatalogi

      {/* <section class="catalog">
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
      </section> */}