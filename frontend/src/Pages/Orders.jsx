import React, { useContext } from 'react';
import Title from '../components/Title'; // Title component for dynamic headers
import { products } from '../assets/frontend_assets/assets'; // Importing product data
import { ShopContext } from '../context/ShopContext'; // Context for currency and other shop details

const Orders = () => {
  const { currency } = useContext(ShopContext); // Extracting currency from context

  return (
    <div className='border-t pt-16'>
      {/* Header Section */}
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} /> {/* Dynamic title */}
      </div>

      {/* Orders List */}
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
          >
            {/* Product Details */}
            <div className='flex items-start gap-6 text-sm'>
              <img
                className='w-16 sm:w-20'
                src={item.image[0]} // Product image
                alt={item.name} // Alt text for accessibility
              />
              <p className='sm:text-base font-medium'>{item.name}</p> {/* Product name */}
            </div>

            {/* Order Info */}
            <div className='flex items-center gap-3 mt-2 text-base text-gray'>
              <p className='text-lg'>
                {currency}
                {item.price} {/* Displaying product price with currency */}
              </p>
              <p>Quantity: 1</p> {/* Quantity (static for now) */}
              <p>Size: M</p> {/* Size (static for now) */}
              <div>
                <p className='mt-2'>
                  Date: <span className='text-gray-400'>25, Jul, 2024</span> {/* Static date */}
                </p>
              </div>
            </div>

            {/* Order Status and Action */}
            <div className='md:w-1/2 flex justify-between'>
              {/* Status */}
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p> {/* Status indicator */}
                <p className='text-sm md:text-base'>Ready To Ship</p> {/* Status text */}
              </div>

              {/* Track Order Button */}
              <button className='border px-4 py-2 text-sm font-medium rounded-sm'>
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
