'use client'
import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {

    const [showMenu, setshowMenu] = useState(false)
    const top = showMenu ? "top-[9%]" : "top-[-100%]"

    const toogleMenu = () => {
        setshowMenu(!showMenu)
    }

    const { status } = useSession()

    return (
        <nav className='w-full px-4 py-5  text-white flex items-center justify-between '>
            <div>
                <h1 className='text-4xl font-bold text-center' >The Blog</h1>
            </div>

            <div className={`absolute md:static left-0 ${showMenu ? "top-[9%]" : "top-[-100%]"} w-full md:w-auto bg-[#0f172a]`}>
                <ul className=" flex flex-col gap-5 md:flex-row md:gap-10 items-center  font-poppins font-light " >
         
                    <li className='hover:text-green-600'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='hover:text-green-600'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='hover:text-green-600'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                    {status === 'authenticated' && (
                        <div className='flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center'>
                            <li className='hover:text-green-600'>
                                <Link href='/write'>Write</Link>
                            </li>
                            <button className='bg-green-500 px-5 py-2 rounded-xl text-gray-100 border-2 border-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-500 hover:border-green-500' onClick={signOut}>Logout</button>
                        </div>
                    )}
                    {
                        status === 'unauthenticated' && (
                            <button className='bg-green-500 px-5 py-2 rounded-xl text-gray-100 border-2 border-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-500 hover:border-green-500'>
                                <Link href='/login'>Login</Link>
                            </button>
                        )
                    }
                </ul>
            </div>

            <div className='my-auto md:hidden'>
                {!showMenu && <span className='cursor-pointer md:hidden text-3xl font-semibold dark:text-gray-100' onClick={toogleMenu} >
                    <FiMenu />
                </span>}
                {showMenu && <span className='cursor-pointer md:hidden text-3xl font-semibold dark:text-gray-100' onClick={toogleMenu}>
                    <AiOutlineClose />
                </span>}
            </div>
            
        </nav>
    )
}

export default Navbar