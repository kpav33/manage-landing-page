import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <Image src="/logo.svg" alt="Manage logo" width={110} height={18} />

      <Image
        src="/icon-hamburger.svg"
        alt="Mobile navigation menu"
        width={25}
        height={18}
      />
    </header>
  );
}
