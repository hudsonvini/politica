"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import style from "./Depoimentos.module.css";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { fontSecundaria } from "@/app/fonts";

export default function Depoimentos() {
  useEffect(() => {
    const swiperEl = document.querySelector(".swiper-container");
    const buttonElNext = document.querySelector(".nextButton");
    const buttonElPrev = document.querySelector(".prevButton");

    buttonElNext.addEventListener("click", () => {
      swiperEl.swiper.slideNext();
    });

    buttonElPrev.addEventListener("click", () => {
      swiperEl.swiper.slidePrev();
    });
  });

  return (
    <section className={style.container}>
      <Swiper
        className={`${style.areaImage} swiper-container`}
        //breaks por resolucao no slidesPerView
        modules={[Navigation, Pagination]}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            src="./images/imagesDepoimentos/imagesDepoimentos.jpg"
            alt="Image Depoimento"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/imagesDepoimentos/imagesDepoimentos.jpg"
            alt="Image Depoimento"
          />
        </SwiperSlide>
      </Swiper>

      {/* Area Text */}
      <div className={style.areaText}>
        <h2 className={style.title}>Ele tem o apoio da população</h2>
        <p className={`${style.description} ${fontSecundaria.className}`}>
          Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de
          novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em
          Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa
          Civil da Presidência da República durante o governo do presidente
          Bolsonaro (2021-2022). Foi deputado federal por quatro mandatos e
          chegou ao Senado em 2011, sendo eleito novamente em 2018. Desde 2013,
          Ciro Nogueira preside o Progressistas, um dos maiores partidos
          políticos do Brasil
        </p>

        <span className={style.dateBorn}>nascido em 1997</span>
        <h3 className={style.name}>Dona maria do rosario</h3>

        {/* Area Buttons */}
        <div className={style.areaButtons}>
          <button className={`${style.buttonPrev} prevButton`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <button className={`${style.buttonNext} nextButton`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
