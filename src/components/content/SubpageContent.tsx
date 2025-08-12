import { getQueryData } from "@/app/data";
import WeirdText from "../WeirdText";
import Image from "next/image";
import ModalLink from "../modal/ModalLink";

const SubpageContent = async ({ id }: { id: number }) => {
  const data: Datatype = await getQueryData(id.toString());

  return (
    <main>
      {data && (
        <div className="md:flex">
          <figure>
            <Image
              src={"/images/db_images/" + data.data[0].sp_img}
              alt={data.data[0].name}
              width="500"
              height="500"
              className="hidden md:block"
            />
            <Image
              src={"/images/db_images/" + data.data[0].alt_img}
              alt={data.data[0].name}
              width="100"
              height="100"
              className="md:hidden w-[100%] mb-4 mt-1"
            />
          </figure>
          <section className="flex flex-col justify-between mb-10 md:mb-0 md:mx-5">
            <article className="w-[75%] md:w-[100%]">
              <h1
                className={`text-5xl tracking-[-0.09em] text-transparent bg-clip-text bg-gradient-to-r from-black ${
                  id == 1
                    ? "to-[#255A7A]"
                    : id == 2
                    ? "to-[#5D91A6]"
                    : id == 3
                    ? "to-[#BF7C41]"
                    : "to-black"
                } to-45%`}
              >
                {data.data[0].art_headline} ...
              </h1>
              {data.data[0].article.map((item: string, index: number) => (
                <p
                  key={index}
                  className="text-sm xl:text-md tracking-[-0.005em] my-4"
                >
                  {item}
                </p>
              ))}
              
            </article>

            <div className={id == 3 ? "block" : "hidden"}>
              <ModalLink />
            </div>

            <div className="hidden md:flex justify-end">
              <WeirdText weird_text={data.data[0].weird_text} />
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default SubpageContent;
