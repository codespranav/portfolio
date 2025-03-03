"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import LoadingSpinner from '../components/LoadingSpinner'
import { UseFetchBlog } from '../../../BlogFetch'
import UnderConstructionPopup from '../components/PageUnderConstruction'


const page = () => {
    // const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())
    // const { data, error, isLoading } = useSWR('/api/apidata', fetcher)

//     useEffect(()=>{
//         let res = await fetch("/api/")
//     }, [])
// const blogs: Array<""> = [];
    const {data, error, isLoading} = UseFetchBlog();
    console.log("req data is " + data);
    
    
    if(error){
        return <h1>Something unexpected happened!</h1>
    }
    if(isLoading){
        return <LoadingSpinner/>
    }

  return (
    <section className='px-4 md:px-0 cursor-default'>
          <UnderConstructionPopup />

        <div className='max-w-7xl mx-auto'>
            <div className="heading text-center">
                <h2 className="text-4xl font-bold text-white">Coding Articles</h2>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-7 justify-items-center mt-8'>
                {data.blogs.map((item, index)=>(
                    <div key={index} className=' max-w-96 rounded-md bg-[#1C1C1C]'>
                        {item.thumb ? <img src={item.thumb} alt="" className=' aspect-video mb-4 rounded-t-lg'/>: <img src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" alt="" className=' aspect-video mb-4 rounded-t-lg'/>}
                        <div className="content px-4 py-4">
                        <span className=' bg-secondary rounded-2xl p-3 mb-4 text-black font-semibold text-sm'>{item.category}</span>
                        <Link href= {`blog/${item.id}`}><h3 className=' text-xl font-semibold mt-5 cursor-pointer hover:text-heading'>{item.title}</h3></Link>
                        <p className='text-sm leading-normal0 mt-2 text-paraColour'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          
        </div>
    </section>
  )
}

export default page
