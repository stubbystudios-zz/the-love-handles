import { CMS_NAME, CMS_URL } from '../lib/constants'

import styles from './intro.module.scss';

export default function Intro() {
  return (
    <section className={styles.intro}>
      <figure className={styles.logo}>
        <img src="../../images/TLH_med_logo.png" />
      </figure>
      <h4 className={styles.intro_text}>
        Find out when the band is playing next. {' '}
        <a href="https://nextjs.org/">
          See our calendar
        </a>
        .
      </h4>
    </section>
  )
}
