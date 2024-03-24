import styles from "./screenCandidate.module.css";
export function ScreenCandidate() {
  return (
    <section className={styles.container}>
      {/* Container for candidate information */}
      <article className={styles.infoCandidato}>
        {/* Blue card */}
        <article className={styles.cardBlue}>
          {/* Candidate slogan */}
          <h3 className={styles.fraseCandidato}>Por um pais melhor</h3>
          {/* Candidate number */}
          <h2 className={styles.numeroCandidato}>vote 2222</h2>
        </article>
        {/* Container for candidate name and image */}
        <article className={styles.containerNomeImg}>
          {/* Candidate image */}
          <img
            className={styles.imgNomeCandidato}
            src="https://cironogueira.com.br/wp-content/uploads/2023/04/logo-1024x504.png"
            alt=""
          />
        </article>
      </article>
      {/* Container for person image */}
      <article className={styles.contentImgPerson}>
        {/* Person image */}
        <img
          className={styles.imgPerson}
          src="/images/cironogueira.png"
          alt=""
        />
      </article>
    </section>
  );
}
