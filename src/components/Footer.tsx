import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full px-5 py-2 lg:py-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-gray-300">
            <div className="flex items-start flex-col justify-center gap-2 md:items-center ">
                <Image src="/blog-dark.svg" alt="the blog" width={200} height={100} />
                <p className="mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                    necessitatibus
                </p>
            </div>
        
            <div className="">
                <ul className="pl-5 flex flex-col items-start md:items-center ">
                    <span className="font-bold text-xl mb-2 ">Links</span>

                    <li className="hover:text-green-600">
                        <Link href="/">Homepage</Link>
                    </li>
                    <li className="hover:text-green-600"> 
                        <Link href="/">Blog</Link>
                    </li>
                    <li className="hover:text-green-600">
                        <Link href="/">About</Link>
                    </li>
                    <li className="hover:text-green-600">
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="">
                
                <ul className="pl-5 flex flex-col items-start md:items-center">
                    <span className="font-bold text-xl mb-2">Tags</span>
                    <li className="hover:text-green-600">
                        <Link href="/">Style</Link>
                    </li>
                    <li className="hover:text-green-600">
                        <Link href="/">Fashion</Link>
                    </li>
                    <li className="hover:text-green-600">
                        <Link href="/">Coding</Link>
                    </li>
                    <li className="hover:text-green-600">
                        <Link href="/">Travel</Link>
                    </li>
                </ul>
            </div>
            <div className="">
               
                <ul className="pl-5 flex flex-col items-start md:items-center">
                    <span className="font-bold text-xl mb-2">Socials</span>
                    <li className="hover:text-green-600">
                        <Link href="/">Facebook</Link>
                    </li>
                    <li className="hover:text-green-600">
                        <Link href="/">Instagram</Link>
                    </li>
                    <li className="hover:text-green-600">
                        <Link href="/">Tiktok</Link>
                    </li>
                    <li className="hover:text-green-600">
                        <Link href="/">Youtube</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;