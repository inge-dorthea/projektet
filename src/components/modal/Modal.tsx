"use client"; // useEffect, useState and createPortal

import ReactDOM from "react-dom"; // using createPortal
import { useEffect, useState } from "react";

import Form from "../form/Form";

const Modal = ({ open, receiverData, close }: ModalProps) => {
  //* making sure the document is loaded
  // createPortal needs the document to be there to attach a child to document.body
  const [documentLoaded, setDocumentLoaded] = useState(false);

  useEffect(() => {
    setDocumentLoaded(true);
  }, []); // end making sure the document is loaded

  return documentLoaded
    ? ReactDOM.createPortal(
        <div
          onClick={close} // if you click outside the modal/on the darkened site, the modal will close
          className={`${
            open ? "block" : "hidden" // if the modal is open the modal is visible + site darkens
          } fixed top-0 left-0 right-0 bottom-0 bg-[#6E4E32]/90`}
        >
          {receiverData && (
            <div
              onClick={(event) => event.stopPropagation()}
              // if you click on the modal, the click won't bubble up to the parent, closin the modal
              // so clicking on this element won't close the modal
              className={`bg-gradient-to-b from-gray-200 ${
                receiverData.id == 1
                  ? "to-[#abcfe6] to-99%"
                  : receiverData.id == 2
                  ? "to-[#bfddef] to-99%"
                  : " to-[#ffb472] to-99%" // using the receiver-data to control the gradient color of the modal
              } fixed min-h-[80%] bottom-[10vh] md:top-[10vh] left-[10vw] right-[10vw] md:right-[40vw] lg:right-[55vw] rounded-lg shadow-2xl p-5 pt-10`}
            >
              <div
                onClick={close} // if you click the X, the modal will close
                className="w-fit rounded-full px-2 py-0.25 cursor-pointer select-none bg-gray-800 text-gray-200 absolute top-[10px] right-[10px]"
              >
                X
              </div>

              {/* the receiver-data is sent through to the form-component */}
              <Form receiverData={receiverData} />
            </div>
          )}
        </div>,
        document.body // the modal-component is attached to document.body
      )
    : null; // if the document is not loaded, the modal-component returns nothing
};

export default Modal;
