import React, { HTMLAttributes } from "react";

import * as ButtonStyles from "@/styles/common/button.module.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  text?: string;
  type?: "basic" | "primary" | "secondary" | "success" | "danger" | "warning";
  variant?: "outlined" | "fill";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  size = "sm",
  text = "I am a button",
  type = "basic",
  variant = "outlined",
  ...props
}): React.ReactElement => {
  return (
    <button
      {...props}
      className={`${ButtonStyles.button} ${ButtonStyles[type]} ${
        ButtonStyles[variant]
      } ${disabled ? ButtonStyles.disabled : ""} ${ButtonStyles[size]} ${
        className ? className : ""
      }`}
      disabled={disabled}
    >
      {children || text}
    </button>
  );
};

export default Button;
