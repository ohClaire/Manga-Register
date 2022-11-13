import React from 'react';

type Props = {};

const ErrorPage = (props: Props) => {
  return (
    <div className="error-message">
      <h2>Server cannot be reached. Try again later.</h2>
    </div>
  );
};

export default ErrorPage;
