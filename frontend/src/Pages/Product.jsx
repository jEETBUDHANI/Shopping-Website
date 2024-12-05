import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To retrieve productId from URL parameters
import { ShopContext } from '../context/ShopContext'; // Access ShopContext for global state
import { assets } from '../assets/frontend_assets/assets'; // Import assets
import RelatedProducts from '../components/RelatedProducts'; // Related products component

const Product = () => {
  const { productId } = useParams(); // Retrieve the productId from the URL
  const { products, addToCart } = useContext(ShopContext); // Access products and addToCart from the context
  const [productData, setProductData] = useState(null); // State for product data
  const [image, setImage] = useState(''); // State for selected product image
  const [selectedSize, setSelectedSize] = useState(null); // State for selected size
  const currency = '$'; // Set currency symbol

  useEffect(() => {
    if (products) {
      const product = products.find((item) => item._id === productId); // Find product matching the ID
      if (product) {
        setProductData(product); // Set product data in state
        setImage(product.image?.[0] || ''); // Set default product image
      } else {
        console.log(`Product with ID ${productId} not found.`); // Log if no matching product
      }
    }
  }, [productId, products]); // Re-run effect when productId or products change

  if (!productData) {
    return <div className="text-center">Product not found</div>; // Display message if product not found
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images Section */}
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18.7%] w-full">
          {productData.image?.map((img, index) => (
            <img
              key={index} // Unique key for each image
              src={img} // Image source
              alt={`Product ${index + 1}`} // Alt text for image
              className={`cursor-pointer w-[24%] sm:w-full sm:mb-3 flex-shrink-0 ${
                image === img ? 'border-2 border-blue-500' : '' // Highlight selected image
              }`}
              onClick={() => setImage(img)} // Set image as main display on click
            />
          ))}
        </div>
        {/* Main Product Image */}
        <div className="w-full sm:w-[80%]">
          <img className="w-full h-auto" src={image} alt="Main product" /> {/* Main product image */}
        </div>
        {/* Product Details Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{productData.name}</h1> {/* Product name */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(3)].map((_, i) => ( // Display filled stars
              <img key={i} src={assets.star_icon} className="w-3.5" alt="Star" />
            ))}
            <img src={assets.star_dull_icon} className="w-3.5" alt="Dull Star" /> {/* Display dull star */}
            <p className="pl-2">(122)</p> {/* Number of reviews */}
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price} {/* Display product price */}
          </p>
          <p className="text-gray-600 text-sm mt-4">{productData.description}</p> {/* Product description */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes?.map((size, index) => ( // Render size options
                <button
                  key={index} // Unique key for each size
                  className={`border py-2 px-4 bg-gray-100 ${
                    selectedSize === size ? 'border-orange-500' : '' // Highlight selected size
                  }`}
                  onClick={() => setSelectedSize(size)} // Set selected size
                >
                  {size} {/* Display size */}
                </button>
              ))}
            </div>
          </div>
          {/* Add to Cart Button */}
          <button 
            onClick={() => {
              if (!selectedSize) {
                alert('Please select a size before adding to cart.');
                return;
              }
              addToCart(productData._id, selectedSize); // Add product to cart
            }}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
        <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
          <p>100% original Product</p> {/* Product quality assurance */}
          <p>Cash on delivery is available on this product.</p> {/* Cash on delivery info */}
          <p>Easy return is available within 7 days</p> {/* Return policy */}
        </div>
      </div>
      {/* Description & Reviews Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b> {/* Description tab */}
          <p className="border px-5 py-3 text-sm">Reviews (122)</p> {/* Reviews tab */}
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> {/* Description content */}
          <p>
            Ex, reiciendis ut iure saepe corrupti fuga dicta incidunt officiis ullam! 
            Impedit, necessitatibus. Delectus vero, aperiam molestiae laudantium quod fugiat cumque quidem!
          </p>
        </div>
      </div>
      {/* Display Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
