import React, { HTMLAttributes, ReactNode } from "react";

import * as BackdropStyles from "@/styles/common/backdrop.module.scss";

interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div
        className={`${BackdropStyles.backdrop} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Backdrop;
