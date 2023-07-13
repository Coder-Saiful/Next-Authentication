'use client'

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const RegisterPage = () => {
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: ""
    });
    const {name, email, password} = inputValue;
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = e => {
        setInputValue((preVal) => {
            return {
                ...preVal,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setLoading(true);
            const result = await signIn('credentials', {
                name: name,
                email: email,
                password: password,
                redirect: false,
                type: 'register'
            });
            setLoading(false);
            console.log({result})
            if (result.error) {
                
            } else {
                setInputValue({
                    name: "",
                    email: "",
                    password: "" 
                });
                router.push('/');
            }
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <section className='bg-[#28272F] max-w-sm mx-auto rounded-md px-4  py-4'>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
            <h2 className='text-white text-[20px] text-center mb-3 font-medium'>Sign Up Form</h2>
            <form className='w-full' onSubmit={handleSubmit}>
            <div className='w-full mb-3'>
                    <label className='auth-input-label'>Name:</label>
                    <input type='text' placeholder='Enter your name' className='auth-input' name='name' value={name} onChange={handleChange}/>
                </div>
                <div className='w-full mb-3'>
                    <label className='auth-input-label'>Email:</label>
                    <input type='text' placeholder='Enter your email' className='auth-input' name='email' value={email} onChange={handleChange}/>
                </div>
                <div className='w-full mb-3'>
                    <div className='flex justify-between'>
                        <label className='auth-input-label'>Password:</label>
                    </div>
                    <input type='text' placeholder='Enter your password' className='auth-input' name='password' value={password} onChange={handleChange}/>
                </div>
                <div>
                    <button className='bg-green-400 text-[17px] p-2 w-full mb-4 rounded-sm text-gray-900' disabled={loading}>{loading ? 'Creating Account...': 'Create Account'}</button>
                </div>
                <div className='flex'>
                    <button type='button' className='w-full bg-white rounded-l-sm py-2' onClick={() => signIn('google', {
                        redirect: true,
                        callbackUrl: '/'
                    })}>Google</button>
                    <button className='w-full bg-[#1773EA] text-white rounded-r-sm py-2' type='button'>Facebook</button>
                </div>
                <div className='text-center mt-2'>
                    <p className='text-gray-400'>Already have a account? <Link href='/auth/signin' className='text-white hover:underline'>Sign in now</Link></p>
                </div>
            </form>
        </section>
    );
};

export default RegisterPage;