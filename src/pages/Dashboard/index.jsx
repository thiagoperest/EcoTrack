import DataToolbar from "../../components/DataToolbar";
import EnvironmentList from "../../components/EnvironmentList/index.jsx";
import {useEffect, useState} from "react";
import {fetchMonitoringData} from "../../service/monitoringService.js";
import Loading from "../../components/Loading/index.jsx";
import PopUpAlert from "../../components/PopUpAlert/index.jsx";

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
      <EnvironmentList monitoringData={data} />
    </section>
  );
}
