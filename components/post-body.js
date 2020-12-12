import styles from './post-body.module.scss'

export default function PostBody({ content }) {
  return (
    <section className="post-body">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  )
}
