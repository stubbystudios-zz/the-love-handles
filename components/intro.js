import Link from "next/link"

import styles from "./intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <figure className={styles.logo}>
        <img src="../../images/TLH_med_logo.png" />
      </figure>
      <nav className={styles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact-us">
          <a>Contact Us</a>
        </Link>
      </nav>
    </section>
  )
}
