import React, { FC, PropsWithChildren } from 'react';
import './layout.css';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="container-lg a4">{children}</div>;
};

export default Layout;
