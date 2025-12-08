import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.css";

export default function FilterBar() {
  return (
    <section className={styles.container}>
      <div className={styles.inputWrapper}>
        <SearchIcon className={styles.inputIcon} />
        <input
          type="text"
          placeholder="Buscar por localização, condição..."
          className={styles.input}
        />
      </div>

      <div className={styles.content}>
        <select name="" id="" className={styles.select}>
          <option value="">Ordenar por: Nome</option>
          <option value="">Ordenar por: Localização</option>
          <option value="">Ordenar por: Condição</option>
          <option value="">Ordenar por: Ativo</option>
          <option value="">Ordenar por: Data Inicial</option>
          <option value="">Ordenar por: Data Final</option>
          <option value="">Ordenar por: Descrição</option>
          <option value="">Ordenar por: Favoritos</option>
        </select>

        <button className={styles.buttonContainer}>
          <AddIcon />
          Novo Monitoramento
        </button>
      </div>
    </section>
  );
}
