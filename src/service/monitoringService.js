const API_URL = "http://localhost:3001";

export const fetchMonitoringData = () => {
  return fetch(`${API_URL}/stations`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Erro:", error);
      throw error;
    });
};

export const fetchStationById = (id) => {
  return fetch(`${API_URL}/stations/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar estação");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Erro:", error);
      throw error;
    });
};

export const updateStationFavorite = (id, isFavorite) => {
  return fetch(`${API_URL}/stations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({isFavorite}),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao atualizar favorito");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Erro:", error);
      throw error;
    });
};
