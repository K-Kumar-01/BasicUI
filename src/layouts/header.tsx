import React from "react";

import * as headerStyles from "./styles/header.module.scss";

const Header: React.FC = (): React.ReactElement => {
  return <header className={headerStyles.header}>BasicUI</header>;
};

export default Header;
