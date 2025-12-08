import FilterBar from "../../components/FilterBar";
import EnvironmentList from "../../components/EnvironmentList/index.jsx";
import {useEffect, useState, useMemo} from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

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

  const filteredData = useMemo(() => {
    let result = [...data];

    if (searchTerm) {
      result = result.filter(
        (station) =>
          station.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          station.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
          station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          station.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy) {
      result.sort((a, b) => {
        if (
          sortBy === "name" ||
          sortBy === "location" ||
          sortBy === "condition" ||
          sortBy === "summary"
        ) {
          return a[sortBy].localeCompare(b[sortBy]);
        }
        if (sortBy === "isActive" || sortBy === "isFavorite") {
          return b[sortBy] - a[sortBy];
        }
        if (sortBy === "startDate" || sortBy === "lastUpdate") {
          return new Date(b[sortBy]) - new Date(a[sortBy]);
        }
        return 0;
      });
    }

    return result;
  }, [data, searchTerm, sortBy]);

  const handleCloseError = () => {
    setError(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSort = (sort) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handleFavoriteUpdate = (id, isFavorite) => {
    setData((prevData) =>
      prevData.map((station) =>
        station.id === id ? {...station, isFavorite} : station
      )
    );
  };

  const calculateStats = () => {
    return {
      total: filteredData.length,
      active: filteredData.filter((station) => station.isActive).length,
      inactive: filteredData.filter((station) => !station.isActive).length,
      favorites: filteredData.filter((station) => station.isFavorite).length,
    };
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredData.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

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

      <FilterBar onSearch={handleSearch} onSort={handleSort} />
      <div className={styles.containerContent}>
        <EnvironmentList
          monitoringData={getPaginatedData()}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onFavoriteUpdate={handleFavoriteUpdate}
        />
        <QuickStats {...calculateStats()} />
      </div>
    </section>
  );
}
