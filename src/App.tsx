import React, { useEffect } from "react";
// import logo from "./logo.svg";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useParams, Navigate, useOutlet } from "react-router-dom";
import NavbarDesktop from "./Components/Navbar/NavbarDesktop/NavbarDesktop";
import useAuth from "./Hooks/useAuth";
import Login from "./Pages/Login/Login";

const { Header, Content } = Layout;

function App() {
  const { user } = useAuth();
  const getRouteIdFromOutlet = useOutlet();

  // const isRoleValid = (userRoles: string[] | undefined, outletRole: string[]) => {
  //   if (!userRoles) return false;
  //   else if (outletRole.length === 0) return true;
  //   return userRoles.some((role) => outletRole.includes(role));
  // };

  useEffect(() => {
    const routeLocationData = getRouteIdFromOutlet?.props.children.props.match.route;
    const locationKey = routeLocationData.path;
    const locationRolesObj = JSON.parse(routeLocationData.id);

    console.log(locationKey, locationRolesObj);
    const locationRoles = locationRolesObj[locationKey];
    console.log(locationRoles);
  }, [user]);

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
