import React from 'react';
import Layout from './layout';

const Error = ({ message, status }) => {
  return (
    <Layout title={`Error ${status}`}>
      <h1>Error {status}</h1>
      <p>{message}</p>
    </Layout>
  );
};

export default Error;
