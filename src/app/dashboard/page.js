const Dashboard = async () => {
  // const res = await fetch ('https://jsonplaceholder.typicode.com/todos', {cache: 'no-store'});
  // const data = await res.json();
  return (
    <section className="container grid gap-5 grid-cols-1 sm:grid-cols-2">
      <h1 className="text-center text-[25px] text-gray-700 font-bold">Use Dashboard</h1>
      {/* {data?.map(item =>  {
        return (
          <>
            <div className="bg-slate-400 rounded-md text-center py-4">
              <h2 className="font-medium text-lg text-green-200">id: {item.id}</h2>
              <h1 className="font-medium mt-2 text-[20px] text-gray-100">{item.title}</h1>
            </div>
          </>
        )
      })} */}
    </section>
  );
};

export default Dashboard;