import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import { styled } from "../configs";

export interface LayoutProps {
  children?: React.ReactNode | Array<React.ReactNode>;
}

const Main = styled("div", {
  minHeight: "80vh",
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
