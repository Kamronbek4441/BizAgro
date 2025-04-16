import React from "react";
import "./Page1.css";

const Page1 = () => {
  return (
    <div>
      <main class="container10">
        <section class="tabs">
          <button class="active">Kompaniya haqida</button>
          <button>Agronomiyaga</button>
          <button>Sertifikatlar</button>
        </section>

        <section class="content10">
          <h2>BIZ HAQIMIZDA</h2>
          <p>
            "IFODA Agro Kimyo Himoya" MCHJ O'zbekistondagi dehqon va fermer
            xo‘jaliklari, davlat tashkilotlari va boshqa ekinlar
            yetishtiruvchilarga yuqori sifatli agrotexnik mahsulotlar yetkazib
            beruvchi yirik kompaniyalardan biridir.
          </p>

          <img
            src="https://ifoda.uz/uploads/pages/2024/02/thumbs/437_282_0_ifoda_03.jpg"
            alt="Zavod ichki ko‘rinishi"
            class="image"
          />

          <p>
            Zavod mahsulotlarining sifati maxsus laboratoriyada sinovdan
            o‘tkaziladi. Ilg‘or texnologiyalar asosida ishlab chiqarilayotgan
            mahsulotlar O‘zbekistondagi bozorlarda yetakchi o‘rinlarni
            egallamoqda.
          </p>

          <img
            src="https://ifoda.uz/uploads/pages/2024/02/thumbs/437_282_0_ifoda_02.jpg"
            alt="Omborxona"
            class="image"
          />

          <p>
            Kompaniya mahsulotlari nafaqat O‘zbekistonda, balki chet el
            davlatlarida ham katta talabga ega. Mahsulotlar Yevropa va Osiyo
            bozorlariga eksport qilinadi.
          </p>

          <img
            src="https://ifoda.uz/uploads/pages/2024/02/thumbs/437_282_0_ifoda_01.jpg"
            alt="Daladagi ishchilar"
            class="image"
          />

          <p>
            "IFODA Agro Kimyo Himoya" MCHJ har yili o‘z mahsulot assortimentini
            kengaytirib bormoqda. Kompaniyaning maqsadi — ekologik toza va
            samarali agrotexnik vositalar orqali fermerlar va dehqonlarga yordam
            berishdir.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Page1;
