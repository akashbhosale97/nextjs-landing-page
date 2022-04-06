import React from "react";
import styles from "../styles/Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <nav
      className={`${styles.nav} flex-lg-row flex-column container-fluid fixed-top`}
    >
      <h1>
        <Link href="/">DroidTech</Link>
      </h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
