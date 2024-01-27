import Link from "next/link";

type Props = {
    page: number,
    hasNext: boolean,
    hasPrev: boolean
}

const Pagination = ({ page, hasNext, hasPrev }: Props) => {
    return (
        <div className="px-4 flex items-center justify-between">
            <Link href={`?page=${page - 1}`}>
                <button
                    className={`w-32 px-4 py-2 rounded bg-red-800 text-white ${!hasPrev && "bg-opacity-50 cursor-not-allowed"
                        }`}
                    disabled={!hasPrev}
                >
                    Previous
                </button>
            </Link>
            <Link href={`?page=${page + 1}`}>
                <button
                    className={`w-32 px-4 py-2 rounded bg-red-800 text-white ${!hasNext && "bg-opacity-50 cursor-not-allowed"
                        }`}
                    disabled={!hasNext}
                >
                    Next
                </button>
            </Link>
        </div>
    );
};

export default Pagination;