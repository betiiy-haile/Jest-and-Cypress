import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Comments = () => {
    const status = 'authenticated';
    const isLoading = false;

    return (
        <div className="mt-50">
            <h1 className="pt-10 mb-10 text-white text-2xl font-bold">Comments</h1>
            {status === 'authenticated' ? (
                <div className="sm:flex items-center justify-between gap-8 mb-10">
                    <textarea
                        placeholder="Write your comment here...."
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                    <button className="px-4 py-2 bg-teal-500 text-white  rounded-md">
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">Login to write comment</Link>
            )}

            <div className="mt-10">
                <div className="mb-10">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                            {/* {item?.user?.image && ( */}
                                <Image src='/product.jpg' alt="" width={100} height={100} className="rounded-full" />
                            {/* )} */}
                        </div>
                        <div className="ml-2 flex flex-col ">
                            <span className="font-bold text-white text-lg ">Betelhem Haile</span>
                            <span className="text-sm text-gray-500">10.04.2023</span>
                        </div>
                    </div>
                    <p className=" text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim excepturi, debitis hic voluptate est sed possimus quas eos, consectetur quidem laudantium! Fugiat modi asperiores velit earum nostrum, sapiente repellat!</p>
                </div>
            </div>

            <div className="mt-10">
                <div className="mb-10">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                            {/* {item?.user?.image && ( */}
                            <Image src='/product.jpg' alt="" width={100} height={100} className="rounded-full" />
                            {/* )} */}
                        </div>
                        <div className="ml-2 flex flex-col ">
                            <span className="font-bold text-white text-lg ">Betelhem Haile</span>
                            <span className="text-sm text-gray-500">10.04.2023</span>
                        </div>
                    </div>
                    <p className=" text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim excepturi, debitis hic voluptate est sed possimus quas eos, consectetur quidem laudantium! Fugiat modi asperiores velit earum nostrum, sapiente repellat!</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;