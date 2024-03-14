import React, { useMemo } from "react";
import { useParams, useRoutes } from "react-router-dom";
import PageCard from "../../Components/PageCard/PageCard";
import { Collapse, Descriptions, Typography } from "antd";
import CollapseUi from "../../Components/CollapseUI/CollapseUi";

const { Paragraph } = Typography;

type ChangeLogDescriptionChildren = { label: string; content: string[] | null };

type ChangeLogItems = {
  version: string;
  release: string;
  date: string;
  children: ChangeLogDescriptionChildren[];
};

const data: ChangeLogItems[] = [
  {
    version: "V1",
    release: "9",
    date: "(07/11/2023 9:00 AM GMT)",
    children: [
      { label: "This release contains the following updates to the API's:", content: null },
      {
        label: "This release contains the following sections/menu items:",
        content: ["New screen added for API documentation"],
      },
      {
        label: "Defect fixes:",
        content: null,
      },
    ],
  },
  {
    version: "V1",
    release: "8",
    date: "(31/08/2023 12:00 AM GMT)",
    children: [
      {
        label: "This release contains the following updates to the API's:",
        content: ["POST", "/offlinepayments/download", "/offlinepayments/upload"],
      },
      {
        label: "This release contains the following sections/menu items:",
        content: null,
      },
      {
        label: "Defect fixes:",
        content: null,
      },
    ],
  },
  {
    version: "V1",
    release: "7",
    date: "(02/03/2023 3:30 PM GMT)",
    children: [
      {
        label: "This release contains the following updates to the API's:",
        content: [
          "1. The current underlying CBDC uses an Account based Ledger. In this release, we have added Token based Ledger in parallel, both that can be accessed by the same set of API's. Each PIP can now decide if they want to use Account or Token based. If you'd like to get access to a Token based CBDC Ledger, please let the core team know via email. ",
          "",
          "2. In the previous version, we had a single field to send Encrypted Message between PIP's. We realised that we needed more details to be added to ensure this becomes functional and we have now decided to make this a list. Hence, the Encrypted Message blob has been changed to list for all the below APIs",
          "",
          "POST/threeParty",
          "​POST/twoParty",
          "/​POST/notification",
          "/​POST/defund",
          "​POST​/fund",
          "",
          "PS. We have kep the Ncrptd Field as is, to prevent breaking changes at your current implementation. But we will decommission this field by the 10th of February 2023.",
          "",
          "3.Removed Ncrptd fields from /drawdown and /cancellock as these details are already known to the PIP and was unnecessary.",
        ],
      },
      {
        label: "This release contains the following sections/menu items:",
        content: null,
      },
      {
        label: "Defect fixes:",
        content: null,
      },
    ],
  },
  {
    version: "V1",
    release: "6",
    date: "(02/01/2023 4:30 PM GMT)",
    children: [
      {
        label: "This release contains the following updates to the API's:",
        content: [
          "POST",
          "/esips/ConnectAccount",
          "/esips/DisconnectAccount",

          "/lock/hashtimeLock",
          "/lock/drawdownHTLC",

          "/offlinepayments/download - Mock API",
          "/offlinepayments/upload - Mock API",

          "We have modified /requestToPay and /requestToLock to support authenticated payload as well.",
        ],
      },
      {
        label: "This release contains the following sections/menu items:",
        content: null,
      },
      {
        label: "Defect fixes:",
        content: null,
      },
    ],
  },
];

const ChangeLog = () => {
  const drawCollapsibleChildren = useMemo(
    () => (child: ChangeLogDescriptionChildren) => {
      return (
        <Descriptions key={child.label} layout="vertical">
          <Descriptions.Item
            labelStyle={{ fontWeight: "bold", color: "black" }}
            label={child.label}
            children={
              <Paragraph>
                {child.content?.map((c, idx) => (c === "" ? <br key={idx} /> : <p key={c}>{c}</p>)) || "None"}
              </Paragraph>
            }
          />
        </Descriptions>
      );
    },
    []
  );

  const ConvertDataToCollapsibleItems = useMemo(
    () => () => {
      return data.map((d, idx) => {
        return {
          label: `${d.version} - Release ${d.release} ${d.date}`,
          key: idx,
          children: d.children.map((child) => {
            return drawCollapsibleChildren(child);
          }),
        };
      });
    },
    []
  );

  return (
    <PageCard title="Change Log">
      <CollapseUi defaultOpen items={ConvertDataToCollapsibleItems()} />
    </PageCard>
  );
};

export default ChangeLog;
