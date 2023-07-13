'use client'

import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'
import {signOut, useSession} from 'next-auth/react'
import { deleteCookie } from 'cookies-next';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const {data: session} = useSession();
    console.log({session})
    return (
        <nav className="bg-gray-700 mb-5">
            <div className="container grid grid-cols-5 items-center">
                <div className="logo col-span-1">
                    <Link href='/' className="text-white text-[20px]">NEXT-APP</Link>
                </div>
                <div className="logo col-span-4">
                    <ul className="flex justify-end items-center">
                        <li>
                            <Link className={`nav-link ${pathname == '/' ? 'active' : ''}`} href='/'>Home</Link>
                            <Link className={`nav-link ${pathname == '/admin' ? 'active' : ''}`} href='/admin'>Admin</Link>
                            <Link className={`nav-link ${pathname == '/dashboard' ? 'active' : ''}`} href='/dashboard'>Dashboard</Link>
                            {session ? <button className='nav-link' onClick={() => {
                                signOut({redirect: false}).then(() => router.push('/'));
                            }}>Logout</button> : <Link className='nav-link' href='/auth/signin'>Login</Link>}
                        </li>
                        <li className="text-white">
                            {session?.user.name}
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
};

export default Navbar;