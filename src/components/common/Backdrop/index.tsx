import React, { FC, ReactNode } from "react";

import * as BackdropStyles from "@/styles/common/backdrop.module.scss";

interface BackdropProps {
  children?: ReactNode;
  className?: string;
}

const Backdrop: FC<BackdropProps> = ({ children, className = "" }) => {
  return (
    <div className={`${BackdropStyles.backdrop} ${className}`}>{children}</div>
  );
};

export default Backdrop;
