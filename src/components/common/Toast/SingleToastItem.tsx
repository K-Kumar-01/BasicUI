import React, { memo, ReactElement } from "react";
import {
  AlertIcon,
  CheckIcon,
  FlameIcon,
  InfoIcon,
  CloseIcon,
  BellIcon,
  RingingBellIcon,
} from "./icons";
import { ToastItem } from "./types";

import * as ToastItemStyles from "@/styles/common/toast/singletoast.module.scss";

interface ToastItemProps extends ToastItem {
  deleteToast: (id: number | string) => void;
}

const SingleToastItem = memo(
  ({
    id,
    title,
    message,
    type = "basic",
    toastClassName = "",
    size = "sm",
    deleteToast,
  }: ToastItemProps) => {
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
        className={`${ToastItemStyles.toast} ${ToastItemStyles[type]} ${ToastItemStyles[size]} ${toastClassName}`}
      >
        <div className={ToastItemStyles.notificationIcon}>{getIcon(type)}</div>
        <div className={ToastItemStyles.notificationDetails}>
          <p className={ToastItemStyles.notificationTitle}>{title}</p>
          <p className={ToastItemStyles.notificationMessage}>{message}</p>
        </div>
        <button onClick={() => deleteToast(id)}>
          <CloseIcon />
        </button>
      </div>
    );
  }
);

export default SingleToastItem;
