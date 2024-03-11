import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Test from "../Tests/Test";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Details from "../Pages/Details/Details";
import SwaggerApi from "../Pages/SwaggerApi/SwaggerApi";
import HowTo from "../Pages/HowTo/HowTo";
import ChangeLog from "../Pages/ChangeLog/ChangeLog";
import Video from "../Pages/Video/Video";
import Feedback from "../Pages/Feedback/Feedback";
import Login from "../Pages/Login/Login";

export const paths = {
  dashboard: { path: "dashboard", roles: [] },
  details: { path: "details", roles: ["admin", "manager"] },
  api: { path: "api", roles: ["admin", "manager"] },
  feedback: { path: "feedback", roles: [] },
  howTo: { path: "howTo", roles: [] },
  changeLog: { path: "changeLog", roles: [] },
  video: { path: "video", roles: [] },
};

const createRouteId = (key: keyof typeof paths) => {
  return JSON.stringify({ [key]: paths[key].roles });
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: paths.dashboard.path, element: <Dashboard />, id: createRouteId("dashboard") },
      { path: paths.details.path, element: <Details />, id: createRouteId("details") },
      { path: paths.api.path, element: <SwaggerApi />, id: createRouteId("api") },
      { path: paths.feedback.path, element: <Feedback />, id: createRouteId("feedback") },
      { path: paths.howTo.path, element: <HowTo />, id: createRouteId("howTo") },
      { path: paths.changeLog.path, element: <ChangeLog />, id: createRouteId("changeLog") },
      { path: paths.video.path, element: <Video />, id: createRouteId("video") },
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
