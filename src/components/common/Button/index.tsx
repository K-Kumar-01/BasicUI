import React from "react";

import * as ButtonStyles from "@/styles/common/button.module.scss";

type ButtonProps = {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  type?: "basic" | "primary" | "secondary";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "outlined" | "fill";
};

const Button: React.FC<ButtonProps> = ({
  className,
  text = "I am a button",
  type = "basic",
  size = "sm",
  variant = "outlined",
}): React.ReactElement => {
  return (
    <button
      className={`${ButtonStyles.button} ${ButtonStyles[type]} ${ButtonStyles[variant]} ${ButtonStyles[size]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
