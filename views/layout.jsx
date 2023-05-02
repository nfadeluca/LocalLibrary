import React from 'react';

const Layout = ({ title, children }) => {
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
