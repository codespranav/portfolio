"use client"
import { PersonStanding, User } from 'lucide-react';
import React from 'react'
import useSWR from 'swr'
import { UseFetchBlog } from '../../../../BlogFetch';
import LoadingSpinner from '../../components/LoadingSpinner';


const page = ({params}) => {
    const {data, error, isLoading} = UseFetchBlog();
    
    if(error){
        return <h1>Something unexpected happened!</h1>
    }
    if(isLoading){
        return <LoadingSpinner/>
    }

    console.log(data);
    
    // get blog respective to id
    function getBlogByID(blogid){
        return data.blogs.find(blogs => blogs.id == params.slug)
    }
    const blog = getBlogByID(params.slug);
  return (
    <section className='max-w-7xl mx-auto mt-8'>
        <div className='md:flex px-4 space-x-12'>
            <div className=' max-w-5xl'>
                <h1 className='text-4xl font-semibold'>{blog.title}</h1>
                <div className="belowtext mt-4 flex items-center gap-4">
                    <span className='flex gap-2 items-center cursor-pointer hover:text-heading'><User/> Pranav Singh</span>
                    <span>.</span>
                    <span className='text-paraColour'>March 22, 2024</span>
                </div>
                <div>
                    <img src={blog.thumb} alt="" className='w-full mt-4 aspect-video'/>
                </div>
                <p>{blog.desc}</p>

            </div>
            <div className=''>
                <h3>Related Articles</h3>
            </div>
        </div>    
    </section>
  )
}

export default page
