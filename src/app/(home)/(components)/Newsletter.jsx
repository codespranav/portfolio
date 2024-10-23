"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import newsletterimage from '../../assets/teamtransformed.jpeg';

const Newsletter = () => {
    return (
        <section className='py-16 overflow-hidden'>
            <div className="max-w-7xl mx-auto border-b border-neutral-800 pb-24 w-full h-[440px] md:h-[380px] relative">
                {/* Image with gradient overlay */}
                <Image
                    src={newsletterimage}
                    quality={100}
                    alt="Newsletter Background"
                    layout="fill" // Use 'fill' to cover the entire div
                    objectFit="cover" // Maintain aspect ratio and cover the div
                    className="rounded-lg opacity-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 rounded-lg"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-6 flex justify-center flex-col items-center">
                    <h3 className="text-2xl md:text-5xl font-bold text-center leading-tight drop-shadow-md">Elevate Your Business to New Heights!</h3>
                    <button 
                        className='bg-blue-700 hover:bg-blue-800 transition duration-300 ease-in-out text-white px-6 py-3 rounded-full mt-7 shadow-lg transform hover:scale-105'
                    > 
                        Let’s Get Started
                    </button>
                </div>
            </div> 
        </section>
    );
};

export default Newsletter;
