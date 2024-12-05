import React from 'react'; // Importing React for JSX
import Title from '../components/Title'; // Importing the Title component
import { assets } from '../assets/frontend_assets/assets'; // Importing assets
import NewsletterBox from '../components/NewsletterBox'; // Importing the NewsletterBox component

const About = () => {
  return (
    <div>
      {/* Title Section */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'US'} /> {/* Dynamic Title */}
      </div>

      {/* About Section */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        {/* About Image */}
        <img 
          className='w-full md:max-w-[450px]' 
          src={assets.about_img} // Ensure the asset path is correct
          alt="About Us" 
        />
        
        {/* About Description */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to inspire growth.</p>
          <p>Since our inception, we’ve continued to evolve and deliver exceptional solutions.</p>
          <b className='text-gray-800'>OUR MISSION</b>
          <p>Our mission is to provide the best possible experience for our customers.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} /> {/* Dynamic Subtitle */}
      </div>

      {/* Reasons to Choose Us */}
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        {/* Quality Assurance */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, natus enim! Sed, voluptate quae!
          </p>
        </div>

        {/* Convenience */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, natus enim! Sed, voluptate quae!
          </p>
        </div>

        {/* Exceptional Service */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Service</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, natus enim! Sed, voluptate quae!
          </p>
        </div>
      </div>

      {/* Newsletter Subscription Box */}
      <NewsletterBox />
    </div>
  );
};

export default About; // Exporting the About component
