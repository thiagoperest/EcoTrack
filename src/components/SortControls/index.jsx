import styles from "./styles.module.css";

export default function SortControls({onSort}) {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <select className={styles.select} onChange={handleSortChange}>
      <option value="">Ordenar por</option>
      <option value="name">Ordenar por: Nome</option>
      <option value="location">Ordenar por: Localização</option>
      <option value="condition">Ordenar por: Condição</option>
      <option value="isActive">Ordenar por: Ativo</option>
      <option value="startDate">Ordenar por: Data Inicial</option>
      <option value="lastUpdate">Ordenar por: Data Final</option>
      <option value="description">Ordenar por: Descrição</option>
      <option value="isFavorite">Ordenar por: Favoritos</option>
    </select>
  );
}
