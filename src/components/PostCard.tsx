import Link from "next/link";

const PostCard = () => {
    return (
        <div className="m-5 mb-8 flex flex-col sm:flex-row items-center gap-8  hover:border " >
            {/* {item.img && ( */}
                <div className="w-full sm:w-1/4 lg:w-1/3">
                    <img
                        src='/product.jpg'
                        alt=""
                        className="w-full h-auto object-cover"
                    />
                </div>
            {/* )} */}

            <div className="flex-1 text-white">
                <div className="flex gap-2">
                    <span className="text-gray-500">10-3-2023 - </span>
                    <span className=" font-medium text-red-800">style</span>
                </div>
                <Link href={`/posts/style`}>
                    <h1 className="text-3xl font-bold">Blog 1</h1>
                </Link>
                <p className="text-lg font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quam.</p>
                <Link href="/posts/style" className="border-b border-red-800 inline-block mt-2 ">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostCard;