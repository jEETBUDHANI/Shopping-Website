import React, { useContext, useState, useEffect } from 'react'; // Correct imports
import { ShopContext } from '../context/ShopContext'; // Access ShopContext for products
import Title from './Title'; // Import Title component
import ProductItem from './ProductItem'; // Import ProductItem component

const BestSeller = () => {
  // Access products from context
  const { products } = useContext(ShopContext);

  // State to store the bestseller products
  const [bestSeller, setBestSeller] = useState([]);

  // Effect to fetch bestseller products on component mount or when products change
  useEffect(() => {
    console.log('Products from context:', products); // Debugging
    if (products) {
      const bestProducts = products.filter((item) => (item.bestSeller));
      setBestSeller(bestProducts.slice(0, 5)); // Get the first 5 bestseller products
    }
  }, [products]);

  if (bestSeller.length === 0) {
    return (
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1="Best" text2="SELLER" />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            No bestseller products found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-10">
      {/* Section title */}
      <div className="text-center py-8 text-3xl">
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo sed recusandae quod veritatis cumque quisquam inventore. Placeat provident, odio voluptatem dolores, assumenda cumque odit modi dolorum autem vitae laudantium.
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
