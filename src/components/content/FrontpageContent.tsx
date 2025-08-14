import Image from "next/image";
import Link from "next/link";

import { getData } from "@/app/data";
import WeirdText from "./WeirdText";


const FrontpageContent = async () => {
  // fetching data
  const data: DataList = await getData();

  return (
    <main>
      <section className="flex flex-col-reverse md:flex-row-reverse md:justify-between gap-6">
        {data &&
          data.data.map((item, index: number) => (
            <Link
              key={index}
              href={{ pathname: "/subpage", query: { id: item.id.toString() } }}
              // the images each link to their matching subpage
            >
              <figure>
                <Image
                  src={"/images/db_images/" + item.fp_img}
                  width="500"
                  height="500"
                  alt={item.weird_text}
                  className="hidden md:block"
                />
                <Image
                  src={"/images/db_images/" + item.alt_img}
                  width="100"
                  height="100"
                  alt={item.weird_text}
                  className="md:hidden w-[100%]"
                />
              </figure>
            </Link>
          ))}
      </section>
      <div className="mt-5 flex justify-end">
        {data && <WeirdText weird_text={data.data[0].fp_weird_text} />}
      </div>
    </main>
  );
};

export default FrontpageContent;
