import { StarBorder } from "@mui/icons-material";
import { Star } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import styles from "./styles.module.css";

export default function EnvironmentCard({
  id,
  location,
  condition,
  isActive,
  lastUpdate,
  description,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section>
      <div>
        <span>{location}</span>

        <IconButton
          onClick={handleToggle}
          color={isFavorite ? "warning" : "default"}
          aria-label="favoritar"
        >
          {isFavorite ? <Star /> : <StarBorder />}
        </IconButton>
      </div>
      <div
        className={`${styles.activeContainer} ${
          isActive ? styles.active : styles.inactive
        }`}
      >
        <span>{isActive ? "Ativo" : "Inátivo"}</span>
      </div>
    </section>
  );
}
