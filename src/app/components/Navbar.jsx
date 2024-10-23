import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const navigationLinks = [
        {name: "Home", link: "/"},
        {name: "About Me", link: "/"},
        {name: "Services", link: "/"},
        {name: "Blog", link: "/blog"},
        {name: "Works", link: "/"},
    ]
  return (
    <header className='py-8 shadow-md px-4 md:px-0'>
        {/* <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div> */}
        <nav className='flex justify-between items-center max-w-7xl m-auto relative'>
            <div className="logo font-[500] ml-12 cursor-pointer">
                <span>PRANAV SINGH</span>
            </div>
            <div className="circle w-10 h-10 text-xl cursor-pointer bg-secondary rounded-full absolute left-0 flex justify-center items-center text-secondary font-bold">Pr</div>
            <div className="navigation text-[15px] hidden md:block">
                <ul className='flex space-x-6 items-center'>
                    {navigationLinks.map((items, index)=>(
                        <li key={index}>
                            <Link href= {items.link} className='navanchor'>{items.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
                    <button className='bg-secondary w-28 h-10 rounded-3xl text-secondary '>Hire Me</button>
        </nav>
    </header>  
  )
}

export default Navbar
