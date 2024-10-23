"use client"
import { ArrowRight, Code, LayoutPanelLeft, Plug } from 'lucide-react';
import React from 'react';
import { motion } from "framer-motion"

const Services = () => {

// const container = (delay: number)=> ({
//     hidden: {x: -100, opacity: 0},
//     visible:{
//         x: 0,
//         opacity: 1,
//         transition: {duration: 0.5, delay: delay}
//     }
// })
  const myService = [
    {
      serviceName: "Website Development",
      aboutService: "I build fast, responsive websites using the latest technologies, tailored to your needs. Whether it’s a simple site or a complex web app, I deliver high-quality solutions to enhance your online presence.",
      icon: Code ,
    },
    {
      serviceName: "App Development",
      aboutService: "I create intuitive, high-performance apps tailored to your requirements. Using the latest technologies, I build custom solutions that provide seamless user experiences and enhance your business.",
      icon: LayoutPanelLeft,
    },
    {
      serviceName: "WordPress Integration",
      aboutService: "I offer seamless WordPress integration to help you manage your website easily. From custom themes to plugin setup, I ensure a fully functional, user-friendly site tailored to your business needs.",
      icon: Plug,
    },
    {
      serviceName: "App Development",
      aboutService: "I create intuitive, high-performance apps tailored to your requirements. Using the latest technologies, I build custom solutions that provide seamless user experiences and enhance your business.",
      icon: LayoutPanelLeft,
    },
  ];

  return (
    <>
    {/* <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div> */}
    <div className="py-16">
      <div className="max-w-7xl mx-auto border-b border-neutral-800 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">My Services and Works</h2>
          {/* <p className="text-neutral-400 mt-2">
            High-quality solutions for your business.
          </p> */}
        </div>
        {/* <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {myService.map((item, index) => (
             <div
             key={index}
             className=" outline outline-white-50 outline-1 bg-transparent p-8 rounded-lg flex flex-col justify-center items-center transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-black/50 duration-300"
           >
              <div className="text-5xl text-white mb-6">{<item.icon className='w-[100px] h-[100px]'/>}</div>
              <h1 className="text-2xl font-bold text-heading mb-4">
                {item.serviceName}
              </h1>
              <p className="text-neutral-300 text-center leading-relaxed">
                {item.aboutService}
              </p>
            </div>
          ))}
        </div> */}

{myService.map((item, index) => (
    <div 
        key={index} 
        className={`group flex flex-col md:flex-row justify-between items-start md:items-center w-full p-6 hover:bg-slate-50 hover:text-black cursor-default shadow-md`}
    >
        <div className='flex-1 text-xl mb-2 md:mb-0'>
            <h3>{item.serviceName}</h3>
        </div>
        <div className='flex-1 text-pretty text-sm text-paraColour group-hover:text-black mb-2 md:mb-0 text-left md:text-center'>
            <p>{item.aboutService}</p>
        </div>
        <div className='flex-1 flex md:justify-end justify-center items-center'>
        <div className='rounded-full w-12 h-12 border border-gray-100 text-center flex justify-center items-center group-hover:bg-secondary group-hover:-rotate-45 transform transition-transform duration-300'>
    <ArrowRight className='' />
</div>

        </div>
    </div>
))}


      </div>
    </div>
    </>
  );
};

export default Services;
