import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useParams, Navigate, useOutlet, useRouteError } from "react-router-dom";
import NavbarDesktop from "./Components/Navbar/NavbarDesktop/NavbarDesktop";
import useAuth from "./Hooks/useAuth";
import Login from "./Pages/Login/Login";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const { Content } = Layout;

const isRoleValid = (userRoles: string[] | undefined, outletRole: string[]) => {
  if (!userRoles) return false;
  else if (outletRole.length === 0) return true;
  return userRoles.some((role) => outletRole.includes(role));
};

function App() {
  const { user } = useAuth();
  const getRouteIdFromOutlet = useOutlet();
  const [isValidRole, setIsValidRole] = useState(true);

  useEffect(() => {
    const routeLocationData = getRouteIdFromOutlet?.props.children.props.match.route;
    const locationKey = routeLocationData.path;
    const locationRolesObj = JSON.parse(routeLocationData.id);
    const locationRoles = locationRolesObj[locationKey];

    setIsValidRole(isRoleValid(user?.roles, locationRoles));
  }, [user]);

  if (!user) return <Login />;
  else if (!isValidRole) {
    // this line not working yet
    // throw new Response("unauthorized", { status: 403 });
    console.error("unauthorized", { status: 403 });
  }

  return (
    <Layout>
      <NavbarDesktop />
      <Content style={{ padding: "0 48px" }}>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default App;
