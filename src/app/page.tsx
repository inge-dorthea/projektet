import { getData, getQueryData } from "./data";

export default async function Home() {

  const data = await getQueryData("2");

  return (
    <div>
      {data && data.data.map((item:any, index:number) => (
        <div key={index}>{item.b_headline}</div>
      ))}
    </div>
  );
}
