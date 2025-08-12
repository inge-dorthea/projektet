"use client";

import { getData } from "@/app/data";
import Image from "next/image";
import { useEffect, useState } from "react";

const ModalLink = () => {
  const [data, setData] = useState<Datatype | null>(null);

  useEffect(() => {
    (async () => {
      const data: Datatype = await getData();
      setData(data);
    })();
  }, []);

  const openModal = () => {
    console.log("modal is open");
  };

  return (
    <div className="flex justify-center md:justify-start md:flex-row-reverse gap-4 my-2">
      {data &&
        data.data.map((item, index) => (
          <div key={index} onClick={openModal}>
            <figure>
              <Image
                src={"/images/db_images/" + item.sm_img}
                alt="contact us"
                width="100"
                height="100"
              />
            </figure>
          </div>
        ))}
    </div>
  );
};

export default ModalLink;
