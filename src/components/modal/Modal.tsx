"use client";

import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  id: number | null;
  close: () => void;
}

const Modal = ({ open, id, close }: Props) => {
  // making sure the document is loaded before using createPortal, as it needs the document to work
  const [documentLoaded, setDocumentLoaded] = useState(false);

  useEffect(() => {
    setDocumentLoaded(true);
  }, []);

  return documentLoaded
    ? ReactDOM.createPortal(
        <div
          onClick={close}
          className={`${
            open ? "block" : "hidden"
          } fixed top-0 left-0 right-0 bottom-0 bg-[#6E4E32]/90`}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={`bg-gradient-to-b from-gray-200 ${
              id == 1
                ? "to-[#abcfe6] to-99%"
                : id == 2
                ? "to-[#bfddef] to-99%"
                : " to-[#ffb472] to-99%"
            } fixed min-h-[80%] bottom-[10vh] md:top-[10vh] left-[10vw] right-[10vw] md:right-[40vw] lg:right-[55vw] rounded-xs shadow-2xl p-5`}
          >
            <div
              onClick={close}
              className="w-fit h-fit rounded-full px-2 cursor-pointer bg-gray-800 text-gray-200 absolute top-[10px] right-[10px]"
            >
              X
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
