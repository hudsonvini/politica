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
      {/* Container for candidate image */}
      <div className={styles.contentImgCandidate}>
        {/* Candidate image */}
        <img
          className={styles.ImgCandidate}
          src={imgInfo}
          alt={altImgInfo}
        />
      </div>
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
          {/* <div className={styles.areaMoreInfo}>
            <h4 className={styles.birthCandidate}>
              {birthInfo.map((item, index) => (
                <React.Fragment key={index}>
                  {item.text}
                  <b className={styles.nameTextBold}>{item.name}</b>
                </React.Fragment>
              ))}
            </h4>
          </div> */}

          {/* Stats */}
          <ul className={styles.stats}>
              <li>
                  <span className={styles.topText}>projetos</span>
                  <p><b>+ </b>25</p>
              </li>
              <li>
                  <span className={styles.topText}>anos</span>
                  <p><b>+ </b>3</p>
              </li>
              <li>
                  <span className={styles.topText}>alcance</span>
                  <p><b>+ </b>100k</p>
              </li>
              <li>
                  <span className={styles.topText}>experiência</span>
                  <p><b>+ </b>10 anos</p>
              </li>
          </ul>          
          
        </div>
      </div>
    </section>
  );
}
