import Layout from "@/components/Layout";
import GlobalStateContext from "@/context/GlobalState";
import "@/styles/globals.css";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [sidenavOpen, setSidenavOpen] = useState(false);

  return (
    <GlobalStateContext.Provider
      value={{
        setSidenavOpen,
        sidenavOpen,
      }}
    >
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </GlobalStateContext.Provider>
  );
}
