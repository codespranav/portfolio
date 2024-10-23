import React from 'react'
import Services from './(components)/Services'
import Newsletter from './(components)/Newsletter'
import FAQ from './(components)/FAQ'
import Hero from './(components)/Hero'

const page = () => {
  return (
    <section>
       <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
        <Hero/>
          <div className="border-b border-neutral-800 pb-24 max-w-7xl mx-auto">
        <section className='px-4 md:px-0 cursor-default h-auto pt-24 flex justify-center items-center text-center '>
            <div className="content max-w-3xl mx-auto my-auto" >
              <h1 className='text-3xl font-bold'>Hi, I’m Pranav. Nice to see you here.</h1>
              <p className='mt-4 text-md'>Since beginning my journey as a freelance web developer 4 years ago, I&apos;ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I&apos;m quietly confident, naturally curious, and perpetually working on improving my chops.</p>
            </div>
        </section>
            </div>
        <Services/>
        <Newsletter/>
        {/* <RecentWork/> */}
        <FAQ/>

    </section>
  )
}

export default page
