import PageCard from "../../Components/PageCard/PageCard";
import CollapseUi from "../../Components/CollapseUI/CollapseUi";
import { CollapseProps, Descriptions } from "antd";
import { responsiveBreakPoints } from "../../Utils/Constants";

const items: CollapseProps["items"] = [
  {
    label: "API Headers",
    children: (
      <Descriptions
        layout={window.innerWidth < responsiveBreakPoints.sm ? "vertical" : "horizontal"}
        column={1}
        title="The following ApI Headers are required for most API Calls"
      >
        <Descriptions.Item label="x-api-key">You can find this in your Settings page</Descriptions.Item>
        <Descriptions.Item label="x-idempotency-key">
          This is a GUID that you generate to ensure a single successful call with the API Layer which is 36 characters
          long
        </Descriptions.Item>
        <Descriptions.Item label="Content-Type"> Please set this as "application/json"</Descriptions.Item>
      </Descriptions>
    ),
  },
  {
    label: "Access To API",
    children: (
      <Descriptions
        layout={window.innerWidth < responsiveBreakPoints.sm ? "vertical" : "horizontal"}
        column={1}
        title="Swagger API"
      >
        <Descriptions.Item>Currently only admins can make request using swagger api </Descriptions.Item>
      </Descriptions>
    ),
  },
  {
    label: "Notifications",
    children: (
      <Descriptions
        layout={window.innerWidth < responsiveBreakPoints.sm ? "vertical" : "horizontal"}
        column={1}
        title="For the purpose of the sandbox, we have enabled an API endpoint that can be used to get all Notifications received as your PIP."
      >
        <Descriptions.Item>
          This Notification endpoint will show either one of the 4 values in each of its response:
        </Descriptions.Item>
        <Descriptions.Item>Payment</Descriptions.Item>
        <Descriptions.Item>Request for Payment</Descriptions.Item>
        <Descriptions.Item>Request for Lock</Descriptions.Item>
        <Descriptions.Item>ESIP</Descriptions.Item>
        <Descriptions.Item>
          We can confirm that you will never receieve more than one request per 'RequestDetail'
        </Descriptions.Item>
      </Descriptions>
    ),
  },

  {
    label: "Setting up your Notification End Points (Available on Request)",
    children: (
      <Descriptions layout={window.innerWidth < responsiveBreakPoints.sm ? "vertical" : "horizontal"} column={1}>
        <Descriptions.Item>
          Use the support page to request access to the webhook by providing your public endpoint.
        </Descriptions.Item>
      </Descriptions>
    ),
  },
  {
    label: "Encryption Sample Apps",
    children: (
      <Descriptions layout={window.innerWidth < responsiveBreakPoints.sm ? "vertical" : "horizontal"} column={1}>
        <Descriptions.Item>
          <a href="\assets\ECDH-AES-Cross-Platform-main.zip" download="ECDH-AES-Cross-Platform-main.zip">
            ECDH-AES-Cross-Platform-main.zip
          </a>
        </Descriptions.Item>
      </Descriptions>
    ),
  },
];

const HowTo = () => {
  return (
    <PageCard title="Documents">
      <CollapseUi items={items} />
    </PageCard>
  );
};

export default HowTo;
