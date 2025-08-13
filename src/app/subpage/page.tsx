import SubpageContent from "@/components/content/SubpageContent";
import FooterMobile from "@/components/layout/FooterMobile";
import Nav from "@/components/layout/Nav";

type PageProps = {
  searchParams: Promise<{ id: string }>;
};

const Page = async (props: PageProps) => {
  const { id } = await props.searchParams;

  console.log(id);

  return (
    <div
      className={`w-[100vw] h-full min-h-[100vh] flex justify-center px-5 ${
        id == "1"
          ? "bg-[#abcfe6]"
          : id == "2"
          ? "bg-[#bfddef]"
          : id == "3"
          ? "bg-[#ffb472]"
          : "bg-white"
      }`}
    >
      <div className="container lg:w-2/3">
        <Nav id={parseInt(id)} />
      <div className="md:ms-13.5 mb-4">
        <SubpageContent id={parseInt(id)} />
      </div>
      <FooterMobile id={parseInt(id)} />
      </div>
      
    </div>
  );
};

export default Page;
