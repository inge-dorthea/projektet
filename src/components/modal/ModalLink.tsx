"use client"; // useEffect and useState

import Image from "next/image";
import { useEffect, useState } from "react";

import { getData } from "@/app/data";
import Modal from "./Modal";

const ModalLink = () => {
  //* fetching data with useEffect, as a csr-component can't be async
  const [data, setData] = useState<DataList | null>(null);

  useEffect(() => {
    (async () => {
      const data: DataList = await getData();
      setData(data);
    })();
  }, []); // end fetching data

  //* opening and closing the modal - and also sending some data through to it
  const [modalOpen, setModalOpen] = useState<boolean>(false); // useState controlling whether the modal is visible or not
  const [receiverData, setReceiverData] = useState<ObjectData | null>(null); // useState holding the receiver-data used on the form

  const openModal = (item: ObjectData) => {
    setModalOpen(true); // the modal is opened/visible
    setReceiverData(item); // the receiver-data is set
  };

  const closeModal = () => {
    setModalOpen(false); // the modal is closed/hidden
    setReceiverData(null); // the receiver-data is "emptied"
  }; // end opening and closing modal

  //* returning the three contact images (sm_img) and the modal
  return (
    <div className="flex justify-center md:justify-start flex-row-reverse gap-4 my-2">
      {data &&
        data.data.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(item)} // item becomes receiver-data - holding the correct name and email
            className="cursor-pointer"
          >
            <figure>
              <Image
                src={"/images/db_images/" + item.sm_img}
                alt="contact us"
                width="130"
                height="130"
              />
              <figcaption className="text-sm tracking-[-0.09em] text-center">
                {item.email}
              </figcaption>
            </figure>
          </div>
        ))}

      {/* the modal component receives whether it's open, the receiver-data and the close-function through props */}
      <Modal open={modalOpen} receiverData={receiverData} close={closeModal} />
    </div>
  );
};

export default ModalLink;
