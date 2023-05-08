import React from "react";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

function Layout({ children }) {
  return (
    <div className="bg-white pt-16 pb-16 lg:pb-0 h-screen w-screen fixed inset-0 overflow-auto">
      <Navbar />
      <Sidenav />
      {children}
    </div>
  );
}

export default Layout;
