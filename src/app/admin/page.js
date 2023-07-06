import Link from "next/link";

const Admin = async () => {
  const res = await fetch ('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
  const data = await res.json();
  return (
    <section className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {/* <h1 className="text-center text-[25px] text-gray-700 font-bold">Home Page</h1> */}
      {data?.map(item =>  {
        return (
          <>
            <Link href={`/user/${item.id}`} className="bg-slate-400 rounded-md text-center py-4">
              <h2><i class="fa-regular fa-circle-user text-[50px] text-green-100"></i></h2>
              <h1 className="font-medium mt-2">{item.name}</h1>
            </Link>
          </>
        )
      })}
    </section>
  );
};

export default Admin;