import Link from "next/link";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.global_header}>
      <figure className={styles.logo}>
        <img src="../../images/TLH_med_logo.png" />
      </figure>
      <p>Rock n roll from Austin, Texas</p>
      <nav className={styles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact-us">
          <a>Contact Us</a>
        </Link>
      </nav>
    </header>
  );
}
