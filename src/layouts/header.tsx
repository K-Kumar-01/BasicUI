import React from "react";
import { Link } from "gatsby";
import { Container } from "@/components/common";

import * as headerStyles from "./styles/header.module.scss";

const Header: React.FC = (): React.ReactElement => {
  return (
    <header className={headerStyles.header}>
      <Container>
        <Link to="/" className={headerStyles.logo}>
          BasicUI
        </Link>
      </Container>
    </header>
  );
};

export default Header;
