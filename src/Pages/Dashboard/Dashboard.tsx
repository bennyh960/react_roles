import React from "react";
import { Column } from "@ant-design/plots";
import PageCard from "../../Components/PageCard/PageCard";
import DashboardChart from "./DashboardChart/DashboardChart";

const Dashboard = () => {
  return (
    <PageCard title="Welcome to your Sandbox ">
      <DashboardChart />
    </PageCard>
  );
};

export default Dashboard;
