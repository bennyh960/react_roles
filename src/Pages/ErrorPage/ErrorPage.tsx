import { Button, Result } from "antd";
import { ResultStatusType } from "antd/es/result";
import { FC, useEffect, useState } from "react";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

const errorMaps: { [key: number]: string } = {
  404: "Sorry, the page you visited does not exist.",
  403: "Sorry, you are not authorized to access this page.",
  400: "Sorry, Bad request.",
  500: "Sorry, something went wrong.",
};

interface IErrorProps {
  errorProp?: { status: number; message: string };
}

const ErrorPage: FC<IErrorProps> = ({ errorProp }) => {
  const error = useRouteError();
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState({
    message: "",
    status: 404,
  });

  const handleErrorType = async () => {
    if (isRouteErrorResponse(error)) {
      setErrorState({ status: error.status, message: error.data?.message || error.statusText });
    } else if (error instanceof Error) {
      setErrorState({ status: 400, message: error.message });
    } else if (error instanceof Response) {
      setErrorState({ status: error.status, message: error.text && (await error.text()) });
    } else if (typeof error === "string") {
      setErrorState({ status: 400, message: error });
    } else {
      console.log("from here", error);
      setErrorState({ status: 500, message: "Unknown error" });
    }

    // @ts-ignore
    // console.error(error.status);
  };

  useEffect(() => {
    if (errorProp) {
      setErrorState({ status: errorProp.status, message: errorProp.message });
    } else {
      handleErrorType();
    }
    // eslint-disable-next-line
  }, [errorProp]);

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
