import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";

const Layout = ({ children }) => {
  return (
    <>
      <Header1 />
      <div className="relative">
        <Header2 />
        {children}
      </div>
    </>
  );
};

export default Layout;
