import EnvironmentCard from "../EnvironmentCard";
import PaginationComponent from "../PaginationComponent/index.jsx";
import styles from "./styles.module.css";

export default function EnvironmentList({
  monitoringData,
  currentPage,
  totalPages,
  onPageChange,
  onFavoriteUpdate,
}) {
  return (
    <section className={styles.listWrapper}>
      <div className={styles.listContainer}>
        {monitoringData.map((data) => (
          <EnvironmentCard
            key={data.id}
            {...data}
            onFavoriteUpdate={onFavoriteUpdate}
          />
        ))}
      </div>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </section>
  );
}
