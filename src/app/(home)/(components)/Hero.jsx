"use client"
import Image from 'next/image'
import React from 'react'
import myProfilePic from '../../assets/pranav_Dev.png'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import Head from 'next/head'

const Hero = () => {
  return (
    <>
    
    <section className="px-4 md:px-0 py-7">
      <div className="md:max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 items-center justify-items-center gap-14 border-b border-neutral-800 pb-24">
        <div className="welcometext">
          <h1 className="text-4xl leading-tight text-heading">
            Hii! I&apos;m Pranav!
          </h1>
          <h1 className="text-4xl font-bold h-20 md:h-fit mt-3">
            {" "}
            <Typewriter
              options={{
                strings: ["Freelance Web Developer", "Freelance App Developer"],
                autoStart: true,
                loop: true,
                delay: 40,
              }}
            />
          </h1>
          {/* <p className='text-md mt-5 text-balance leading-normal text-paraColour'>I started building on the web in 2017 and never stopped.</p>
          <p className='text-md mt-5 text-balance leading-normal text-paraColour'>I’m a passionate web developer with a deep expertise in building modern, responsive websites using the MERN stack.</p> */}
          <p className="text-md mt-5  leading-normal text-paraColour text-pretty">
            For the past six years, I have built hundreds of websites across
            various industries, helping businesses enhance their digital
            presence.
          </p>
          <p className="text-md mt-5  leading-normal text-paraColour text-pretty">
            Whether for startups or established companies, I deliver digital
            solutions that drive engagement and lasting impact.
          </p>

          <div className="ctaction mt-5 flex flex-row items-center gap-4 justify-between md:justify-normal w-full">
          <Link href="/contact">
            <button className="bg-secondary px-6 py-3 rounded-md text-white font-medium hover:bg-secondary-dark hover:text-white transition-all duration-200">
              Schedule Call
            </button>
            </Link>
           
            <button className="bg-primary hover:bg-white hover:text-black px-6 py-3 rounded-md text-white font-medium hover:bg-secondary-dark transition-all duration-200">
              My Work&apos;s
            </button>
          </div>

          {/* TODO re desogm this */}
          {/* <div className="happy-clients flex relative mt-5">
            <div className="z-40 bg-yellow-300 rounded-full w-16 h-16 flex justify-center items-center text-black">05</div>
            <div className="z-30 bg-green-300 rounded-full w-16 h-16 flex justify-center items-center text-black absolute left-10">04</div>
            <div className="z-20 bg-blue-300 rounded-full w-16 h-16 flex justify-center items-center text-black absolute left-20">03</div>
            <div className=" z-10 bg-purple-300 rounded-full w-16 h-16 flex justify-center items-center text-black absolute left-32">04</div>
            <div className="z-0 bg-pink-300 rounded-full w-16 h-16 flex justify-center items-center text-black absolute left-44">05</div>
          </div> */}
        </div>

        <div className="image">
          <Image
            src={myProfilePic}
            className=" aspect-square"
            alt="Profile"
            width={0}
            height={0}
            quality={100}
            loading="lazy"
          />
        </div>
      </div>
    </section>
    </>

  );
}

export default Hero
