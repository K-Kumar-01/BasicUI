import React, { HTMLAttributes } from "react";
import SingleToast from "./SingleToastItem";
import { ToastItem } from "./types";

import * as ToastStyles from "@/styles/common/toast/index.module.scss";

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  position?: "topRight" | "bottomRight" | "topLeft" | "bottomLeft";
  toastList?: Array<ToastItem>;
}

const Toast: React.FC<ToastProps> = ({
  position = "topRight",
  toastList = [],
}): React.ReactElement => {
  return (
    <div
      className={`${ToastStyles.notificationContainer} ${ToastStyles[position]}`}
    >
      {toastList.map(el => (
        <SingleToast key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Toast;
