import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";

export const AppRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
