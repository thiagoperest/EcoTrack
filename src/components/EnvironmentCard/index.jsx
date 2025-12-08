import {StarBorder, Star, FiberManualRecord} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {formatTimeAgo} from "../../utils/formatDate.js";
import {updateStationFavorite} from "../../service/monitoringService.js";
import styles from "./styles.module.css";

export default function EnvironmentCard({
  id,
  location,
  condition,
  summary,
  isActive,
  lastUpdate,
  isFavorite: initialFavorite,
  onFavoriteUpdate,
}) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  const handleToggle = (e) => {
    e.stopPropagation();

    if (isUpdating) return;

    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    setIsUpdating(true);

    updateStationFavorite(id, newFavoriteState)
      .then(() => {
        setIsUpdating(false);
        if (onFavoriteUpdate) {
          onFavoriteUpdate(id, newFavoriteState);
        }
      })
      .catch((error) => {
        console.error("Erro ao atualizar favorito:", error);
        setIsFavorite(!newFavoriteState);
        setIsUpdating(false);
      });
  };

  const handleCardClick = () => {
    navigate(`/details/${id}`);
  };

  const getConditionClass = () => {
    if (condition === "Boa") return styles.good;
    if (condition === "Moderada") return styles.moderate;
    if (condition === "Crítica") return styles.critical;
    return styles.good;
  };

  const getConditionText = () => {
    if (condition === "Boa") return "Condição Boa";
    if (condition === "Moderada") return "Condição Moderada";
    if (condition === "Crítica") return "Condição Crítica";
    return "Condição Boa";
  };

  return (
    <div className={styles.container} onClick={handleCardClick}>
      <div className={styles.titleContainer}>
        <span>
          ID: {id} - {location}
        </span>

        <IconButton
          onClick={handleToggle}
          color={isFavorite ? "warning" : "default"}
          aria-label="favoritar"
          disabled={isUpdating}
        >
          {isFavorite ? <Star /> : <StarBorder />}
        </IconButton>
      </div>

      <div
        className={`${styles.activeContainer} ${
          isActive ? styles.active : styles.inactive
        }`}
      >
        <span>{isActive ? "Ativo" : "Inativo"}</span>
      </div>

      <div className={styles.conditionContainer}>
        <FiberManualRecord
          className={getConditionClass()}
          sx={{fontSize: 14}}
        />
        <span className={getConditionClass()}>{getConditionText()}</span>
      </div>

      <div className={styles.lastUpdateContainer}>
        <p>Última atualização: {formatTimeAgo(lastUpdate)}</p>
        <p>{summary}</p>
      </div>
    </div>
  );
}
