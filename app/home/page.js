import { redirect } from "next/navigation";
const page = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  //revalidate for ISR
  const res = await data.json();

  return (
    <div className="w-[100vw] h-[100vh] bg-[skyblue] flex justify-center items-center">
      <div className="text-left bg-white p-10 w-[40vw] h-[80vh]">
        <h1>SSR SSG ISG</h1>
        <ul className="font-[600] text-2xl">
          {res.map((item) => (
            <div key={item.id} className="mb-4 flex ">
              Name:<p className="font-normal ml-4"> {item.name}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
export const dynamic = "force-dynamic";
