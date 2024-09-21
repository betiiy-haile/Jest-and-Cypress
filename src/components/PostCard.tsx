import Link from "next/link";

const PostCard = () => {
    return (
        <div className=" mb-8 flex flex-col sm:flex-row items-center gap-8 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700 hover:border-gray-500 p-4">
            {/* Image Section */}
            <div className="w-full sm:w-1/3 lg:w-1/4 overflow-hidden rounded-lg">
                <img
                    src='/product.jpg'
                    alt="Blog Post Image"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 text-white">
                <div className="flex gap-2 mb-2 text-sm">
                    <span className="text-gray-500">10-3-2023 - </span>
                    <span className="font-medium text-indigo-400">style</span>
                </div>
                <Link href={`/posts/style`}>
                    <h1 className="text-2xl sm:text-3xl font-bold hover:text-indigo-400 transition-colors duration-300">
                        Blog 1
                    </h1>
                </Link>
                <p className="text-base sm:text-lg font-light mt-2 text-gray-300 leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, quam.
                </p>
                <Link href="/posts/style" className="border-b border-indigo-400 inline-block mt-2 hover:border-indigo-600 transition-colors duration-300">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
