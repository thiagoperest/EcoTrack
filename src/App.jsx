import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { AppRoutes } from "./route/AppRoutes";

import "./styles.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: AppRoutes,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
