import React from "react";
import styles from "./infoCandidate.module.css";
import { fontSecundaria } from "@/app/fonts";

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
          <p className={`${styles.paragraphCandidate} ${fontSecundaria.className}`}>{paragraphInfo}</p>
          {/* Quote */}
          <span className={styles.phraseCandidate}>
            <b className={styles.marksColor}>“</b>
            {phraseInfo}
            <b className={styles.marksColor}>”</b>
          </span>
          
          {/* Area More info */}
          <div className={styles.areaMoreInfo}>
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

            {/* More Info */}
            <button className={styles.buttonMoreInfo}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Container for candidate image */}
      <div className={styles.contentImgCandidate}>
        {/* Candidate image */}
        <img
          className={styles.ImgCandidate}
          src={imgInfo}
          alt={altImgInfo}
        />
      </div>
    </section>
  );
}
