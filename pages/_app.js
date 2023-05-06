import GlobalStateContext from "@/context/GlobalState";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [sidenavOpen, setSidenavOpen] = useState(false);

  return (
    <GlobalStateContext.Provider
      value={{
        setSidenavOpen,
        sidenavOpen,
      }}
    >
      <Component {...pageProps} />
    </GlobalStateContext.Provider>
  );
}
