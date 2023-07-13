'use client'

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import {usePathname, useSearchParams, useRouter} from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
    const [inval_info, setInvalInfo] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams().get('callbackUrl');
    const url = searchParams ? searchParams : 'http://localhost:3000';
    const redirect = new URL(url).pathname;
    const [valErr, setValErr] = useState({});
    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const handleChange = e =>  {
        setInputValue((preVal) => {
            return {
                ...preVal,
                [e.target.name]: e.target.value
            }
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            
            const result = await signIn('credentials', {
                email: inputValue.email,
                password: inputValue.password,
                type: 'login',
                redirect: false,
            });
            setLoading(false);
            if (result.error) {
                setInvalInfo(false);
                const err = JSON.parse(result.error);
                if (err.in_val_pass) {
                    setValErr({});
                    setInvalInfo(JSON.parse(result.error))
                } else if (err.message) {
                    toast.error(`${JSON.parse(result.error).message}`);
                } else if (err.validationError) {
                    setValErr(JSON.parse(result.error).validationError);
                }
            } else {
                setInputValue({
                    email: '',
                    password: ''
                });
                setInvalInfo(false);
                setValErr({})
                router.push('/');
            }
        } catch (error) {
            setLoading(false);
            setInvalInfo(false);
        }
    }

    return (
        <section className='bg-[#28272F] max-w-sm mx-auto rounded-md px-4  py-4'>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
            <h2 className='text-white text-[20px] text-center mb-3 font-medium'>Sign In Form</h2>
            <form className='w-full' onSubmit={onSubmit}>
                <div className='w-full mb-3'>
                    <label className='auth-input-label'>Email:</label>
                    <input type='text' autoComplete='off' placeholder='Enter your email' className={`auth-input ${valErr.email ? 'ring-1 ring-red-400 focus:ring-red-400': ''}`} value={inputValue.email} onChange={handleChange} name='email' />
                    {inval_info && <p className='text-red-400 relative top-[5px]'>{inval_info.in_val_pass}</p>}
                    {valErr && valErr.email && <p className='text-red-400 relative top-[5px]'>{valErr.email}</p>}
                </div>
                <div className='w-full mb-3'>
                    <div className='flex justify-between'>
                        <label className='auth-input-label'>Password:</label>
                        <Link href='/auth/forgot-password' className='text-white text-[14px] hover:underline'>Forgot Password</Link>
                    </div>
                    <input type='password' autoComplete='off' name='password' value={inputValue.password} onChange={handleChange} placeholder='Enter your password' className={`auth-input ${valErr.email ? 'ring-1 ring-red-400 focus:ring-red-400': ''}`}/>
                    {valErr && valErr.password && <p className='text-red-400 relative top-[5px]'>{valErr.password}</p>}
                </div>
                <div className='mb-3'>
                    <button disabled={loading} className='bg-green-400 text-[17px] p-2 w-full rounded-sm text-gray-900'>{loading ? "Submitting..." : "Sign In"}</button>
                </div>
                <div className='flex'>
                    <button type='button' className='w-full bg-white rounded-l-sm py-2' onClick={() => signIn('google', {
                        redirect: true,
                        callbackUrl: '/'
                    })}>Google</button>
                    <button className='w-full bg-[#1773EA] text-white rounded-r-sm py-2' type='button' onClick={() => signIn('facebook', {
                        redirect: true,
                        callbackUrl: '/'
                    })}>Facebook</button>
                </div>
                <div className='text-center mt-2'>
                    <p className='text-gray-400'>Not a member? <Link href='/auth/new-user' className='text-white hover:underline'>Sign up now</Link></p>
                </div>
            </form>
        </section>
    );
};

export default LoginPage;