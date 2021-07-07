import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Link } from "gatsby";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
  return (
    <main>
      <Header />
      <Sidebar>
        <Link to="/components/container">Container</Link>
      </Sidebar>
      <section>{children}</section>
      <footer></footer>
    </main>
  );
};

export default Layout;
