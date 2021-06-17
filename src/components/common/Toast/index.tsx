import React, {
  HTMLAttributes,
  useState,
  useEffect,
  ReactElement,
} from "react";

import * as ToastStyles from "@/styles/common/toast.module.scss";
import {
  AlertIcon,
  CheckIcon,
  FlameIcon,
  InfoIcon,
  CloseIcon,
  BellIcon,
  RingingBellIcon,
} from "./icons";

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

  const getIcon = (type: string): ReactElement => {
    switch (type) {
      case "primary":
        return <RingingBellIcon />;
      case "secondary":
        return <BellIcon />;
      case "basic":
        return <InfoIcon />;
      case "warning":
        return <AlertIcon />;
      case "danger":
        return <FlameIcon />;
      case "success":
        return <CheckIcon />;
      default:
        return <InfoIcon />;
    }
  };

  return (
    <div
      className={`${ToastStyles.notificationContainer} ${ToastStyles[position]}`}
    >
      {list.map(
        (
          {
            title,
            message,
            type = "basic",
            toastClassName = "",
            size = "sm",
          },
          index
        ) => (
          <div
            key={title + index}
            className={`${ToastStyles.toast} ${ToastStyles[position]} ${ToastStyles[type]} ${ToastStyles[size]} ${toastClassName}`}
          >
            <div className={ToastStyles.notificationIcon}>{getIcon(type)}</div>
            <div className={ToastStyles.notificationDetails}>
              <p className={ToastStyles.notificationTitle}>{title}</p>
              <p className={ToastStyles.notificationMessage}>{message}</p>
            </div>
            <button>
              <CloseIcon />
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Toast;
