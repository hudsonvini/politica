import styles from "./blog.module.css"; // Importing CSS module
import Link from "next/link"; // Importing the Link component from Next.js

export default function Blog() {
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
      imageSrc: "/images/imagesBlog/exampleBlog.png",
      newsTitle:
        "No Dia do Consumidor, Ciro Nogueira apresenta projetos para garantir mais segurança e transparência nas relações de consumo",
      newsDate: "15 de março",
      newsContent:
        "Na data em que se comemora o Dia do Consumidor, 15 de Março, o senador Ciro Nogueira (Progressistas) apresentou mais dois projetos para garantir o...",
    },
    {
      imageSrc: "/images/imagesBlog/exampleBlog.png",
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
      {/* Container section */}
      <h2 className={styles.titleBlog}>Blog</h2> {/* Title of the blog */}
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
              <h3 className={styles.nameNews}>{item.newsTitle}</h3>{" "}
              {/* Title of the news */}
              <h4 className={styles.dateNews}>{item.newsDate}</h4>{" "}
              {/* Date of the news */}
              <p className={styles.paragraphNews}>{item.newsContent}</p>{" "}
              {/* Content of the news */}
              <Link className={styles.linkNews} href="#">
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
