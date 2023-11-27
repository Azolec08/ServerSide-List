import Cards from "./Components/cardComponent";

async function myData() {
  const data = await fetch("http://localhost:3002/animeData", {
    next: {
      revalidate: 0,
    },
  });

  return data.json();
}

const MyComponent: React.FC = async () => {
  const allData = await myData();
  return (
    <div className="w-full h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allData.map((list: any) => {
          return (
            <div key={list.id} className="flex flex-col items-center  ">
              <Cards {...list} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyComponent;
