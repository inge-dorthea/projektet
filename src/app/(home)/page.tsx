import { getData, getQueryData } from "../data";

export default async function Home() {

  const data: Datatype = await getData();

  return (
    <div>
      {data && data.data.map((item, index:number) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}
