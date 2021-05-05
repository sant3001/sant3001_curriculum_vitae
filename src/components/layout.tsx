import * as React from "react";
import "./layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container-lg a4">
      {children}
    </div>
  );
};

export default Layout
