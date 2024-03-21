import { Flex, Typography } from "antd";
import { FC, ReactNode } from "react";

interface IPageCardProps {
  title: string;
  children: ReactNode;
}

const PageCard: FC<IPageCardProps> = ({ children, title }) => {
  return (
    <Flex vertical gap={"20px"}>
      <Typography.Title>{title}</Typography.Title>
      {children}
    </Flex>
  );
};

export default PageCard;
