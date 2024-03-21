import { useEffect, useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import useAuth from "../../Hooks/useAuth";
import { notification } from "antd";
import { paths } from "../../Utils/Constants";
import { isRoleValid } from "../../Components/ProtectedRoute/ProtectedRoute";

const SwaggerApi = () => {
  const { user } = useAuth();
  const [isValidRole, setIsValidRole] = useState(false);
  const [notify, contextHolder] = notification.useNotification();

  const openNotification = () => {
    notify.info({
      key: "role",
      message: "API Usage",
      description: `Only ${paths.api.roles.join(
        " and "
      )} can make actual requests with the API. Others who have access to this API are only for documentation and learning purposes..`,
      duration: 6,
    });
  };

  useEffect(() => {
    setIsValidRole(isRoleValid(user?.roles, paths.api.roles));
  }, [user]);

  useEffect(() => {
    !isValidRole && openNotification();
  }, [isValidRole]);

  return (
    <>
      {contextHolder}
      <div>
        <SwaggerUI
          // supportedSubmitMethods={isValidRole ? undefined : []}
          url={"https://localhost:7035/swagger/v1/swagger.json"}
        />
      </div>
    </>
  );
};

export default SwaggerApi;
