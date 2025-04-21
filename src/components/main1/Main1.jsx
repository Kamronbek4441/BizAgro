import React from "react";
import "./Main1.css";
import ogitlar from "../../assets/o'g'itlar.png";
import hertibisidlar from "../../assets/hertibisidlar.png";
import fungisidlar from "../../assets/fungisidlar.png";
import insekticidlar from "../../assets/insectigidlar.png";
import nematozidlar from "../../assets/nematozidlar.png";
import stimulyatorlar from "../../assets/stimulyatorlar.png";
import akaratsidlar from "../../assets/akaratsidlar.png";
import pinoks from "../../assets/pinoks.png";
import landask from "../../assets/landask.png";
import suris from "../../assets/suris.png";
import entus from "../../assets/entus.png";
import paxta from "../../assets/paxta.png";
import mevalar from "../../assets/mevalar.png";
import parnik from "../../assets/parnik.png";
import sabzavot from "../../assets/sabzavot.png";
import chegirma from "../../assets/chegirma.png";
import ifoda from "../../assets/ifoda.png";
import uzex from "../../assets/uzex.png";
import { Link } from "react-router-dom";

const Main1 = () => {
  return (
    <div>
      <section class="banner">
        <h1>MILLIY BOYLIK</h1>
        <p>2000 yillik paxtachilik an'analari</p>
        <button>Batafsil</button>
      </section>

      <div class="container1">
        <h1 class="title">MAHSULOT KATALOGI</h1>

        <div class="card10">
          <div class="card-image">
            <img src={ogitlar} alt="O'g'itlar rasmi" />
          </div>
          <div class="card-content">
            <h2>O‘G‘ITLAR</h2>
            <a href="/MahsulotKatalogi">KATALOGGA O‘TING &#10095;</a>
          </div>
        </div>
        {/* <div class="main-card">
          <img src={ogitlar} alt="" />
          <div class="main-card-text">
            <h2>O‘G‘ITLAR</h2>
            <a href="#" class="catalog-link">
              KATALOGGA O‘TING →
            </a>
          </div>
        </div> */}

        <div class="categories">
          <div class="category">
            <img src={akaratsidlar} alt="" />
            <span>Akaratsidlar</span>
          </div>
          <div class="category">
            <img src={stimulyatorlar} alt="" />
            <span>Stimulyatorlar</span>
          </div>
          <div class="category">
            <img src={nematozidlar} alt="" />
            <span>Nematotsidlar</span>
          </div>
          <div class="category">
            <img src={insekticidlar} alt="" />
            <span>Insektitsidlar</span>
          </div>
          <div class="category">
            <img src={fungisidlar} alt="" />
            <span>Fungitsidlar</span>
          </div>
          <div class="category">
            <img src={hertibisidlar} alt="" />
            <span>Herbitsidlar</span>
          </div>
        </div>
      </div>

      <section class="products-section">
        <h2 class="title">TANLANGAN MAHSULOTLAR</h2>
        <div class="product-carousel">
          <button class="nav-btn left">
            <Link to="MahsulotKatalogi">&#10094;</Link>
          </button>

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

          <button class="nav-btn right">
            <Link to="MahsulotKatalogi">&#10095;</Link>
          </button>
        </div>
      </section>

      <section class="about">
        <h2>KOMPANIYA HAQIDA</h2>
        <p>
          «BIZAGRO» brendi ostida ishlab chiqarilayotgan o‘g‘itlar ro‘yxatidan
          tashqari mijozlar talablariga individual yondashuv holda suspenziya va
          quruq holatdagi o‘g‘itlarni ishlab chiqarib, ularning yuqori hosil
          olishlariga katta hissa qo‘shmoqda.
        </p>
        <p>
          Hozirgi kunda jadal sur’atlar bilan rivojlanayotgan kompaniyalardan
          biri hisoblanadi. Yaqin yillarda ishlab chiqarilayotgan agroximyo
          mahsulotlari ro‘yxatiga yana 100ga yaqin murakkab turdagi suyuq,
          granul va quyuq holatdagi o‘g‘itlarni ishlab chiqarish
          rejalashtirilgan.
        </p>
        <Link className="batafsil" to="/About">
          Batafsil
        </Link>
      </section>

      <div className="feedback-container">
        <h2 className="feedback-title">Fikr-Mulohaza</h2>
        <form className="feedback-form">
          <div className="input-group">
            <input type="text" placeholder="Ism" required />
            <input type="text" placeholder="Telefon" required />
            <input type="email" placeholder="Elektron pochta" required />
          </div>
          <div className="textarea-group">
            <label htmlFor="message">Xabar</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Xabaringizni kiriting..."
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Yuborish
          </button>
        </form>
      </div>

      <footer>
        <p>&copy; 2025 BIZAGRO. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
};

export default Main1;
