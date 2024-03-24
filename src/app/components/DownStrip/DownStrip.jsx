import styles from "./downstrip.module.css";

export default function DownStrip() {
  return (
    <section className={styles.container}>
      {/* Section container */}
      <article className={styles.downstripContentOne}>
        {/* First article */}
        <article className={styles.contentImgPiaui}>
          {/* Article for Piaui image */}
          <img className={styles.imgPiaui} src="/images/piaui.png" alt="" />
        </article>

        <article className={styles.contentImgPerson}>
          {/* Article for person image */}
          <img
            className={styles.imgPerson}
            src="/images/cironogueira.png"
            alt=""
          />
        </article>
      </article>
      <div className={styles.downstripContentTwo}>
        {/* Second content */}
        <h3 className={styles.downstripText}>
          {/* Heading for first text */}
          foco na <br />
          <b className={styles.boldText}>segurança</b>
        </h3>
        <div className={styles.lineText}></div>
        <h3 className={styles.downstripText}>
          {/* Heading for second text */}
          foco na <br />
          <b className={styles.boldText}>segurança</b>
        </h3>
        <div className={styles.lineText}></div>
        <h3 className={styles.downstripText}>
          {/* Heading for third text */}
          foco na <br />
          <b className={styles.boldText}>segurança</b>
        </h3>
      </div>
    </section>
  );
}
