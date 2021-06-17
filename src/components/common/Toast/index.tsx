import React, { HTMLAttributes, useState, useEffect } from "react";

import * as ToastStyles from "@/styles/common/toast.module.scss";

interface ToastItem {
  id: number | string;
  title: string;
  message: string;
  type?: "basic" | "primary" | "secondary" | "success" | "warning" | "danger";
  toastClassName?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  position?: "topRight" | "bottomRight" | "topLeft" | "bottomLeft";
  toastList?: Array<ToastItem>;
}

const Toast: React.FC<ToastProps> = ({
  position = "topRight",
  toastList = [],
}): React.ReactElement => {
  const [list, setList] = useState(toastList);
  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  return (
    <div
      className={`${ToastStyles.notificationContainer} ${ToastStyles[position]}`}
    >
      {list.map(
        (
          { title, message, type = "basic", toastClassName = "", size = "sm" },
          index
        ) => (
          <div
            key={title + index}
            className={`${ToastStyles.toast} ${ToastStyles[position]} ${ToastStyles[type]} ${ToastStyles[size]} ${toastClassName}`}
          >
            <button>&times;</button>
            <div>
              <p className={ToastStyles.notificationTitle}>{title}</p>
              <p className={ToastStyles.notificationMessage}>{message}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Toast;
