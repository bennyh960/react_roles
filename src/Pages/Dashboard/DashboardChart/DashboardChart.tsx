import { Column } from "@ant-design/plots";
import { Card, Flex, Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const dummyData = {
  versionInfo: {
    hasModuleVersionChanged: false,
    hasApiVersionChanged: false,
  },
  data: {
    UsageList: {
      List: [
        {
          URL: "/v1/accounts/availableBalances",
          Count: "3",
        },
        {
          URL: "/v1/accounts/close",
          Count: "2",
        },
        {
          URL: "/v1/accounts/open",
          Count: "4",
        },
        {
          URL: "/v1/payments/defund",
          Count: "2",
        },
        {
          URL: "/v1/payments/fund",
          Count: "3",
        },
        {
          URL: "/v1/payments/pay",
          Count: "5",
        },
      ],
    },
    TotalCount: "36",
    ErrCount: "3",
    NotifyCnt: "2",
  },
};

const DashboardChart = () => {
  const config = {
    data: dummyData.data.UsageList.List,
    xField: "URL",
    yField: "Count",
  };

  const drawStatistic = () => {
    const data = [
      { label: "Requests", value: 36 },
      { label: "Notifications", value: 3 },
      { label: "Errors", value: 2 },
    ];

    return data.map((m, i) => {
      return (
        <Card key={m.label} style={{ flex: 1, width: "100%" }}>
          <Statistic
            title={m.label}
            value={m.value}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={i % 2 === 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      );
    });
  };

  return (
    <Flex vertical>
      <div className="flex-responsive gap-20 flex-center">{drawStatistic()}</div>
      <Column {...config} colorField="black" containerStyle={{ flex: 1 }} title={"API HISTORY"} />
    </Flex>
  );
};

export default DashboardChart;
