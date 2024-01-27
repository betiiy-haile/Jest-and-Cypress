'use client'

import Navbar from '@/components/Navbar'
import { useState } from 'react'
import CategoryList from '@/components/category/CategoryList'
import Footer from '@/components/Footer'
import CardLIst from '@/components/CardLIst'

const HomePage = () => {

  return (
    <div >
      <div className='flex flex-col gap-10 p-4 '>
        <hr className='w-full bg-black border-2' />
        <img src='blog-dark.svg' alt='main page image' />
        <hr className='w-full bg-black border-2' />
      </div>
      <p className='px-4 sm:px-10 text-center text-white'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quidem minus, minima
        numquam expedita pariatur obcaecati excepturi eum veritatis iure in, hic perferendis
        repellat voluptas optio labore, dolores itaque natus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Id, mollitia soluta! Cum eius minima animi non assumenda.
        Veniam animi ducimus iusto quisquam obcaecati earum quam similique ab quaerat, quos est!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt beatae ea, quas odit,
        alias pariatur harum est aspernatur eligendi doloribus suscipit culpa sequi quam. Ab hic
        placeat beatae quos perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus dolore repellat ea deleniti error, beatae sint facere voluptate deserunt
        accusamus. Aut dolorum quas sunt iure et architecto dignissimos quidem. Vitae?
      </p>

      <CategoryList />
      <CardLIst />
    </div>
  )
}

export default HomePage