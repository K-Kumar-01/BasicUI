import React from "react";

import * as ButtonStyles from "@/styles/common/button.module.scss";

type ButtonProps = {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  type?: "basic" | "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  className,
  text = "I am a button",
  type = "basic",
}): React.ReactElement => {
  return (
    <button
      className={`${ButtonStyles.button} ${ButtonStyles[type]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
