import React, { FC, useEffect, useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import useAuth from "../../Hooks/useAuth";

const SwaggerApi: FC<{}> = ({}) => {
  const { user } = useAuth();
  const [supportedSubmitMethods, setSupportedSubmitMethods] = useState<undefined | string[]>([]);

  useEffect(() => {
    setSupportedSubmitMethods(user?.roles.includes("admin") ? undefined : []);
    console.log(user);
  }, [user]);

  return (
    <div>
      <SwaggerUI
        supportedSubmitMethods={user?.roles.includes("admin") ? undefined : []}
        url={"https://localhost:7035/swagger/v1/swagger.json"}
      />
    </div>
  );
};

export default SwaggerApi;
