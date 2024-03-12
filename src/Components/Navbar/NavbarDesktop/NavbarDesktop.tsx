import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../Utils/Constants";

const pages = Object.keys(paths);
const items: MenuProps["items"] = pages.map((key) => {
  const page = paths[key as keyof typeof paths];
  return { label: page.label, key: page.path };
});

const NavbarDesktop = () => {
  const naviage = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    naviage("/v1/" + e.key);
  };
  return <Menu onClick={onClick} mode="horizontal" items={items} />;
};

export default NavbarDesktop;
