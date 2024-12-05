import React, { useContext, useState } from 'react' // Import React and useState hook
import { assets } from '../assets/frontend_assets/assets' // Import assets from your assets directory
import { Link, NavLink } from 'react-router-dom' // Import Link and NavLink from react-router-dom
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [Visible, setVisible] = useState(false); // State to toggle the visibility of the mobile menu
    const{setShowSearch, getcartCount}=useContext(ShopContext);
    
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      {/* Logo Section */}
       <Link to='/' ><img src={assets.logo} className='w-36' alt=""/> </Link> {/* Logo that links to the home page */}
        
        {/* Desktop Menu */}
        <ul className='hidden sm:flex gap-5 text-sm text-grey-700'>
            {/* Home Link */}
            <NavLink to='/' className='flex flex-col items-center gap-1 '>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            {/* Collection Link */}
            <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            {/* About Link */}
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            {/* Contact Link */}
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        
        {/* Icon Buttons */}
        <div className='flex items-center gap-6'>
            {/* Search Icon */}
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt=""/>
            
            {/* Profile Dropdown */}
            <div className='group relative'>
                <Link to ='/login'><img className='w-5 cursor-pointer' src={assets.profile_icon} alt=""/></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        {/* Profile Dropdown Options */}
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Order</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            
            {/* Cart Icon with Notification */}
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5'  alt=""/>
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
  {getcartCount()} {/* Ensure this properly renders the count */}
</p>
                </Link>
            
            {/* Mobile Menu Icon */}
            <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'/>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${Visible ? 'w-full' : 'w-0'}`}>
    {/* This is the container for the mobile menu. 
        - Uses `absolute` positioning to overlay the menu on the screen.
        - `transition-all` ensures smooth opening/closing animation.
        - The width depends on the `Visible` state: `w-full` when visible, `w-0` when hidden.
    */}

    {/* Mobile Menu Content */}
    <div className='flex flex-col text-grey-600'>
        {/* Back Button */}
        <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            {/* Close the mobile menu when clicked */}
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt=""/> {/* Rotated dropdown icon for 'Back' button */}
            <p>Back</p> {/* Text for the back button */}
        </div>

        {/* Navigation Links for Mobile Menu */}
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to ='/'>HOME</NavLink> {/* Link to Home */}
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/collection'>COLLECTION</NavLink> {/* Link to Collection */}
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/about'>ABOUT</NavLink> {/* Link to About */}
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/contact'>CONTACT</NavLink> {/* Link to Contact */}
    </div>
</div>
</div>

  );
}

export default Navbar;
