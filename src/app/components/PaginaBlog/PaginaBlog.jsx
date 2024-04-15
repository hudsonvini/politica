import { fontSecundaria } from '@/app/fonts';
import style from './PaginaBlog.module.css'
import Link from "next/link"; // Importing the Link component from Next.js

export default function PaginaBlog() {
  const news = [
    {
      imageSrc: "/images/imagesBlog/exampleBlog.png", // Image source for the news
      newsTitle:
        "No Dia do Consumidor, Ciro Nogueira apresenta projetos para garantir mais segurança e transparência nas relações de consumo", // Title of the news
      newsDate: "15 de março", // Date of the news
      newsContent:
        "Na data em que se comemora o Dia do Consumidor, 15 de Março, o senador Ciro Nogueira (Progressistas) apresentou mais dois projetos para garantir o...", // Content of the news
    },
    {
      imageSrc: "/images/imagesBlog/exampleBlog2.png",
      newsTitle:
        "No Dia do Consumidor, Ciro Nogueira apresenta projetos para garantir mais segurança e transparência nas relações de consumo",
      newsDate: "15 de março",
      newsContent:
        "Na data em que se comemora o Dia do Consumidor, 15 de Março, o senador Ciro Nogueira (Progressistas) apresentou mais dois projetos para garantir o...",
    },
    {
      imageSrc: "/images/imagesBlog/exampleBlog3.png",
      newsTitle:
        "No Dia do Consumidor, Ciro Nogueira apresenta projetos para garantir mais segurança e transparência nas relações de consumo",
      newsDate: "15 de março",
      newsContent:
        "Na data em que se comemora o Dia do Consumidor, 15 de Março, o senador Ciro Nogueira (Progressistas) apresentou mais dois projetos para garantir o...",
    },
    {
        imageSrc: "https://cironogueira.com.br/wp-content/uploads/2023/12/senador-ciro-nogueira-piaui-progressistas.jpg", // Image source for the news
        newsTitle:
          "No Dia do Consumidor, Ciro Nogueira apresenta projetos para garantir mais segurança e transparência nas relações de consumo", // Title of the news
        newsDate: "15 de março", // Date of the news
        newsContent:
          "Na data em que se comemora o Dia do Consumidor, 15 de Março, o senador Ciro Nogueira (Progressistas) apresentou mais dois projetos para garantir o...", // Content of the news
      },
      {
        imageSrc: "https://cironogueira.com.br/wp-content/uploads/2023/11/53266339200_2770a5de70_k.jpg",
        newsTitle:
          "No Dia do Consumidor, Ciro Nogueira apresenta projetos para garantir mais segurança e transparência nas relações de consumo",
        newsDate: "15 de março",
        newsContent:
          "Na data em que se comemora o Dia do Consumidor, 15 de Março, o senador Ciro Nogueira (Progressistas) apresentou mais dois projetos para garantir o...",
      },
      {
        imageSrc: "https://cironogueira.com.br/wp-content/uploads/2023/11/senador-ciro-nogueira-piaui-progressistas.jpg",
        newsTitle:
          "No Dia do Consumidor, Ciro Nogueira apresenta projetos para garantir mais segurança e transparência nas relações de consumo",
        newsDate: "15 de março",
        newsContent:
          "Na data em que se comemora o Dia do Consumidor, 15 de Março, o senador Ciro Nogueira (Progressistas) apresentou mais dois projetos para garantir o...",
      }
    // Add more news here...
  ];

  return (
    <section className={style.container}>
      {/* Container section */}
      <h2 className={style.titleBlog}>Blog</h2> {/* Title of the blog */}
      <article className={style.contentBlog}>
        {/* Content of the blog */}
        {news.map((item, index) => (
          <article key={index} className={style.containerSingle}>
            {/* Single news article */}
            <article className={style.containerImgNews}>
              {/* Container for the news image */}
              <img className={style.imgNewsBlog} src={item.imageSrc} alt="" />
              {/* News image */}
            </article>
            <article className={style.news}>
              {/* Container for the news content */}
              <Link className={style.nameNews} href="">
                <h3>{item.newsTitle}</h3>{" "}
              </Link>
              {/* Title of the news */}
              <h4 className={style.dateNews}>{item.newsDate}</h4>{" "}
              {/* Date of the news */}
              <p className={`${style.paragraphNews} ${fontSecundaria.className}`}>{item.newsContent}</p>{" "}
              {/* Content of the news */}
              <Link className={style.linkNews} href="#">
                Ler mais
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
              </Link>
              {/* Link to read more */}
            </article>
          </article>
        ))}
      </article>
    </section>
  );
}