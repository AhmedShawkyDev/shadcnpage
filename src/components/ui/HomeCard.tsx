import MainCard from "./MainCard";
interface Props {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}
async function getData(): Promise<Props[]> {
  const result = await fetch("http://localhost:4000/recipes");
  //delay response
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return result.json();
}
export default async function HomeCard() {
  const data = await getData();
  return (
    <div className="grid grid-cols-3 gap-8">
      {data.map((item) => {
        return <MainCard key={item.id} itemss={item} />;
      })}
    </div>
  );
}
