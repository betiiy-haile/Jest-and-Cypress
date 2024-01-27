import Link from "next/link";

const MenuCategories = () => {
    return (
        <div className="mt-8 mb-12 flex flex-wrap gap-4">
            <Link href="/blog?cat=style" className="px-4 py-2 rounded-xl bg-[#57c4ff] opacity-60 text-white">
                Style
            </Link>
            <Link href="/blog?cat=fashion" className="px-4 py-2 rounded-xl bg-[#da85c7] opacity-60 text-white">
                Fashion
            </Link>
            <Link href="/blog?cat=food" className="px-4 py-2 rounded-xl bg-[#7fb881] opacity-60 text-white">
                Food
            </Link>
            <Link href="/blog?cat=travel" className="px-4 py-2 rounded-xl bg-[#ff7957] opacity-60 text-white">
                Travel
            </Link>
            <Link href="/blog?cat=culture" className="px-4 py-2 rounded-xl bg-[#ffb04f] opacity-60 text-white">
                Culture
            </Link>
            <Link href="/blog?cat=coding" className="px-4 py-2 rounded-xl bg-[#5e4fff] opacity-60 text-white">
                Coding
            </Link>
        </div>
    );
}; 2

export default MenuCategories;