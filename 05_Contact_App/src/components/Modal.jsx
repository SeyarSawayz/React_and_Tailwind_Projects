import React from "react";
import { createPortal } from "react-dom";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="relative z-50 bg-white min-h-[200px] w-[90vw] max-w-[70%] md:max-w-[40vw] mx-auto p-2 rounded-lg">
              <div className="flex justify-end">
                <IoMdCloseCircle
                  onClick={onClose}
                  className="text-2xl cursor-pointer"
                />
              </div>
              {children}
            </div>
            <div
              onClick={onClose}
              className="absolute h-screen w-screen backdrop-blur z-40"
            />
          </div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
