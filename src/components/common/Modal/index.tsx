import React, {
  FC,
  ReactElement,
  HTMLAttributes,
  ReactNode,
  useRef,
  Fragment,
  useCallback,
  useEffect,
  MouseEvent,
} from "react";

import * as ModalStyles from "@/styles/common/modal.module.scss";
import Backdrop from "../Backdrop";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  header?: ReactNode;
  headerClassName?: string;
  footer?: ReactNode;
  footerClassName?: string;
  show: boolean;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({
  children,
  className = "",
  header = null,
  headerClassName = "",
  footer = null,
  footerClassName = "",
  show,
  closeModal,
  ...props
}): ReactElement => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackDropClick = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
  };

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && show) {
        closeModal();
      }
    },
    [closeModal, show]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <Fragment>
      {show ? (
        <Backdrop onClick={handleBackDropClick} ref={modalRef}>
          <div className={`${ModalStyles.modal} ${className}`} {...props}>
            <div className={`${ModalStyles.modal__header} ${headerClassName}`}>
              {header && <div>{header}</div>}
              <button className={ModalStyles.close} onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className={ModalStyles.modal__body}>{children}</div>
            {footer && (
              <div
                className={`${ModalStyles.modal__footer} ${footerClassName}`}
              >
                {footer}
              </div>
            )}
          </div>
        </Backdrop>
      ) : null}
    </Fragment>
  );
};

export default Modal;
