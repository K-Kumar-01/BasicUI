import React, { HTMLAttributes } from "react";

import * as ContainerStyles from "@/styles/common/container.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}): React.ReactElement => {
  return (
    <div
      {...props}
      className={`${ContainerStyles.container} ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
