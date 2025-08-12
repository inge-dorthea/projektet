import WeirdText from "@/components/WeirdText";
import { getData } from "../data";
import Nav from "@/components/layout/Nav";
import FooterMobile from "@/components/layout/FooterMobile";

export default async function Home() {
  const data: Datatype = await getData();

  return (
    <div>
      {data &&
        data.data.map((item, index: number) => (
          <div key={index}>
            <Nav id={null} />
            <WeirdText weird_text={item.weird_text} />
            <FooterMobile id={3} />
          </div>
        ))}
    </div>
  );
}
