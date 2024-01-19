import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./modal.css";
import useThemeStore from "../../stores/theme-store";
import clsx from "clsx";

interface IModalProps {
  title: string;
  desc: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  onConfirm?: () => void;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  isOpen,
  title,
  desc,
  onClose,
  onConfirm,
  children,
}) => {
  const nodeRef = useRef(null);
  const { theme } = useThemeStore();

  return (
    <>
      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        classNames="fade-modal"
        unmountOnExit
      >
        <div
          onClick={onClose}
          className={clsx(
            "fixed inset-0 z-50",
            theme === "light" && "bg-VeryDarkGreyDark/55 text-DarkGrey",
            theme === "dark" && "bg-LightGreyLightBg/35 text-White",
          )}
          ref={nodeRef}
        >
          {children}
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;