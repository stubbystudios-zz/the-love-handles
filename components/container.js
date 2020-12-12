import styles from './container.module.scss';

export default function Container({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        {children}
      </div>
    </div>
  );
}
