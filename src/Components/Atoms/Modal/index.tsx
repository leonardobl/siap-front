import React from "react";
import Modal, { Props } from "react-modal";

interface IMyModalProps extends Props {
  children: React.ReactNode;
}

export const MyModal = ({ children, ...rest }: IMyModalProps) => {
  return (
    <Modal
      {...rest}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          border: "none",
          // background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "12px",
          outline: "none",
          // padding: "20px",
          width: "fit-content",
          height: "fit-content",
          margin: "0 auto",
          transform: "translateY(-50%)",
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingBottom: "32px",
          paddingTop: "16px",
          position: "relative",
          left: 0,
          top: "50%",
          bottom: 0,
          right: 0,
        },
      }}
    >
      {children}
    </Modal>
  );
};
