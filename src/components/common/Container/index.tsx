import React, { HTMLAttributes } from "react";

import * as ContainerStyles from "@/styles/common/container.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  withPaddingTop?: boolean;
  withPaddingBottom?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  withPaddingTop = false,
  withPaddingBottom = false,
  ...props
}): React.ReactElement => {
  return (
    <div
      {...props}
      className={`${ContainerStyles.container} ${className ? className : ""} ${
        withPaddingTop ? ContainerStyles.paddingTop : ""
      } ${withPaddingBottom ? ContainerStyles.paddingBottom : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
