import React from 'react'
import PostCard from './PostCard'
import Pagination from './Pagination'
import Menu from './Menu'

const CardLIst = () => {
  return (
      <div className='flex flex-col lg:flex-row gap-10 w-full '>
          <div className='lg:w-3/5'>
              <h1 className='font-bold text-2xl m-5 text-white'>Recent Blogs</h1>
              <div>
                  <PostCard />
                  <PostCard />
                  <PostCard />
                  <PostCard />
              </div>
              <Pagination page={2} hasNext={true} hasPrev={true} />
          </div>
          <div className='hidden lg:block lg:w-2/5'>
              <Menu />
          </div>
      </div>
  )
}

export default CardLIst
