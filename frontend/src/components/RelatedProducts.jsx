import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Filter products by category and subCategory
      const filteredProducts = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );
      // Set the first 5 related products
      setRelated(filteredProducts.slice(0, 5));
    }
  }, [category, subCategory, products]); // Depend on category, subCategory, and products

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item, index) => (
          <ProductItem key={index} id={item.id} name={item.name} price={item.price} image={item.image}/>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
