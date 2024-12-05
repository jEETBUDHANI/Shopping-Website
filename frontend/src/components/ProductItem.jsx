import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; // Import context
import { Link } from 'react-router-dom'; // Import Link for navigation

const ProductItem = ({ id, image, name, price }) => {
  // Access currency from ShopContext
  const { currency } = useContext(ShopContext);

  // Check if image exists and is an array with at least one element
  const imageSrc = (image && image.length > 0) ? image[0] : 'path/to/default/image.jpg'; // Fallback image

  return (
    <Link 
      className="text-gray-700 cursor-pointer" 
      to={`/product/${id}`} // Correct template string syntax
    >
      {/* Product Image */}
      <div className="overflow-hidden">
        <img 
          className="hover:scale-110 transition ease-in-out" 
          src={imageSrc} 
          alt={name} // Use product name as alt for accessibility
        />
      </div>

      {/* Product Name */}
      <p className="pt-3 pb-1 text-sm">{name}</p>

      {/* Product Price */}
      <p className="text-sm font-medium">
        {currency}{price}
      </p>
    </Link>
  );
};

export default ProductItem;
