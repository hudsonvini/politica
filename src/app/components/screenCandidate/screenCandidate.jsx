import styles from "./screenCandidate.module.css";
export function ScreenCandidate(props) {
  const { slogan, number, logoImage, candidateImage } = props;

  return (
    <section className={styles.container}>
      {/* Container for candidate information */}
      <article className={styles.infoCandidato}>
        {/* Blue card */}
        <article className={styles.cardBlue}>
          <div>
            {/* Candidate slogan */}
            <h3 className={styles.fraseCandidato}>{slogan}</h3>
            {/* Candidate number */}
            <h2 className={styles.numeroCandidato}>{number}</h2>
          </div>
        </article>
        {/* Container for candidate name and image */}
        <article className={styles.containerNomeImg}>
          {/* Candidate image */}
          <img
            className={styles.imgNomeCandidato}
            src={logoImage}
            alt="Candidato"
          />
        </article>
      </article>
      {/* Container for person image */}
      <article className={styles.contentImgPerson}>
        {/* Person image */}
        <img className={styles.imgPerson} src={candidateImage} alt="" />
      </article>
    </section>
  );
}
