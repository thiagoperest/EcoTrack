import DataToolbar from "../../components/DataToolbar";
import EnvironmentList from "../../components/EnvironmentList/index.jsx";

export default function Dashboard() {
  // TODO remover mock ao implementar classe de services
  const mockDados = [
    {
      id: 1,
      name: "Estação Central - Parque Ibirapuera",
      location: "Parque Ibirapuera - São Paulo, SP",
      condition: "Boa",
      summary: "Níveis de poluição moderados",
      isActive: true,
      startDate: "2024-01-15",
      lastUpdate: "2024-06-10T14:30:00Z",
      description:
        "Monitoramento da qualidade do ar na área central do parque Ibirapuera, focado em partículas finas (PM2.5) e gases poluentes.",
      isFavorite: true,
    },
    {
      id: 2,
      name: "Posto Avançado - Margem do Rio",
      location: "Margem do Rio Negro - Manaus, AM",
      condition: "Crítico",
      summary: "Níveis de água abaixo do normal",
      isActive: true,
      startDate: "2024-02-10",
      lastUpdate: "2024-06-10T16:45:00Z",
      description:
        "Monitoramento de poluição hídrica no Rio Negro, com foco em metais pesados e contaminação por atividades industriais.",
      isFavorite: false,
    },
  ];

  return (
    <section>
      <DataToolbar />

      <EnvironmentList monitoringData={mockDados} />
    </section>
  );
}
