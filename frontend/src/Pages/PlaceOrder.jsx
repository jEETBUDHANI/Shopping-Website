import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);

  // Safely access logos with optional chaining
  const stripeLogo = assets?.stripe?.logo || 'default_stripe_logo_path';
  const razorpayLogo = assets?.razorpay_logo || 'default_razorpay_logo_path';
  const codLogo = assets?.cas || 'default_cod_logo_path';

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        {/* Delivery Information */}
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        {/* Other Form Fields */}

        {/* Cart Total Component */}
        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartTotal />
          </div>

          {/* Payment Method Section */}
          <div className="mt-12">
            <Title text1={'Select Payment'} text2={'Method'} />
            <div className="flex gap-3 flex-col lg:flex-row">
              <div
                onClick={() => setMethod('stripe')}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p className="min-w-3.5 h-3.5 border rounded-full"></p>
                <img src={stripeLogo} alt="Stripe Logo" />
              </div>
              <div
                onClick={() => setMethod('razorpay')}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}
                ></p>
                <img src={razorpayLogo} alt="Razorpay Logo" />
              </div>
              <div
                onClick={() => setMethod('cod')}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}
                ></p>
                <p className="text-gray-500 text-sm font-medium mx-4">Cash on Delivery</p>
                <img src={codLogo} alt="COD Option" />
              </div>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="w-full text-end mt-8">
          <button
            onClick={() => navigate('/orders')}
            className="bg-black text-white px-15 py-3 text-sm"
          >
            ORDERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
