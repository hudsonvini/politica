import React from "react";
import styles from "./infoCandidate.module.css";

export default function InfoCandidate(props) {
  const {
    nameInfo,
    paragraphInfo,
    phraseInfo,
    birthInfo,
    imgInfo,
    altImgInfo,
  } = props;
  return (
    <section className={styles.container}>
      {/* Container for candidate information */}
      <div className={styles.contentInfoCandidate}>
        {/* Heading */}
        <h1 className={styles.nameInfoCandidate}>
          {nameInfo.map((item, index) => (
            <React.Fragment key={index}>
              {item.text}
              <span className={styles.textBackground}>{item.name}</span>
            </React.Fragment>
          ))}
        </h1>
        {/* Content */}
        <div className={styles.contentTextCandidate}>
          {/* Paragraph */}
          <p className={styles.paragraphCandidate}>{paragraphInfo}</p>
          {/* Quote */}
          <span className={styles.phraseCandidate}>
            <b className={styles.marksColor}>“</b>
            {phraseInfo}
            <b className={styles.marksColor}>”</b>
          </span>
          {/* Subheading */}
          <h4 className={styles.birthCandidate}>
            {birthInfo.map((item, index) => (
              <React.Fragment key={index}>
                {item.text}
                <br />
                <b className={styles.nameTextBold}>{item.name}</b>
              </React.Fragment>
            ))}
          </h4>
        </div>
      </div>
      {/* Container for candidate image */}
      <div className={styles.contentImgCandidate}>
        {/* Candidate image */}
        <img
          className={styles.ImgCandidate}
          src={imgInfo}
          // src="/images/cironogueira.png"
          alt={altImgInfo}
        />
      </div>
    </section>
  );
}
