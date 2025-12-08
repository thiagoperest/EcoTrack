import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.css";

export default function FilterBar({onSearch, onSort}) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    onSort(e.target.value);
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
        <select className={styles.select} onChange={handleSortChange}>
          <option value="">Ordenar por: Nome</option>
          <option value="name">Ordenar por: Nome</option>
          <option value="location">Ordenar por: Localização</option>
          <option value="condition">Ordenar por: Condição</option>
          <option value="isActive">Ordenar por: Ativo</option>
          <option value="startDate">Ordenar por: Data Inicial</option>
          <option value="lastUpdate">Ordenar por: Data Final</option>
          <option value="description">Ordenar por: Descrição</option>
          <option value="isFavorite">Ordenar por: Favoritos</option>
        </select>

        <button className={styles.buttonContainer}>
          <AddIcon />
          Novo Monitoramento
        </button>
      </div>
    </section>
  );
}
