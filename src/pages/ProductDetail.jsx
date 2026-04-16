import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const data = {
  "orga-gumat": {
    name: "ORGA GUMAT",
    description: "Organik o‘g‘it, o‘simlikni kuchaytiradi",
    composition: [
      { name: "Aminokislota", value: "50%" },
      { name: "Organik modda", value: "80%" }
    ],
    usage: [
      { crop: "G‘alla", norm: "0.5-0.8 kg/ga" },
      { crop: "Sabzavot", norm: "0.3-0.5 kg/ga" }
    ],
    benefits: ["Hosildorlik oshadi", "Ildiz kuchayadi"]
  }
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = data[slug];

  if (!product) return <h2>Topilmadi</h2>;

  return (
    <div className="detail-container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <h2>Tarkibi</h2>
      <table>
        <tbody>
          {product.composition.map((i, idx) => (
            <tr key={idx}>
              <td>{i.name}</td>
              <td>{i.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Qo‘llash</h2>
      <table>
        <tbody>
          {product.usage.map((i, idx) => (
            <tr key={idx}>
              <td>{i.crop}</td>
              <td>{i.norm}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Foydasi</h2>
      <ul>
        {product.benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}