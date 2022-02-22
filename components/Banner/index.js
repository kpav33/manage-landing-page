import React from "react";
import Image from "next/image";

import Header from "../Header";

import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.container}>
      <Header />
      <Image
        src="/illustration-intro.svg"
        width={580}
        height={525}
        alt="Banner"
      />
      <div className={styles.bannerTextContainer}>
        <h1 className={styles.bannerHeading}>
          Bring everyone together to build better products.
        </h1>
        <p className={styles.bannerText}>
          Manage makes it simple for software teams to play day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className={styles.bannerButton}>Get Started</button>
      </div>
    </section>
  );
}
