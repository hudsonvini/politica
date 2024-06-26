import styles from "./secondbanner.module.css";

// This component represents a banner section
export function SecondBanner(props) {
  const { imageSecondOne, imageSecondTwo } = props;
  return (
    <section className={styles.container}>
      <div
        style={{
          // The section also has inline CSS styles applied to it.
          backgroundImage: imageSecondOne ? `url(${imageSecondOne})` : null,
          backgroundColor: imageSecondOne ? null : "var(--azul claro-home)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={styles.bannerContentOne}
      >
        {/* Area Content banner one */}
        <div className={styles.areaConetentBannerOne}>
          {/* Heading for the banner */}
          <h2 className={styles.bannerText}>
            Baixe nosso material de campanha!
          </h2>
          {/* Paragraph describing Ciro Nogueira */}
          <p className={styles.bannerParagraph}>
            Baixe agora e ajude a divulgar o movimento <br /> por um Brasil
            maior e melhor
          </p>

          {/* Button download */}
          <button className={styles.buttonDownload}>
            Baixar material
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Placeholder for the second banner content */}
      <div
        style={{
          // The section also has inline CSS styles applied to it.
          backgroundImage: imageSecondTwo ? `url(${imageSecondTwo})` : null,
          backgroundColor: imageSecondTwo ? null : "var(--verde-escuro-home)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={styles.secondBannerContent}
      ></div>
    </section>
  );
}
