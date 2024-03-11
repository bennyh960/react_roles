import { Menu, MenuProps } from "antd";
import React, { useState } from "react";

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
  },
  {
    label: "Navigation Two",
    key: "app",
  },
];

const NavbarDesktop = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return <Menu onClick={onClick} mode="horizontal" items={items} />;
};

export default NavbarDesktop;
