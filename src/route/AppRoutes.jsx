import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

export const AppRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
