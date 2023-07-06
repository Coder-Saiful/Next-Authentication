import React from 'react';

export async function generateMetadata({ params }) {
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${params.id}`, {cache: 'no-store'});
    const data = await res.json();
    return {
        title: data.name
    }
  }

const UserDetails = async ({params}) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${params.id}`, {cache: 'no-store'});
    const data = await res.json();
    return (
        <section className='container grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div>
                <i class="fa-regular fa-circle-user text-[200px] text-gray-500 block"></i>
                <h2 className='text-[35px] font-bold mt-3'>{data.name}</h2>
                <h3 className='text-gray-900 text-[25px] font-medium'>{data.email}</h3>
                <h3 className='text-gray-700 text-[20px] font-medium'>{data.username}</h3>
            </div>
            <div>
                <p className='text-[20px]'><b>Street</b>: {data.address.street}</p>
                <p className='text-[20px]'><b>Suite</b>: {data.address.suite}</p>
                <p className='text-[20px]'><b>City</b>: {data.address.city}</p>
                <p className='text-[20px]'><b>Zipcode</b>: {data.address.zipcode}</p>
                <p className='text-[20px]'><b>Phone</b>: {data.phone}</p>
                <p className='text-[20px]'><b>Website</b>: {data.website}</p>
                <p className='text-[20px]'><b>Company</b>: {data.company.name}</p>
            </div>
        </section>
    );
};

export default UserDetails;