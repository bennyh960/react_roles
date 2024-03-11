import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useParams, Navigate, useOutlet, useRouteError, useLocation } from "react-router-dom";
import NavbarDesktop from "./Components/Navbar/NavbarDesktop/NavbarDesktop";
import useAuth from "./Hooks/useAuth";
import Login from "./Pages/Login/Login";

const { Content } = Layout;

const isRoleValid = (userRoles: string[] | undefined, outletRole: string[] | null) => {
  if (!userRoles) return false;
  if (!outletRole) return true;
  return userRoles.some((role) => outletRole.includes(role));
};

function App() {
  const { user } = useAuth();
  const location = useLocation();
  const getRouteIdFromOutlet = useOutlet();

  useEffect(() => {
    const routeLocationData = getRouteIdFromOutlet?.props.children.props.match.route;
    const locationKey = routeLocationData?.path;
    const locationRolesObj = routeLocationData?.id && JSON.parse(routeLocationData?.id);
    if (locationRolesObj && locationKey) {
      const locationRoles = locationRolesObj[locationKey];
      if (!isRoleValid(user?.roles, locationRoles)) {
        // this line not working yet
        throw new Response("unauthorized", { status: 403 });
        // throw new Error("unauthorized", { cause: "role" });
        console.error("unauthorized", { status: 403 });
      }
      console.log(user?.roles, locationRoles, isRoleValid(user?.roles, locationRoles));
    }
  }, [user, location.pathname]);

  if (!user) return <Login />;

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
