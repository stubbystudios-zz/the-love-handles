import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="intro">
      <figure className="logo">
        <img src="../../images/TLH_med_logo.png" />
      </figure>
      <h4 className="intro-text">
        Find out when the band is playing next. {' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          See our calendar
        </a>
        .
      </h4>
    </section>
  )
}
