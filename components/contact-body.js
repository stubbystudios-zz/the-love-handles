import styles from "./post-body.module.scss";

export default function ContactBody({ content }) {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
