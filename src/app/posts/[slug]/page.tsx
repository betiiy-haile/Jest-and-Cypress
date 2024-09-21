import Menu from "@/components/Menu";
import Image from "next/image";
import Comments from "@/components/Comments";

const SinglePage = () => {
    return (
        <div className="min-h-screen">

            <div className="flex flex-col lg:flex-row gap-10 mx-auto my-10 w-full  ">
                {/* Post Content */}
                <div className="flex flex-col gap-5 flex-1">
                    <h1 className="text-4xl font-bold text-white hover:text-indigo-400 transition-colors duration-300">
                        Post One
                    </h1>
                    <p className="text-gray-300 leading-relaxed tracking-wide">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                        deserunt. Doloremque ea accusantium quis tempora molestiae
                        voluptatem beatae quibusdam rem exercitationem est tempore fugiat
                        quas perferendis, deserunt assumenda fugit perspiciatis.
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image
                                src="/product.jpg"
                                alt="Author"
                                width={56}
                                height={56}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col text-gray-400">
                            <span className="font-semibold text-white">Betty</span>
                            <span className="text-sm">01.01.2024</span>
                        </div>
                    </div>
                </div>

                {/* Post Image */}
                <div className="hidden lg:block lg:w-[50%] relative rounded-lg overflow-hidden shadow-2xl  hover:scale-105 transform transition-transform duration-300">
                    <Image
                        src="/product.jpg"
                        alt="Post Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>

            {/* Comments and Menu Section */}
            <div className="flex gap-10 mt-8">
                <div className="flex-1 rounded-xl shadow-md ">
                    <Comments />
                </div>
                <div className="hidden lg:block w-2/5">
                    <div className="rounded-xl shadow-md ">
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
