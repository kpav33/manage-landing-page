import React from "react";
import Image from "next/image";

import Header from "../Header";

import styles from "./Banner.module.css";

export default function Banner({ t }) {
  return (
    <section className={styles.container}>
      <Header />
      <div>
        <div className={styles.imageContainer}>
          <Image
            src="/illustration-intro.svg"
            width={580}
            height={525}
            alt="Banner"
          />
        </div>
        <div className={styles.bannerTextContainer}>
          <h1 className={styles.bannerHeading}>{t.title}</h1>
          <p className={styles.bannerText}>{t.subtitle}</p>
          <button className={styles.bannerButton}>{t.button}</button>
        </div>
      </div>
    </section>
  );
}
