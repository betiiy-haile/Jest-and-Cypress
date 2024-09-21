import React from 'react'
import styles from "./categoryList.module.css"
import { categories } from '@/utils/data'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
      <div className={styles.container}>
          <h1 className={styles.title}>Popular Categories</h1>
          
          <div className={styles.categories}>
              {categories?.map((item, index) => (
                  <Link
                      key={index}
                      href={`/blog?cat=${item.name}`}
                      className={`${styles.category} ${styles[item.name]}`}
                  >
                      {item.image && (
                          <Image
                              src={item.image}
                              alt=""
                              width={32}
                              height={32}
                              className={styles.image}
                          />
                      )}
                      {item.name}
                  </Link>
              ))}
          </div>
      </div>
  )
}

export default CategoryList
