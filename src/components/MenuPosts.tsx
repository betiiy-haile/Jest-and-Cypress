import Link from "next/link";
import Image from "next/image";

type MenuProps = {
    withImage: boolean
}

const MenuPosts = ({ withImage }: MenuProps) => {
    return (
        <div className="flex flex-col gap-8 mt-8 mb-12">
            <Link href="/" className="flex items-center gap-4">
                {withImage && (
                    <div className="flex-shrink-0 w-16 h-16 relative rounded-full border-2 border-gray-300 overflow-hidden">
                        <Image src="/product.jpg" alt="" layout="fill" objectFit="cover" />
                    </div>
                )}

                <div className="flex flex-col">
                    <span className="px-3 py-2 w-fit rounded-xl text-white text-xs bg-[#57c4ff] opacity-60">
                        Style
                    </span>
                    <h3 className="text-lg font-medium text-slate-50">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, expedita.
                    </h3>
                    <div className="text-sm">
                        <span className="text-gray-500">John Doe - </span>
                        <span className="text-gray-500">10.07.2023</span>
                    </div>
                </div>
            </Link>

            <Link href="/" className="flex items-center gap-4">
                {withImage && (
                    <div className="flex-shrink-0 w-16 h-16 relative rounded-full border-2 border-gray-300 overflow-hidden">
                        <Image src="/product.jpg" alt="" layout="fill" objectFit="cover" />
                    </div>
                )}

                <div className="flex flex-col gap-2">
                    <span className="px-3 py-2 w-fit rounded-xl text-white text-xs bg-[#ff7957] opacity-60">
                        Travel
                    </span>
                    <h3 className="text-lg font-medium text-slate-50">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, expedita.
                    </h3>
                    <div className="text-sm">
                        <span className="text-gray-500">John Doe - </span>
                        <span className="text-gray-500">10.07.2023</span>
                    </div>
                </div>
            </Link>

            <Link href="/" className="flex items-center gap-4">
                {withImage && (
                    <div className="flex-shrink-0 w-16 h-16 relative rounded-full border-2 border-gray-300 overflow-hidden">
                        <Image src="/product.jpg" alt="" layout="fill" objectFit="cover" />
                    </div>
                )}

                <div className="flex flex-col">
                    <span className="px-3 py-2 w-fit rounded-xl text-white text-xs bg-[#da85c7] opacity-60">
                        Fashion
                    </span>
                    <h3 className="text-lg font-medium text-slate-50">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, expedita.
                    </h3>
                    <div className="text-sm">
                        <span className="text-gray-500">John Doe - </span>
                        <span className="text-gray-500">10.07.2023</span>
                    </div>
                </div>
            </Link>

            {/* Repeat the above code for other menu items */}

        </div>
    );
};

export default MenuPosts;