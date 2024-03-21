import { useEffect } from "react";
// import logo from "./logo.svg";
import { Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import NavbarDesktop from "./Components/Navbar/NavbarDesktop/NavbarDesktop";

const { Content, Header } = Layout;

function App() {
  const naviage = useNavigate();
  useEffect(() => {
    naviage("/v1/dashboard");
  }, [naviage]);
  return (
    <Layout style={{ height: "100vh", display: "flex", flexDirection: "column", gap: "5px" }}>
      <Header id="layout_header_css_class">
        <NavbarDesktop />
      </Header>
      <Content id="layout_content_css_class">
        <Outlet />
      </Content>
    </Layout>
  );
}

export default App;
