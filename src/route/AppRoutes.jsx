import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
