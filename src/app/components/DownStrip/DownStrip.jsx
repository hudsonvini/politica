import styles from "./downstrip.module.css";

export default function DownStrip() {
  return (
    <section className={styles.container}>
      <article className={styles.downstripContentOne}>
        <article className={styles.contentImgPiaui}>
          <img className={styles.imgPiaui} src="/images/piaui.png" alt="" />
        </article>

        <article className={styles.contentImgPerson}>
          <img
            className={styles.imgPerson}
            src="/images/cironogueira.png"
            alt=""
          />
        </article>
      </article>
      <div className={styles.downstripContentTwo}>
        <h3 className={styles.downstripText}>
          foco na <br />
          <b className={styles.boldText}>segurança</b>
        </h3>
        <div className={styles.lineText}></div>
        <h3 className={styles.downstripText}>
          foco na <br />
          <b className={styles.boldText}>segurança</b>
        </h3>
        <div className={styles.lineText}></div>
        <h3 className={styles.downstripText}>
          foco na <br />
          <b className={styles.boldText}>segurança</b>
        </h3>
      </div>
    </section>
  );
}
