import React from 'react';
// Import assets from the specified path
import { assets } from '../assets/frontend_assets/assets';

const Hero = () => {
  return (
    // Main container: Flexbox layout with vertical stack on mobile and horizontal on larger screens
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Left Section: Text Content */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'> {/* Corrected the typo in className */}
          {/* Bestseller Section */}
          <div className='flex items-center gap-2'>
            {/* Horizontal Line */}
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            {/* Bestseller Text */}
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
          </div>
          {/* Main Heading */}
          <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          {/* Call to Action */}
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-0 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/* Right Section: Image */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="Hero" />
    </div>
  );
};

export default Hero;
