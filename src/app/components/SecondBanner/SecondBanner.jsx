import styles from "./secondbanner.module.css";

// This component represents a banner section
export function SecondBanner() {
  return (
    <section className={styles.container}>
      <div className={styles.bannerContentOne}>
        {/* Heading for the banner */}
        <h2 className={styles.bannerText}>UM BOM PAÍS PARA SE MORAR</h2>
        {/* Paragraph describing Ciro Nogueira */}
        <p className={styles.bannerParagraph}>
          Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de
          novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em
          Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa
          Civil da Presidência da República durante o governo do presidente
          Bolsonaro (2021-2022).
        </p>
      </div>

      {/* Placeholder for the second banner content */}
      <div className={styles.secondBannerContent}></div>
    </section>
  );
}
