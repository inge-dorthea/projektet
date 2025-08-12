import WeirdText from "@/components/WeirdText";
import { getData, getQueryData } from "../data";

export default async function Home() {

  const data: Datatype = await getData();

  return (
    <div>
      {data && data.data.map((item, index:number) => (
        <div key={index}>
          <WeirdText weird_text={item.weird_text} />
        </div>

        
      ))}
    </div>
  );
}
