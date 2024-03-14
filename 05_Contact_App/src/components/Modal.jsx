import React from "react";
import { createPortal } from "react-dom";

import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="fixed  top-0 left-0 w-full h-full flex items-center justify-center">
            <div className=" relative z-50 min-h-[200px] bg-white max-w-[80%] mx-auto md:max-w-[40%]  p-2 ">
              <div className="flex justify-end">
                <AiOutlineClose
                  onClick={onClose}
                  className="text-3xl cursor-pointer"
                />
              </div>
              {children}
            </div>

            <div
              onClick={onClose}
              className="h-screen w-screen backdrop-blur absolute top-0 z-40"
            />
          </div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
