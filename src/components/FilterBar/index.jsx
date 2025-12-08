import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import SortControls from "../SortControls";
import styles from "./styles.module.css";

export default function FilterBar({onSearch, onSort}) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.inputWrapper}>
        <SearchIcon className={styles.inputIcon} />
        <input
          type="text"
          placeholder="Buscar por localização, condição..."
          className={styles.input}
          onChange={handleSearchChange}
        />
      </div>

      <div className={styles.content}>
        <SortControls onSort={onSort} />

        <button className={styles.buttonContainer}>
          <AddIcon />
          Novo Monitoramento
        </button>
      </div>
    </section>
  );
}
