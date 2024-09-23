'use client'

import Featured from "../components/Featured"
import CategoryList from "../components/category/CategoryList"
import CardLIst from "../components/CardLIst"

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