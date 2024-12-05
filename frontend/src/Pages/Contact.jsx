import React from 'react'; // Importing React for JSX functionality
import Title from '../components/Title'; // Importing the Title component
import NewsletterBox from '../components/NewsletterBox'; // Importing the NewsletterBox component

const Contect = () => {
  return (
    <div>
      {/* Title Section */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} /> {/* Dynamic title */}
      </div>
      
      {/* Contact Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        {/* Contact Image */}
        <img 
          className='w-full md:max-w-[480px]' 
          src={assets.contact_img} // Make sure `assets.contact_img` is properly defined and imported
          alt="Contact Us" 
        />
        
        {/* Contact Details */}
        <div className='flex flex-col justify-center items-start gap-6'>
          {/* Company Story */}
          <p className='font-semibold text-xl text-gray-600'>Our Story</p>
          <p className='text-gray-500'>
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          
          {/* Contact Information */}
          <p className='text-gray-500'>
            Tel: (415) 555-0132 <br /> Email: sk0471011@gmail.com
          </p>
          
          {/* Careers Section */}
          <p className='font-semibold text-xl text-gray-600'>Careers At Forever</p>
          <p className='text-gray-500'>
            If you are interested in joining our team, please
          </p>
          
          {/* Explore Jobs Button */}
          <button 
            className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'
          >
            Explore JOBs
          </button>
        </div>
      </div>
      
      {/* Newsletter Subscription Box */}
      <NewsletterBox />
    </div>
  );
};

export default Contect; // Exporting the Contect component
