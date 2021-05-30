import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
  return (
    <main>
      <Header />
      <Sidebar />
      <section>{children}</section>
      <footer></footer>
    </main>
  );
};

export default Layout;
