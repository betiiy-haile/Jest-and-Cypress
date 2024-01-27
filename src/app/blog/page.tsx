'use client'
import React from 'react';
import CardLIst from '@/components/CardLIst';
import { useSearchParams } from 'next/navigation';

const BlogPage = () => {
    const searchParams = useSearchParams()
    // console.log("search params", searchParams)
    
    const category = searchParams.get('cat') 
    return (
        <div>
            <h1 className='text-4xl font-bold text-center capitalize text-gray-200 p-4'>{category} Blogs</h1>
            <div>
                <CardLIst />
            </div>
        </div>
    );
};

export default BlogPage;