import { Instagram, Linkedin, Twitter, X } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <section className="md:max-w-7xl mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-8 place-items-center border-b border-neutral-800 pb-12">
        {/* Column 1 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">PRANAV SINGH</h1>
        </div>
        
        {/* Column 2 */}
        <div>
          <p className="font-semibold text-paraColour mb-4 tracking-widest text-base">NEED SUPPORT?</p>
          <p className="text-sm">business@pranavdev.in</p>
        </div>
        {/* Column 3 */}
        <div>
          <p className="font-semibold mb-4 text-paraColour tracking-widest text-sm">FOLLOW US</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.instagram.com/websitebypranav/" target='_blank'><Instagram className="cursor-pointer hover:text-gray-600" /></a>
            <a href="https://www.linkedin.com/in/pranavsinghs/" target='_blank'><Linkedin className="cursor-pointer hover:text-gray-600" /></a>
            <a href="https://x.com/pranavs24h" target='_blank'><Twitter/></a>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center py-8 cursor-default items-center flex-wrap'>
          <p className='text-paraColour hover:text-white text-base transition-all cursor-pointer'>Designed with ❤️ by Pranav</p>
          <p className='text-paraColour hover:text-white text-base transition-all cursor-pointer'>www.pranavdev.in</p>
      </div>
    </section>
  );
};

export default Footer;
     