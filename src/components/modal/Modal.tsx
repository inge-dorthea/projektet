"use client";

import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import Form from "../form/Form";

interface Props {
  open: boolean;
  data: DataObjectType | null;
  close: () => void;
}

const Modal = ({ open, data, close }: Props) => {
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
          {data && (
            <div
              onClick={(event) => event.stopPropagation()}
              className={`bg-gradient-to-b from-gray-200 ${
                data.id == 1
                  ? "to-[#abcfe6] to-99%"
                  : data.id == 2
                  ? "to-[#bfddef] to-99%"
                  : " to-[#ffb472] to-99%"
              } fixed min-h-[80%] bottom-[10vh] md:top-[10vh] left-[10vw] right-[10vw] md:right-[40vw] lg:right-[55vw] rounded-lg shadow-2xl p-5 pt-10`}
            >
              <div
                onClick={close}
                className="w-fit rounded-full px-2 py-0.25 cursor-pointer select-none bg-gray-800 text-gray-200 absolute top-[10px] right-[10px]"
              >
                X
              </div>
              <Form data={data} />
            </div>
          )}
        </div>,
        document.body
      )
    : null;
};

export default Modal;
