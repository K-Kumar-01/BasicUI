import React from "react";

import * as ButtonStyles from "@/styles/common/button.module.scss";

type ButtonProps = {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  type?: "basic" | "primary" | "secondary" | "success" | "danger" | "warning";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "outlined" | "fill";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  className,
  text = "I am a button",
  type = "basic",
  size = "sm",
  variant = "outlined",
  disabled = false,
}): React.ReactElement => {
  return (
    <button
      className={`${ButtonStyles.button} ${ButtonStyles[type]} ${
        ButtonStyles[variant]
      } ${disabled ? ButtonStyles.disabled : ""} ${ButtonStyles[size]} ${
        className ? className : ""
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
