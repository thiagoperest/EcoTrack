import styles from "./styles.module.css";

export default function QuickStats({total, active, inactive, favorites}) {
  return (
    <aside className={styles.container}>
      <h2>Estatísticas Rápidas</h2>
      <div>
        <p className={styles.status}>
          <span>Total de locais:</span>
          <span className={styles.statusContent}>{total}</span>
        </p>
        <p className={styles.status}>
          <span>Ativos:</span>
          <span className={styles.statusContent}>{active}</span>
        </p>
        <p className={styles.status}>
          <span>Inativos:</span>
          <span
            className={`${styles.statusContent} ${styles.statusContentInactive}`}
          >
            {inactive}
          </span>
        </p>
        <p className={styles.status}>
          <span>Favoritos:</span>
          <span className={styles.statusContent}>{favorites}</span>
        </p>
      </div>
    </aside>
  );
}
