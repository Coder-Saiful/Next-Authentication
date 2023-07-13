const Home = async () => {
  // const session = await getServerSession(nextAuthOptions);
  // const res = await fetch('http://localhost:3000/api/data');
  // const data = await res.json();
  // console.log({getServerSession: session})
  return (
    <div>
      {/* <h2 className="text-[18px]"> Data = {JSON.stringify(data)}</h2> */}
      <h1 className="text-center text-[25px] text-gray-700 font-bold">Home Page</h1>
    </div>
  );
};

export default Home;