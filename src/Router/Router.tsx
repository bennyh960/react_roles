import { createBrowserRouter, json } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Test from "../Tests/Test";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SwaggerApi from "../Pages/SwaggerApi/SwaggerApi";
import HowTo from "../Pages/HowTo/HowTo";
import ChangeLog from "../Pages/ChangeLog/ChangeLog";
import Video from "../Pages/Video/Video";
import Feedback from "../Pages/Feedback/Feedback";
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
          { path: paths.details.path, element: <SettingsDetails />, id: createRouteId(paths.details.path) },
          { path: paths.api.path, element: <SwaggerApi />, id: createRouteId(paths.api.path) },
          { path: paths.feedback.path, element: <Feedback />, id: createRouteId(paths.feedback.path) },
          { path: paths.howTo.path, element: <HowTo />, id: createRouteId(paths.howTo.path) },
          { path: paths.changeLog.path, element: <ChangeLog />, id: createRouteId(paths.changeLog.path) },
          { path: paths.video.path, element: <Video />, id: createRouteId(paths.video.path) },
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
