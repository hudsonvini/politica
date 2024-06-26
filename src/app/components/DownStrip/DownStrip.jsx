import React from "react";
import styles from "./downstrip.module.css";

export default function DownStrip(props) {
  const { imgPiauiSrc, imgPersonSrc, texts } = props;
  return (
    <section className={styles.container}>

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
