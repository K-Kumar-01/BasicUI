import React, { HTMLAttributes, useCallback, useState } from "react";
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
  const [list, setList] = useState<ToastItem[]>(toastList);

  const deleteToast = useCallback(
    (id: number | string) => {
      let allToast = [...list];
      allToast = allToast.filter(toast => toast.id !== id);
      setList(allToast);
    },
    [list]
  );

  return (
    <div
      className={`${ToastStyles.notificationContainer} ${ToastStyles[position]}`}
    >
      {list.map(el => (
        <SingleToast key={el.id} {...el} deleteToast={deleteToast} />
      ))}
    </div>
  );
};

export default Toast;
