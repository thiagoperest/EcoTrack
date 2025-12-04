import EnvironmentCard from "../EnvironmentCard";
import styles from "./styles.module.css";

export default function EnvironmentList({monitoringData}) {
  return (
    <section className={styles.listContainer}>
      {monitoringData.map((data) => (
        <EnvironmentCard key={data.id} {...data} />
      ))}
    </section>
  );
}
