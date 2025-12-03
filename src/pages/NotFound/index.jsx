import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.content}>Página não encontrada</p>
      <Link to="/" className={styles.link}>
        Voltar para Home
      </Link>
    </section>
  );
}
