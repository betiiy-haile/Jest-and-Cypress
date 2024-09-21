import Image from "next/image";
import Link from "next/link";

const posts = [
    {
        id: 1,
        title: "Understanding JavaScript Closures",
        excerpt:
            "JavaScript closures are a fundamental concept that every developer should know...",
        author: "Betty",
        date: "01.01.2024",
        imageUrl: "/product.jpg",
    },
    {
        id: 2,
        title: "A Guide to CSS Flexbox",
        excerpt:
            "Flexbox is a powerful layout module that helps to design responsive layouts with ease...",
        author: "John Doe",
        date: "02.02.2024",
        imageUrl: "/product.jpg",
    },
    {
        id: 3,
        title: "Exploring React Hooks",
        excerpt:
            "React hooks provide a new way to manage state and lifecycle in functional components...",
        author: "Jane Smith",
        date: "03.03.2024",
        imageUrl: "/product.jpg",
    },
    {
        id: 4,
        title: "Exploring React Hooks",
        excerpt:
            "React hooks provide a new way to manage state and lifecycle in functional components...",
        author: "Jane Smith",
        date: "03.03.2024",
        imageUrl: "/product.jpg",
    },
    {
        id: 5,
        title: "Exploring React Hooks",
        excerpt:
            "React hooks provide a new way to manage state and lifecycle in functional components...",
        author: "Jane Smith",
        date: "03.03.2024",
        imageUrl: "/product.jpg",
    },
    // Add more posts as needed
];

const PostsPage = () => {
    return (
        <div className="w-full min-h-screen mx-auto my-10 space-y-8">
            <h1 className="text-4xl font-bold text-white mb-6">Latest Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-700"
                    >
                        <Link href={`/posts/${post.id}`}>
                            <div className="relative h-48 w-full">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                />
                            </div>
                            <div className="p-5">
                                <h2 className="text-2xl font-bold text-white mb-2 hover:text-indigo-400 transition-colors duration-300">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-gray-700">
                                        <Image
                                            src="/style.jpg"
                                            alt={post.author}
                                            fill
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        <span className="block font-semibold text-white">{post.author}</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostsPage;
