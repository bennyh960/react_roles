import { Button, Result } from "antd";
import { ResultStatusType } from "antd/es/result";
import { useEffect, useState } from "react";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

const errorMaps: { [key: number]: string } = {
  404: "Sorry, the page you visited does not exist.",
  403: "Sorry, you are not authorized to access this page.",
  400: "Sorry, Bad request.",
  500: "Sorry, something went wrong.",
};

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState({
    message: "",
    status: 404,
  });

  const handleErrorType = () => {
    if (isRouteErrorResponse(error)) {
      setErrorState({ status: error.status, message: error.data?.message || error.statusText });
    } else if (error instanceof Error) {
      setErrorState({ status: 400, message: error.message });
    } else if (typeof error === "string") {
      setErrorState({ status: 400, message: error });
    } else {
      setErrorState({ status: 500, message: "Unknown error" });
    }

    // @ts-ignore
    console.error(error.status);
  };

  useEffect(() => {
    handleErrorType();
  }, []);

  return (
    <Result
      status={errorState.status as ResultStatusType}
      title={errorState.message}
      subTitle={errorState.status && errorMaps[errorState.status]}
      extra={
        <Button onClick={() => navigate("/")} type="primary">
          Back Home
        </Button>
      }
    />
  );
};

export default ErrorPage;
