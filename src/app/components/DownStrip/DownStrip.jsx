import React from "react";
import styles from "./downstrip.module.css";

export default function DownStrip(props) {
  const { imgPiauiSrc, imgPersonSrc, texts } = props;
  return (
    <section className={styles.container}>
      {/* Section container */}
      <article className={styles.downstripContentOne}>
        {/* First article */}
        <article className={styles.contentImgPiaui}>
          {/* Article for Piaui image */}
          <img
            className={styles.imgPiaui}
            src={imgPiauiSrc}
            alt="Imagem Piaui"
          />
        </article>

        <article className={styles.contentImgPerson}>
          {/* Article for person image */}
          <img
            className={styles.imgPerson}
            src={imgPersonSrc}
            alt="Imagem Candidato"
          />
        </article>
      </article>
      <div className={styles.downstripContentTwo}>
        {/* Second content */}
        {texts.map((text, index) => (
          <React.Fragment key={index}>
            <h3 className={styles.downstripText}>
              {/* Heading for text */}
              {text.text} <br />
              <b className={styles.boldText}>{text.bold}</b>
            </h3>
            <div className={styles.lineText}></div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
