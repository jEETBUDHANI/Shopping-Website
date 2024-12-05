import React, { useContext, useState, useEffect } from 'react'; // Correct imports
import { ShopContext } from '../context/ShopContext'; // Access ShopContext for products
import Title from './Title'; // Import Title component
import ProductItem from './ProductItem'; // Import ProductItem component

const LatestCollection = () => {
  // Access products from context
  const { products } = useContext(ShopContext);

  // State to store the latest 10 products
  const [latestProducts, setLatestProducts] = useState([]);

  // Effect to fetch the latest 10 products on component mount
  useEffect(() => {
    setLatestProducts(products.slice(0, 10)); // Get the first 10 products
  }, [products]);
  return (
    <div className="my-10">
      {/* Section title */}
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo sed recusandae quod veritatis cumque quisquam inventore. Placeat provident, odio voluptatem dolores, assumenda cumque odit modi dolorum autem vitae laudantium.
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem 
            key={index} 
            id={item._id} 
            image={item.image} 
            name={item.name} 
            price={item.price} // Fixed typo (ptice to price)
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
