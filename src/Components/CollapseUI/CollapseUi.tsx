import { Collapse, CollapseProps } from "antd";
import React, { FC } from "react";

const CollapseUi: FC<{ items: CollapseProps["items"]; defaultOpen?: boolean }> = ({ items, defaultOpen }) => {
  return (
    <Collapse
      style={{ background: "white" }}
      items={items}
      defaultActiveKey={defaultOpen ? ["0"] : undefined}
      size="large"
    />
  );
};

export default CollapseUi;
