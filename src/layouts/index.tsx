import React from "react";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
  return (
    <main>
      <Header />
      <section>{children}</section>
      <footer></footer>
    </main>
  );
};

export default Layout;
