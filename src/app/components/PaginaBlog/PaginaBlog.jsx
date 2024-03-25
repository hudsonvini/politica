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
      imageSrc: "https://cironogueira.com.br/wp-content/uploads/2024/03/49615255406_fe6fe4408b_k.jpg",
      newsTitle:
        "No Dia do Consumidor, Ciro Nogueira apresenta projetos para garantir mais segurança e transparência nas relações de consumo",
      newsDate: "15 de março",
      newsContent:
        "Na data em que se comemora o Dia do Consumidor, 15 de Março, o senador Ciro Nogueira (Progressistas) apresentou mais dois projetos para garantir o...",
    },
    {
      imageSrc: "https://cironogueira.com.br/wp-content/uploads/2024/03/52765409923_7b9b5c835c_4k-scaled.jpg",
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
              <h3 className={style.nameNews}>{item.newsTitle}</h3>{" "}
              {/* Title of the news */}
              <h4 className={style.dateNews}>{item.newsDate}</h4>{" "}
              {/* Date of the news */}
              <p className={style.paragraphNews}>{item.newsContent}</p>{" "}
              {/* Content of the news */}
              <Link className={style.linkNews} href="#">
                Ler mais
              </Link>
              {/* Link to read more */}
            </article>
          </article>
        ))}
      </article>
    </section>
  );
}