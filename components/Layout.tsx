import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  P?: any;
}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
