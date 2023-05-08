import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

function Layout({ children }) {
  const [params, setParams] = useState([]);
  useEffect(() => {
    const url = window.location.pathname;
    const paramsArray = url.split("/");
    paramsArray.shift();
    setParams(paramsArray);
  }, []);
  return (
    <div className="bg-white pt-16 mb-28 lg:pb-0 h-screen w-screen fixed inset-0 overflow-auto">
      <Navbar />
      <Sidenav />
      <div className="px-5 mt-5 font-medium text-xs text-slate-400 space-x-3 flex lg:hidden items-center font-poppins">
        {params.map((param, i) => {
          return (
            <div key={i}>
              <span className="mr-3">/</span>
              <span
                className={`className="text-zinc-600 ${
                  i == params.length - 1 && "text-slate-700"
                }`}
              >
                {param[0].toUpperCase() + param.slice(1)}
              </span>
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
}

export default Layout;
