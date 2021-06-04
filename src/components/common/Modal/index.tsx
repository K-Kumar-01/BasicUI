import React, {
  FC,
  ReactElement,
  HTMLAttributes,
  ReactNode,
  useRef,
  useEffect,
} from "react";

import * as ModalStyles from "@/styles/common/modal.module.scss";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  header?: ReactNode;
  headerClassName?: string;
  footer?: ReactNode;
  footerClassName?: string;
  show: boolean;
  onClick: () => void;
}

const Modal: FC<ModalProps> = ({
  children,
  className = "",
  header = "This area is for Modal Header",
  headerClassName = "",
  footer = "This area is for footer",
  footerClassName,
  show,
  onClick,
  ...props
}): ReactElement => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      if (modalRef.current) {
        modalRef.current.style.display = "flex";
      }
    } else {
      if (modalRef.current) {
        modalRef.current.style.display = "none";
      }
    }
  }, [show]);

  return (
    <div className={`backdrop flex__center`} ref={modalRef}>
      <div className={`${ModalStyles.modal} ${className}`} {...props}>
        <div className={`${ModalStyles.modal__header} ${headerClassName}`}>
          <div>{header}</div>
          <button className={ModalStyles.close} onClick={onClick}>
            &times;
          </button>
        </div>
        <div className={ModalStyles.modal__body}>{children}</div>
        <div className={`${ModalStyles.modal__footer} ${footerClassName}`}>
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;
