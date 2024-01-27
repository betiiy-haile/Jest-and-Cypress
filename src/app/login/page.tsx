"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const { data, status } = useSession();
    console.log(data, status);

    const router = useRouter();

    if (status === "loading") {
        return <div className='p-5 border-none rounded text-white font-bold cursor-pointer flex items-center justify-center'>Loading...</div>;
    }

    if (status === "authenticated") {
        router.push("/")
    }

    return (
        <div className='flex items-center justify-center my-40'>
            <div className='bg-[#1f273a] p-20 rounded-md flex flex-col gap-10'>
                <button className="p-5 border-none rounded text-white font-bold cursor-pointer flex items-center justify-center bg-blue-700" onClick={() => signIn("google")}>
                    Sign in with Google
                </button>
                <button className='p-5 border-none rounded text-white font-bold cursor-pointer flex items-center justify-center bg-orange-800'>Sign in with Github</button>
                <button className='p-5 border-none rounded text-white font-bold cursor-pointer flex items-center justify-center bg-black'>Sign in with Facebook</button>
            </div>
        </div>
    );
};

export default LoginPage;