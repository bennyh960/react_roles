import React, { useEffect, useState } from "react";
import PageCard from "../../Components/PageCard/PageCard";
import { Button, Card, Descriptions, Flex, Typography } from "antd";

const response = {
  versionInfo: {
    hasModuleVersionChanged: false,
    hasApiVersionChanged: false,
  },
  data: {
    PIPDetails: {
      PIPName: "Bank of Israel test1",
      APIkey: "dsalkjdjsalkdkasjdlaskdjksjadlkjsakl",
      Id: "DSAD23SLDK2395L23LKFSKJ2KXP",
      PrivateKey: "",
      NotificationURL: "",
      WebhookAPIkey: "",
      ISOPrivateKey:
        "LS0thhbUxtR05NUQpZdkhIZXJgdfgfdsVll6ZkZCZkF3Y3NKWFMzUWVJdsasdSDSADslasdkdsla;kdasdasdSDAsaldkladka;slkda;slkd;akd;alkdakskfashljkhasdkljMgUFJJVkFURSBLRVktLS0tLQo=",
      IsPwdReset: true,
      LedgerType: "",
    },
  },
};
const { Paragraph } = Typography;

type PSPDetails = {
  PIPName: string;
  APIkey: string;
  Id: string;
  PrivateKey: string;
  NotificationURL: string;
  WebhookAPIkey: string;
  ISOPrivateKey: string;
  IsPwdReset: boolean;
  LedgerType: string;
};

const SettingsDetails = () => {
  const [details, setDetails] = useState<PSPDetails | null>(null);

  const fetchDetails = () => {
    //consider to load it once on the app init or use context
    const data = response.data.PIPDetails;
    setDetails(data);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <PageCard title="My PSP Details">
      <div className="flex-responsive gap-20">
        <Card loading={!details} style={{ flex: 2.5 }}>
          <Descriptions column={1} layout="vertical">
            <Descriptions.Item label="PSP Name" children={<Paragraph>{details?.PIPName}</Paragraph>} />
            <Descriptions.Item label="PSP ID" children={<Paragraph copyable>{details?.Id}</Paragraph>} />
            <Descriptions.Item label="API key" children={<Paragraph copyable>{details?.APIkey}</Paragraph>} />
          </Descriptions>
          <Flex vertical>
            <Button type="link" danger ghost style={{ textAlign: "left", paddingLeft: 0 }}>
              Reset Password
            </Button>
            <Button>Edit PSP Name</Button>
          </Flex>
        </Card>
        <Card loading={!details} style={{ flex: 1 }}>
          <Descriptions layout="vertical">
            <Descriptions.Item
              label="Private Encryption Key"
              children={<Paragraph copyable>{details?.ISOPrivateKey}</Paragraph>}
            />
          </Descriptions>
        </Card>
      </div>
    </PageCard>
  );
};

export default SettingsDetails;
