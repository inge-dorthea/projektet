"use client";

import { getData } from "@/app/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const ModalLink = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number | null>(null)

  const [data, setData] = useState<Datatype | null>(null);

  useEffect(() => {
    (async () => {
      const data: Datatype = await getData();
      setData(data);
    })();
  }, []);

  const openModal = (id: number) => {
    console.log("modal is open");

    setModalOpen(true);
    setModalId(id);
  };

  const closeModal = () => {
    console.log("modal is closed");
    setModalOpen(false);
  }

  return (
    <div className="flex justify-center md:justify-start flex-row-reverse gap-4 my-2">
      {data &&
        data.data.map((item, index) => (
          <div key={index} onClick={()=> openModal(item.id)} className="cursor-pointer">
            <figure>
              <Image
                src={"/images/db_images/" + item.sm_img}
                alt="contact us"
                width="100"
                height="100"
              />
              <figcaption className="text-sm tracking-[-0.09em] text-center">
                {item.email}
              </figcaption>
            </figure>
          </div>
        ))}

      <Modal open={modalOpen} id={modalId} close={closeModal} />
    </div>
  );
};

export default ModalLink;
