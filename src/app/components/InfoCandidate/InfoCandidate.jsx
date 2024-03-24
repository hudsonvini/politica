import styles from "./infoCandidate.module.css";

export default function InfoCandidate() {
  return (
    <section className={styles.container}>
      <div className={styles.contentInfoCandidate}>
        <h1 className={styles.nameInfoCandidate}>
          Quem é <span className={styles.textBackground}>Ciro Nogueira?</span>
        </h1>
        <div className={styles.contentTextCandidate}>
          <p className={styles.paragraphCandidate}>
            Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de
            novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em
            Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da
            Casa Civil da Presidência da República durante o governo do
            presidente Bolsonaro (2021-2022). Foi deputado federal por quatro
            mandatos e chegou ao Senado em 2011, sendo eleito novamente em 2018.
            Desde 2013, Ciro Nogueira preside o Progressistas, um dos maiores
            partidos políticos do Brasil
          </p>
          <span className={styles.phraseCandidate}>
            <b className={styles.marksColor}>“</b>Decidi entrar na politica
            depois de ver tanta desigualdade onde eu vivia.
            <b className={styles.marksColor}>”</b>
          </span>
          <h4 className={styles.birthCandidate}>
            nascido em 1997 <br />
            <b className={styles.nameTextBold}>ciro nogueira</b>
          </h4>
        </div>
      </div>
      <div className={styles.contentImgCandidate}>
        <img
          className={styles.ImgCandidate}
          src="/images/cironogueira.png"
          alt="Candidato"
        />
      </div>
    </section>
  );
}
