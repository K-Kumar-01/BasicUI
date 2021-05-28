import React from "react";

import * as ContainerStyles from "@/styles/common/container.module.scss";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({
  children,
  className,
}): React.ReactElement => {
  return (
    <main className={className || ContainerStyles.container}>{children}</main>
  );
};

export default Container;
