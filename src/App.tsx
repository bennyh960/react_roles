import { useEffect } from "react";
// import logo from "./logo.svg";
import { Layout } from "antd";
import { Outlet, useParams, Navigate, useOutlet, useLocation } from "react-router-dom";
import NavbarDesktop from "./Components/Navbar/NavbarDesktop/NavbarDesktop";

const { Content } = Layout;

const isRoleValid = (userRoles: string[] | undefined, outletRole: string[] | null) => {
  if (!userRoles) return false;
  if (!outletRole) return true;
  return userRoles.some((role) => outletRole.includes(role));
};

function App() {
  return (
    <Layout style={{ height: "98vh", display: "flex", flexDirection: "column", overflow: "auto" }}>
      <NavbarDesktop />
      <Content className="content_css_class">
        <Outlet />
      </Content>
    </Layout>
  );
}

export default App;
