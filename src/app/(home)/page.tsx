import Nav from "@/components/layout/Nav";
import FrontpageContent from "@/components/content/FrontpageContent";

export default function Home() {
  return (
    <div className="w-[100vw] h-full min-h-[100vh] flex justify-center px-5 pb-5 bg-gradient-to-b from-white to-[#abcfe6]">
      <div className="container lg:w-2/3">
        <Nav id={null} />
        <FrontpageContent />
      </div>
    </div>
  );
}
