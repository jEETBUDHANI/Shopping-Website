import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItem, updateQuantity ,navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // Helper function to normalize IDs
  const normalizeId = (id) => id?.toString().trim().toLowerCase();

  // Update cart data whenever cartItem changes
  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  // Handle missing products
  if (!products || products.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartData.map((item, index) => {
          console.log(`Looking for product with ID: ${item._id}`);
          const productData = products.find(
            (product) => normalizeId(product.id) === normalizeId(item._id)
          );

          if (!productData) {
            console.error(
              `Product not found for ID: ${item._id}. Available products:`,
              products
            );
            return (
              <div key={index} className="py-4 text-red-500">
                Product not found for ID: {item._id}
              </div>
            );
          }

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center"
            >
              {/* Product Details */}
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt={productData.name || 'Product image'}
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity Input */}
              <input
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (!isNaN(value) && value > 0) {
                    updateQuantity(item._id, item.size, value);
                  }
                }}
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              {/* Delete Icon */}
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt="Delete item"
              />
            </div>
          );
        })}
      </div>
      <div className='flex justify-end my-20'>
        < div className='w-full sm:w-[450p]'></div>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
      </div>
    </div>
  );
};

export default Cart;
