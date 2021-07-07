import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Link } from "gatsby";

import * as LayoutStyles from "./styles/index.module.scss";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
  return (
    <main>
      <Header />
      <Sidebar>
        <div className={LayoutStyles.sidebar}>
          <Link to="/components/button">Button</Link>
          <Link to="/components/container">Container</Link>
        </div>
      </Sidebar>
      <section>{children}</section>
      <footer></footer>
    </main>
  );
};

export default Layout;
