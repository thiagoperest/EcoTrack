import {CircularProgress} from "@mui/material";
import styles from "./styles.module.css";

export default function Loading() {
  return (
    <section className={styles.container}>
      <CircularProgress size={80} sx={{color: "#14cbf0"}} />
    </section>
  );
}
