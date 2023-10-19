import React from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorHandler({ error }) {
  return (
    <div>
      <p>Error message</p>
      <div>{error.message}</div>
    </div>
  );
}

const ShowName = ({ name }) => {
  return <div>Welcome {name.toUpperCase()}</div>;
};

function ErrorHandlerComp() {
  return (
    // will catch error for below components
    // cannot catch error for event handlers
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <ShowName />
    </ErrorBoundary>
  );
}

export default ErrorHandlerComp;
