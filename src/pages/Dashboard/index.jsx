import DataToolbar from "../../components/DataToolbar";
import EnvironmentList from "../../components/EnvironmentList/index.jsx";
import {useEffect, useState} from "react";
import {fetchMonitoringData} from "../../service/monitoringService.js";
import Loading from "../../components/Loading/index.jsx";
import PopUpAlert from "../../components/PopUpAlert/index.jsx";
import QuickStats from "../../components/QuickStats/index.jsx";
import styles from "./styles.module.css";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMonitoringData()
      .then((stations) => {
        setData(stations);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleCloseError = () => {
    setError(null);
  };

  const calculateStats = () => {
    return {
      total: data.length,
      active: data.filter((station) => station.isActive).length,
      inactive: data.filter((station) => !station.isActive).length,
      favorites: data.filter((station) => station.isFavorite).length,
    };
  };

  if (loading) return <Loading />;

  return (
    <section>
      {error && (
        <PopUpAlert
          message={error}
          severity="error"
          onClose={handleCloseError}
        />
      )}

      <DataToolbar />
      <div className={styles.containerContent}>
        <EnvironmentList monitoringData={data} />
        <QuickStats {...calculateStats()} />
      </div>
    </section>
  );
}
