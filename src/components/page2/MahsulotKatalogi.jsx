import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MahsulotKatalogi.css";

import orgaguman from "../../assets/orgaguman.png";
import orgakaliyfos from "../../assets/orgakaliyfos.png";
import organex30 from "../../assets/organex30.png";
import orgauan32 from "../../assets/orgauan32.png";
import orgapzn from "../../assets/orgapzn.png";
import organexsuper from "../../assets/organexsuper.png";
import orgaseaweed from "../../assets/orgaseaweed.jpg"
import orgafulvimax from "../../assets/orgafulwimax.jpg"
import orgaminultra from "../../assets/orgaminultra.jpg"

const products = [
  {
    name: "ORGA GUMAT",
    image: orgaguman,
    category: "Organik",
    slug: "orga-gumat",
    description: "Organik o‘g‘it, hosildorlikni oshiradi",
  },
  {
    name: "ORGA KALIY FOS",
    image: orgakaliyfos,
    category: "Organik",
    slug: "orga-kaliy-fos",
    description: "Kaliy va fosforga boy o‘g‘it",
  },
  {
    name: "ORGAUAN 32",
    image: orgauan32,
    category: "Mineral",
    slug: "orgauan-32",
    description: "Azotli mineral o‘g‘it",
  },
  {
    name: "ORGA PZN",
    image: orgapzn,
    category: "Organik",
    slug: "orga-pzn",
    description: "Mikroelementlarga boy o‘g‘it",
  },
  {
    name: "ORGANEX 30",
    image: organex30,
    category: "Organo Mineral",
    slug: "organex-30",
    description: "Organik va mineral aralash",
  },
  {
    name: "ORGANEX SUPER",
    image: organexsuper,
    category: "Organo Mineral",
    slug: "organex-super",
    description: "Kuchli kompleks o‘g‘it",
  },
  {
    name: "ORGAMIN ULTRA",
    image: orgaminultra,
    category: "Organik",
    slug: "orgamin-ultra",
    description: "Aminokislotalar kompleksi, stressga qarshi",
  },
  {
    name: "ORGA FULVIMAX",
    image: orgafulvimax,
    category: "Organik",
    slug: "orga-fulvimax",
    description: "Fulvo kislotalarga boy kuchli o‘g‘it",
  },
  {
    name: "ORGA SEAWEED",
    image: orgaseaweed,
    category: "Organik",
    slug: "orga-seaweed",
    description: "Dengiz o‘tlaridan olingan ekstrakt",
  },
];

const MahsulotKatalogi = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <section className="products-section">
      {/* FILTER BUTTONS */}
      <div className="button10">
        <button
          className={`btn ${filter === "All" ? "active" : ""}`}
          onClick={() => setFilter("All")}
        >
          Hammasi
        </button>

        <button
          className={`btn ${filter === "Organik" ? "active" : ""}`}
          onClick={() => setFilter("Organik")}
        >
          🍃 Organik
        </button>

        <button
          className={`btn ${filter === "Organo Mineral" ? "active" : ""}`}
          onClick={() => setFilter("Organo Mineral")}
        >
          🌿 Organo Mineral
        </button>

        <button
          className={`btn ${filter === "Mineral" ? "active" : ""}`}
          onClick={() => setFilter("Mineral")}
        >
          ⚗️ Mineral
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="product-carousel">
        {filtered.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt="" className="product-img" />

            {/* BADGE */}
            <span className="badge-text">🍃 {item.category}</span>

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
