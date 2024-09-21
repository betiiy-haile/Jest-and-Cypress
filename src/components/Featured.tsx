import React from "react";
import Image from "next/image";

const Featured = () => {
    return (
        <div className="mt-8">
            <h1 className="text-7xl font-light text-white">
                <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
            </h1>
            <div className="mt-16 flex items-center gap-12">
                <div className="relative flex-1 h-[500px] hidden md:block">
                    <Image src="/p1.jpeg" alt="Featured Image" fill className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col items-start gap-5">
                    <h1 className="text-4xl text-white">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
                    <p className="text-xl font-light text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum
                        inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam!
                        Harum unde sit culpa debitis.
                    </p>
                    <button className="px-12 py-4 bg-blue-600 text-white rounded-md">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
