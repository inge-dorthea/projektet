import SubpageContent from "@/components/content/SubpageContent";
import FooterMobile from "@/components/layout/FooterMobile";
import Nav from "@/components/layout/Nav";

const Page = async (props: SubpageProps) => {
  // the id from the query in the url - to make each subpage unique
  const { id } = await props.searchParams;

  return (
    <div
      className={`w-[100vw] h-full min-h-[100vh] flex justify-center px-5 ${
        id == "1" ? "bg-[#abcfe6]" : id == "2" ? "bg-[#bfddef]" : "bg-[#ffb472]"
        // the subpages have different colored backgrounds
      }`}
    >
      <div className="container lg:w-2/3">
        {/* the content is put in a container */}
        <Nav id={parseInt(id)} />
        <div className="md:ms-13.5 mb-4">
          <SubpageContent pageId={parseInt(id)} />
        </div>
        <FooterMobile id={parseInt(id)} />
      </div>
    </div>
  );
};

export default Page;
