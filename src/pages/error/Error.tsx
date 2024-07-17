import { ReactElement } from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

import './Error.scss'

interface RouteError {
  data: string;
  error: {
    columnNumber: number;
    fileName: string;
    lineNumber: number;
    message: string;
    stack: string;
  };
  internal: boolean;
  status: number;
  statusText: string;
}

const ErrorPage = (): ReactElement => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page" className="error">
      <h1 className="error__title">Oops!</h1>
      <p className="error__subtitle">Sorry, an unexpected error has occurred.</p>
      <p className="error__status">{error.status}</p>
      <p className="error__message">{error.error?.message}</p>
      <Link to={'/'}>Go back to home page</Link>
    </div>
  );
}

export default ErrorPage