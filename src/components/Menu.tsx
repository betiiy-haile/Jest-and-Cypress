import MenuCatagories from "./MenuCatagories"
import MenuPosts from "./MenuPosts"

const Menu = () => {
    return (
        <div className='p-5 ' >

            {/* ---------------------------------------------------------------------------------------------------- */}
            <h2 className='text-base font-semibold text-gray-400'>What's hot</h2>
            <h1 className='text-2xl font-bold text-white'>Most Popular</h1>
            <MenuPosts withImage={false} />

            {/* ---------------------------------------------------------------------------------------------------- */}
            <h2 className='text-base font-semibold text-gray-400'>Discover by Topic</h2>
            <h1 className='text-2xl font-bold text-white'>Catagories</h1>
            <MenuCatagories />
            {/* ---------------------------------------------------------------------------------------------------- */}
            <h2 className='text-base font-semibold text-gray-400'>Chosen by the editor</h2>
            <h1 className='text-2xl font-bold text-white'>Editors pick</h1>
            <MenuPosts withImage={true} />
        </div>
    )
}

export default Menu
