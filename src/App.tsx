import { useEffect } from "react";
// import logo from "./logo.svg";
import { Layout } from "antd";
import { Outlet, useParams, Navigate, useOutlet, useLocation } from "react-router-dom";
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
