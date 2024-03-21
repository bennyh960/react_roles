import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Test from "../Tests/Test";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SwaggerApi from "../Pages/SwaggerApi/SwaggerApi";
import HowTo from "../Pages/HowTo/HowTo";
import ChangeLog from "../Pages/ChangeLog/ChangeLog";
import Login from "../Pages/Login/Login";
import { paths } from "../Utils/Constants";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import SettingsDetails from "../Pages/SettingsDetails/SettingsDetails";

const createRouteId = (key: string) => {
  return JSON.stringify({ [key]: paths[key as keyof typeof paths].roles });
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/v1",
        element: <ProtectedRoute />,
        children: [
          { path: paths.dashboard.path, element: <Dashboard />, id: createRouteId(paths.dashboard.path) },
          {
            path: paths.settingsDetails.path,
            element: <SettingsDetails />,
            id: createRouteId(paths.settingsDetails.path),
          },
          { path: paths.api.path, element: <SwaggerApi />, id: createRouteId(paths.api.path) },
          { path: paths.howTo.path, element: <HowTo />, id: createRouteId(paths.howTo.path) },
          { path: paths.changeLog.path, element: <ChangeLog />, id: createRouteId(paths.changeLog.path) },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: process.env.NODE_ENV === "development" && <Test />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
