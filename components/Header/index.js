import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuClick, setMenuClick] = useState(false);

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

      {menuClick && (
        <div
          className={styles.mobileMenuContainer}
          onClick={() => setMenuClick(false)}
        >
          <nav
            className={styles.mobileMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li>Pricing</li>
              <li>Product</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Community</li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
