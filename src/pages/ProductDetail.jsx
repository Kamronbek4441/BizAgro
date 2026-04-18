import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const data = {
  "orga-gumat": {
    name: "ORGA GUMAT",
    description: "Organik o‘g‘it, o‘simlikni kuchaytiradi va hosildorlikni oshiradi",
    composition: [
      { name: "Gumat kislotalari", value: "60%" },
      { name: "Organik modda", value: "80%" },
      { name: "Kaliy", value: "8%" }
    ],
    usage: [
      { crop: "G‘alla", norm: "0.5-0.8 kg/ga" },
      { crop: "Sabzavot", norm: "0.3-0.5 kg/ga" },
      { crop: "Paxta", norm: "0.5 kg/ga" }
    ],
    benefits: [
      "Ildiz tizimini kuchaytiradi",
      "Hosildorlikni oshiradi",
      "Tuproq unumdorligini yaxshilaydi"
    ]
  },

  "orga-kaliy-fos": {
    name: "ORGA KALIY FOS",
    description: "Kaliy va fosforga boy mineral-organik o‘g‘it",
    composition: [
      { name: "Kaliy (K2O)", value: "20%" },
      { name: "Fosfor (P2O5)", value: "18%" },
      { name: "Organik modda", value: "30%" }
    ],
    usage: [
      { crop: "G‘alla", norm: "0.4-0.6 kg/ga" },
      { crop: "Kartoshka", norm: "0.5 kg/ga" }
    ],
    benefits: [
      "Gullashni kuchaytiradi",
      "Meva sifatini yaxshilaydi",
      "Hosilni ko‘paytiradi"
    ]
  },

  "orgauan-32": {
    name: "ORGAUAN 32",
    description: "Yuqori azotli mineral o‘g‘it",
    composition: [
      { name: "Azot (N)", value: "32%" },
      { name: "Organik modda", value: "15%" }
    ],
    usage: [
      { crop: "G‘alla", norm: "0.5-0.7 kg/ga" },
      { crop: "Makkajo‘xori", norm: "0.6 kg/ga" }
    ],
    benefits: [
      "Tez o‘sishni ta’minlaydi",
      "Yashil massa ko‘payadi",
      "O‘simlikni kuchaytiradi"
    ]
  },

  "orga-pzn": {
    name: "ORGA PZN",
    description: "Mikroelementlarga boy kompleks o‘g‘it",
    composition: [
      { name: "Rux (Zn)", value: "10%" },
      { name: "Fosfor", value: "15%" },
      { name: "Azot", value: "12%" }
    ],
    usage: [
      { crop: "Sabzavot", norm: "0.3-0.5 kg/ga" },
      { crop: "Mevali daraxt", norm: "0.5 kg/ga" }
    ],
    benefits: [
      "Mikroelement yetishmovchiligini bartaraf etadi",
      "O‘sishni tezlashtiradi"
    ]
  },

  "organex-30": {
    name: "ORGANEX 30",
    description: "Organik va mineral aralash o‘g‘it",
    composition: [
      { name: "Organik modda", value: "30%" },
      { name: "Azot", value: "10%" },
      { name: "Kaliy", value: "10%" }
    ],
    usage: [
      { crop: "Paxta", norm: "0.5-0.8 kg/ga" },
      { crop: "G‘alla", norm: "0.4-0.6 kg/ga" }
    ],
    benefits: [
      "Balanslangan oziqlantirish",
      "Hosildorlikni oshiradi"
    ]
  },

  "organex-super": {
    name: "ORGANEX SUPER",
    description: "Kuchli kompleks organo-mineral o‘g‘it",
    composition: [
      { name: "Azot", value: "15%" },
      { name: "Fosfor", value: "10%" },
      { name: "Kaliy", value: "15%" }
    ],
    usage: [
      { crop: "Sabzavot", norm: "0.5 kg/ga" },
      { crop: "G‘alla", norm: "0.6 kg/ga" }
    ],
    benefits: [
      "Tez natija beradi",
      "O‘sishni kuchaytiradi",
      "Hosilni oshiradi"
    ]
  },

  "orgamin-ultra": {
    name: "ORGAMIN ULTRA",
    description: "Aminokislotalar kompleksi, stressga qarshi vosita",
    composition: [
      { name: "Erkin aminokislotalar", value: ">80%" },
      { name: "Organik modda", value: "80%" },
      { name: "Organik karbon", value: "32%" }
    ],
    usage: [
      { crop: "G‘alla", norm: "0.5-0.8 kg/ga" },
      { crop: "Sabzavot", norm: "0.5-0.8 kg/ga" }
    ],
    benefits: [
      "Stressga qarshi himoya",
      "O‘sishni tezlashtiradi",
      "Hosildorlikni oshiradi"
    ]
  },

  "orga-fulvimax": {
    name: "ORGA FULVIMAX",
    description: "Fulvo kislotalarga boy o‘g‘it",
    composition: [
      { name: "Fulvo kislotalar", value: "50%" },
      { name: "Organik modda", value: "65%" },
      { name: "Kaliy", value: "10%" }
    ],
    usage: [
      { crop: "Sabzavot", norm: "0.3-0.5 kg/ga" },
      { crop: "G‘alla", norm: "0.3-0.5 kg/ga" }
    ],
    benefits: [
      "Ildizni kuchaytiradi",
      "Oziqa o‘zlashtirishni oshiradi",
      "Hosil sifatini yaxshilaydi"
    ]
  },

  "orga-seaweed": {
    name: "ORGA SEAWEED",
    description: "Dengiz o‘tlaridan olingan tabiiy ekstrakt",
    composition: [
      { name: "Organik modda", value: "50%" },
      { name: "Kaliy", value: "20%" },
      { name: "Tabiiy gormonlar", value: "10%" }
    ],
    usage: [
      { crop: "Sabzavot", norm: "0.3-0.5 kg/ga" },
      { crop: "Meva daraxti", norm: "0.4 kg/ga" }
    ],
    benefits: [
      "Immunitetni oshiradi",
      "Stressga chidamlilik beradi",
      "Hosilni ko‘paytiradi"
    ]
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

      {/* TARKIB */}
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

      {/* QO‘LLASH */}
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

      {/* FOYDA */}
      <h2>Foydasi</h2>
      <ul>
        {product.benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

    </div>
  );
}