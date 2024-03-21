import { Flex, Menu, MenuProps, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../Utils/Constants";
import useAuth from "../../../Hooks/useAuth";
import "./navbarDesktop.css";

const pages = Object.keys(paths);
const items: MenuProps["items"] = pages.map((key) => {
  const page = paths[key as keyof typeof paths];
  return { label: page.label, key: page.path };
});

const NavbarDesktop = () => {
  const { user } = useAuth();
  const naviage = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    naviage("/v1/" + e.key);
  };

  return (
    <div id="navbar_desktop_wrapper">
      <img
        width={70}
        height={70}
        alt="boi_logo"
        id="logo_main"
        src="https://www.boi.org.il/media/fb5ghk1h/logo-bank-of-israel-2-color.png"
        style={{ marginRight: 10 }}
      />
      <Menu
        onClick={onClick}
        mode="horizontal"
        items={items}
        style={{ justifyContent: "center", flex: 3, width: "80%" }}
        defaultSelectedKeys={["dashboard"]}
      />
      <Flex align="center" gap={10}>
        <img src="\assets\User.png" width={30} style={{ borderRadius: "50%" }} alt="user_avatar" />
        <Typography.Text>{user?.userName}</Typography.Text>
      </Flex>
    </div>
  );
};

export default NavbarDesktop;
