import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create the context
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'Rs'; // Define currency for the shop
  const delivery_fee = 10; // Define a fixed delivery fee

  const [search, setSearch] = useState(''); // State for search input
  const [showSearch, setShowSearch] = useState(false); // State to toggle search visibility
  const [cartItem, setCartItem] = useState({}); // State to track items in the cart
  const  navigate= useNavigate();
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Please select Product Size'); // Show error if no size is selected
      return; // Exit function if size is not provided
    }

    let cartData = structuredClone(cartItem); // Create a deep copy of the current cart data
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // Increment quantity if item and size already exist
      } else {
        cartData[itemId][size] = 1; // Add size if it doesn't exist
      }
    } else {
      cartData[itemId] = {}; // Create a new entry for the item
      cartData[itemId][size] = 1; // Add size with quantity 1
    }
    setCartItem(cartData); // Update the cart state with new data
  };

  useEffect(() => {
    // Placeholder for potential future effects when cartItem changes
  }, [cartItem]);

  const getcartCount = () => {
    let totalCount = 0; // Initialize total count
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item]; // Sum up quantities of all items
          }
        } catch (error) {
          // Catch any errors during iteration
        }
      }
    }
    return totalCount; // Return total item count in the cart
  };
  const updateQuantity =async (itemId,size,quantity) =>{
   let cardData=structuredClone(cartItem);

   cardData[itemId][size]=quantity;
   setCartItem(cardData);
  }

  const getCartAmount = ()=>{
    let totalamount=0;
    for(const items in cartItem){
      let iteminfo =products.find((proudct)=>products.id===items);
      for(const item in cartItem[items]){
        try {
          if(cartItem[items][item] > 0){
            totalamount +=iteminfo.price * cartItem[items][item];
          }
        } catch (error){

        }
      }
    }
    return totalamount;
  }
  // Define the value to be provided to consumers
  const value = {
    products, // Product data from assets
    currency, // Currency for price display
    delivery_fee, // Delivery fee constant
    search, setSearch, // Search-related states and handlers
    showSearch, setShowSearch, // Search visibility toggle state
    cartItem, addToCart, // Cart items and function to add to cart
    getcartCount,updateQuantity,getCartAmount,navigate // Function to get total cart count
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children} {/* Render child components wrapped in the provider */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
