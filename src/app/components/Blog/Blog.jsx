import { fontSecundaria } from "@/app/fonts";
import styles from "./blog.module.css"; // Importing CSS module
import Link from "next/link"; // Importing the Link component from Next.js

export default function Blog() {
  const news = [
    {
      imageSrc:
        "/images/imagesBlog/exampleBlog.png", // Image source for the news
      newsTitle:
        "No Dia do Consumidor, Ciro Nogueira apresenta projetos para garantir mais segurança e transparência nas relações de consumo", // Title of the news
      newsDate: "15 de março", // Date of the news
      newsContent:
        "Na data em que se comemora o Dia do Consumidor, 15 de Março, o senador Ciro Nogueira (Progressistas) apresentou mais dois projetos para garantir o...", // Content of the news
    },
    {
      imageSrc:
        "/images/imagesBlog/exampleBlog2.png",
      newsTitle:
        "No Dia do Consumidor, Ciro Nogueira apresenta projetos para garantir mais segurança e transparência nas relações de consumo",
      newsDate: "15 de março",
      newsContent:
        "Na data em que se comemora o Dia do Consumidor, 15 de Março, o senador Ciro Nogueira (Progressistas) apresentou mais dois projetos para garantir o...",
    },
    {
      imageSrc:
        "/images/imagesBlog/exampleBlog3.png",
      newsTitle:
        "No Dia do Consumidor, Ciro Nogueira apresenta projetos para garantir mais segurança e transparência nas relações de consumo",
      newsDate: "15 de março",
      newsContent:
        "Na data em que se comemora o Dia do Consumidor, 15 de Março, o senador Ciro Nogueira (Progressistas) apresentou mais dois projetos para garantir o...",
    },
    // Add more news here...
  ];

  return (
    <section className={styles.container}>
      {/* ContainerTitle */}
      <div className={styles.containerTitle}>
        <h2 className={styles.titleBlog}>Blog</h2> {/* Title of the blog */}
        <a className={styles.viewMore} href="/noticias">
          Ver
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
        </a>
      </div>
      <article className={styles.contentBlog}>
        {/* Content of the blog */}
        {news.map((item, index) => (
          <article key={index} className={styles.containerSingle}>
            {/* Single news article */}
            <article className={styles.containerImgNews}>
              {/* Container for the news image */}
              <img className={styles.imgNewsBlog} src={item.imageSrc} alt="" />
              {/* News image */}
            </article>
            <article className={styles.news}>
              {/* Container for the news content */}
              <Link className={styles.nameNews} href="">
                <h3>{item.newsTitle}</h3>{" "}
              </Link>
              {/* Title of the news */}
              <h4 className={styles.dateNews}>{item.newsDate}</h4>{" "}
              {/* Date of the news */}
              <p className={`${styles.paragraphNews} ${fontSecundaria.className}`}>{item.newsContent}</p>{" "}
              {/* Content of the news */}
              <Link className={styles.linkNews} href="#">
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
