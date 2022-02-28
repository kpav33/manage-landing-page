import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// import en from "../../locales/en";
// import fr from "../../locales/fr";
// import si from "../../locales/si";

import styles from "./Header.module.css";

export default function Header() {
  const [menuClick, setMenuClick] = useState(false);

  const router = useRouter();
  const { locale } = router;
  // const t = locale === "en" ? en : locale === "fr" ? fr : si;
  // console.log(locale);

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <header className={styles.container}>
      <Image src="/logo.svg" alt="Manage logo" width={110} height={18} />

      <div className={styles.hamburgerContainer}>
        {menuClick ? (
          <Image
            src="/icon-close.svg"
            alt="Mobile navigation menu close"
            width={21}
            height={22}
            onClick={(e) => setMenuClick((prevState) => !prevState)}
          />
        ) : (
          <Image
            src="/icon-hamburger.svg"
            alt="Mobile navigation menu"
            width={25}
            height={18}
            onClick={(e) => setMenuClick((prevState) => !prevState)}
          />
        )}
      </div>

      <div
        className={styles.mobileMenuContainer}
        onClick={() => setMenuClick(false)}
        style={{ opacity: menuClick ? 1 : 0, transition: "all 0.5s ease-out" }}
      >
        <nav className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
          <ul>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </nav>
      </div>

      <div className={styles.desktopMenuContainer}>
        <ul>
          <li>Pricing</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
        <select onChange={changeLanguage} defaultValue={locale}>
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="si">SI</option>
        </select>
      </div>
      <button className={styles.menuButton}>Get Started</button>
    </header>
  );
}
