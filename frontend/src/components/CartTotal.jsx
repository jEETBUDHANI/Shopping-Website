import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; // Importing the context to access shared data
import Title from './Title'; // Importing a reusable title component

const CartTotal = () => {
  // Destructuring necessary properties from the ShopContext
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      {/* Displaying the title of the section */}
      <div className="text-2xl mb-4">
        <Title text1={'Cart'} text2={'TOTALS'} /> {/* Using the Title component */}
      </div>
      {/* Main container for cart totals */}
      <div className="flex flex-col gap-4 mt-2 text-sm">
        {/* Subtotal section */}
        <div className="flex justify-between">
          <p>SubTotal</p>
          <p>{currency} {getCartAmount()}.00</p> 
          {/* Displaying the subtotal amount in the specified currency */}
        </div>
        <hr /> {/* Divider */}
        
        {/* Shipping fee section */}
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}</p> 
          {/* Displaying the shipping fee */}
        </div>
        <hr /> {/* Divider */}
        
        {/* Total calculation */}
        <div className="flex justify-between">
          <b>Total</b>
          <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>
          {/* Displaying the total amount; if subtotal is 0, total is also 0 */}
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
