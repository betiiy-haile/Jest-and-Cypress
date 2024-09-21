'use client'

import Navbar from '@/components/Navbar'
import { useState } from 'react'
import CategoryList from '@/components/category/CategoryList'
import Footer from '@/components/Footer'
import CardLIst from '@/components/CardLIst'
import Featured from '@/components/Featured'

const HomePage = () => {

  return (
    <div >
      <Featured />
      <CategoryList />
      <CardLIst />
    </div>
  )
}

export default HomePage