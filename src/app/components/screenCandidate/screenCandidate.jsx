import styles from "./screenCandidate.module.css";
export function ScreenCandidate() {
  return (
    <section className={styles.container}>
      <article className={styles.infoCandidato}>
        <article className={styles.cardBlue}>
          <h3 className={styles.fraseCandidato}>Por um pais melhor</h3>
          <h2 className={styles.numeroCandidato}>vote 2222</h2>
        </article>
        <article className={styles.containerNomeImg}>
          <img
            className={styles.imgNomeCandidato}
            src="https://cironogueira.com.br/wp-content/uploads/2023/04/logo-1024x504.png"
            alt=""
          />
        </article>
      </article>
      <article className={styles.contentImgPerson}>
        <img
          className={styles.imgPerson}
          src="/images/cironogueira.png"
          alt=""
        />
      </article>
    </section>
  );
}
