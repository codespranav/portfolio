"use client"
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname hook
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname(); // Get the current pathname

    // Effect to close the menu when pathname changes
    useEffect(() => {
      setIsMenuOpen(false); // Reset menu state on page change
    }, [pathname]);
  const navigationLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Me', link: '/' },
    { name: 'Services', link: '/' },
    { name: 'Blog', link: '/blog' },
    { name: 'Works', link: '/' },
  ];

  return (
    <header className="py-6 md:py-3 shadow-md px-2 md:px-0 top-0 left-0 right-0 z-50 md:z-0 bg-transparent">
      <nav className="flex justify-between items-center max-w-7xl mx-auto relative">
        <div className="logo font-[500] ml-12 cursor-pointer">
          <Link href="/">PRANAV SINGH</Link>
        </div>
        <div className="circle w-10 h-10 text-xl cursor-pointer bg-secondary rounded-full absolute left-0 flex justify-center items-center text-secondary font-bold">
          <Link href="/">Pr</Link>
        </div>
        <div className={`navigation text-[15px] md:block absolute md:static top-[60px] py-8 bg-white md:bg-transparent w-full md:w-fit left-0 right-0 overflow-hidden text-black z-40 md:z-0 md:text-white ${isMenuOpen? '' : 'hidden'}`}> 
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-5 md:space-y-0 items-center">
            {navigationLinks.map((items, index) => (
              <li key={index} className='text-black md:text-white '>
                <Link href={items.link} className="navanchor">
                  {items.name}
                </Link>
              </li>
            ))}
        <button className="bg-secondary px-6 py-2 rounded-3xl text-white md:hidden">Hire Me</button>
          </ul>
        </div>
        <button className="bg-secondary px-6 py-2 rounded-3xl text-white hidden md:block">Hire Me</button>
        <div className='md:hidden' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}><MenuIcon/></div>
      </nav>
    </header>
  );
};

export default Navbar;
