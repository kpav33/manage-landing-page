import React, { useState } from "react";
import Image from "next/image";

import styles from "./Footer.module.css";

export default function Footer() {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    setValue("");
  }

  return (
    <footer className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Updates in your inbox..."
        />
        <button type="submit">Go</button>
      </form>
      <nav className={styles.navigationContainer}>
        <div>
          <p>Home</p>
          <p>Pricing</p>
          <p>Products</p>
          <p>About Us</p>
        </div>
        <div>
          <p>Careers</p>
          <p>Community</p>
          <p>Privacy Policy</p>
        </div>
      </nav>
      <div className={styles.socialsContainer}>
        <Image
          src="/icon-facebook.svg"
          alt="Facebook logo"
          width={32}
          height={32}
        />
        <Image
          src="/icon-youtube.svg"
          alt="Facebook logo"
          width={32}
          height={32}
        />
        <Image
          src="/icon-twitter.svg"
          alt="Facebook logo"
          width={32}
          height={32}
        />
        <Image
          src="/icon-pinterest.svg"
          alt="Facebook logo"
          width={32}
          height={32}
        />
        <Image
          src="/icon-instagram.svg"
          alt="Facebook logo"
          width={32}
          height={32}
        />
      </div>
      <div className={styles.logoContainer}>
        <Image
          src="/logo-white.svg"
          alt="Company logo"
          width={158}
          height={26}
        />
      </div>
      <p className={styles.copyright}>Copyright 2020. All Rights Reserved</p>
    </footer>
  );
}
