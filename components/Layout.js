import React from "react";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Sidenav />
      {children}
    </div>
  );
}

export default Layout;
