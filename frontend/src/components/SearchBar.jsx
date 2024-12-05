import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    // Accessing global state from ShopContext
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

    // Getting the current location (route) from react-router-dom
    const location = useLocation();

    // State to manage visibility of the search bar based on route
    const [visible, setVisible] = useState(false);

    // Effect hook to toggle visibility based on the current path
    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true); // Show search bar if on the collection page
        } else {
            setVisible(false); // Hide search bar otherwise
        }
    }, [location]); // Dependency array ensures this runs when the location changes

    return showSearch && visible ? (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                {/* Search input field */}
                <input 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className='flex-1 outline-none bg-inherit text-sm' 
                    type="text" 
                    placeholder='Search' 
                /> 
                <img className='w-4' src={assets.search_icon} alt="search icon"/>  
            </div>
            
            {/* Close button to hide search bar */}
            <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="close icon"/>
        </div>
    ) : null; // Only render if showSearch and visible are true
}

export default SearchBar;
