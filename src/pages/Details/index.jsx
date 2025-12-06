import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {fetchStationById} from "../../service/monitoringService.js";
import {formatDate} from "../../utils/formatDate.js";
import {
  ArrowBack,
  FiberManualRecord,
  Sensors,
  Star,
  StarBorder,
} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import styles from "./styles.module.css";

export default function Details() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetchStationById(id)
      .then((station) => {
        setData(station);
        setIsFavorite(station.isFavorite);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const getConditionClass = () => {
    if (data.condition === "Boa") return styles.good;
    if (data.condition === "Moderada") return styles.moderate;
    if (data.condition === "Crítica") return styles.critical;
    return styles.good;
  };

  const getActiveConditionClass = () => {
    if (data.isActive === true) return styles.active;
    if (data.isActive === false) return styles.inactive;
    return styles.active;
  };

  const getConditionText = () => {
    if (data.condition === "Boa") return "Condição Boa";
    if (data.condition === "Moderada") return "Condição Moderada";
    if (data.condition === "Crítica") return "Condição Crítica";
    return "Condição Boa";
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!data) return <div>Estação não encontrada</div>;

  return (
    <section className={styles.container}>
      <button onClick={handleGoBack} className={styles.backButton}>
        <ArrowBack sx={{fontSize: 20}} />
        Voltar
      </button>

      <div className={styles.card}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{data.name}</h1>

          <IconButton
            onClick={handleToggle}
            color={isFavorite ? "warning" : "default"}
            aria-label="favoritar"
          >
            {isFavorite ? <Star /> : <StarBorder />}
          </IconButton>
        </div>
        <p>{data.location}</p>
        <div className={styles.statusContainer}>
          <div
            className={`${styles.conditionContainer} ${getConditionClass()}`}
          >
            <p>{getConditionText()}</p>
          </div>
          <div className={styles.isActiveContainer}>
            <FiberManualRecord
              className={getActiveConditionClass()}
              sx={{fontSize: 14}}
            />{" "}
            {data.isActive ? "Ativo" : "Inativo"}
          </div>
          <span>Início: {formatDate(data.startDate)}</span>
        </div>
        <p>{data.description}</p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.subtitle}>Sensores Ativos</h2>
        <ul className={styles.sensorContainer}>
          {data.sensors.map((sensor) => (
            <li key={sensor.id} className={styles.sensorContent}>
              <Sensors className={styles.sensorColor} sx={{fontSize: 30}} />
              <div>
                <p>{sensor.name}</p>
                <small>{sensor.type}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
