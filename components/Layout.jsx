import Image from "next/image";
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
import Copyright from "./copyright";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-1 h-auto min-h-screen overflow-auto justify-between bg-gray-100">
      <Nav />
      <Main>{children}</Main>
      {router.pathname == "/listings/3-plymouth-rd/virtual-tour" ? (
        ""
      ) : (
        <>
          <Footer />
          <Copyright />
        </>
      )}
    </div>
  );
};

export default Layout;
