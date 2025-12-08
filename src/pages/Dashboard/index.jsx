import DataToolbar from "../../components/DataToolbar";
import EnvironmentList from "../../components/EnvironmentList/index.jsx";
import {useEffect, useState} from "react";
import {fetchMonitoringData} from "../../service/monitoringService.js";
import Loading from "../../components/Loading/index.jsx";
import PopUpAlert from "../../components/PopUpAlert/index.jsx";
import QuickStats from "../../components/QuickStats/index.jsx";
import styles from "./styles.module.css";

const ITEMS_PER_PAGE = 6;

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  const calculateStats = () => {
    return {
      total: data.length,
      active: data.filter((station) => station.isActive).length,
      inactive: data.filter((station) => !station.isActive).length,
      favorites: data.filter((station) => station.isFavorite).length,
    };
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

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
        <EnvironmentList
          monitoringData={getPaginatedData()}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <QuickStats {...calculateStats()} />
      </div>
    </section>
  );
}
