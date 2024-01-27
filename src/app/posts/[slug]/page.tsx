
import Menu from "@/components/Menu"
import Image from "next/image"
import Comments from "@/components/Comments"


const SinglePage = () => {


    return (
        <div >
            <div className="flex p-5 gap-10">
                <div className="flex flex-col gap-5 flex-1">
                    <h1 className="text-3xl font-bold text-white">Post One</h1>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, deserunt. Doloremque ea accusantium quis tempora molestiae voluptatem beatae quibusdam rem exercitationem est tempore fugiat quas perferendis, deserunt assumenda fugit perspiciatis.</p>
                    <div className="flex gap-5">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image src="/product.jpg" alt="" width={50} height={50} className="rounded-full" />
                        </div>
                        <div className="flex flex-col text-gray-500">
                            <span>Betty</span>
                            <span>01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block w-[50%] relative">
                    <Image src="/product.jpg" alt="" fill />
                </div>
            </div>

            <div className="flex" >
                <div className="px-5 flex-1">
                    <Comments />
                </div>
                <div className="hidden lg:block w-2/5">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default SinglePage
