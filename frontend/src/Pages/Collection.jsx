import React, { useEffect, useState, useContext } from 'react'; // Import hooks for state, side effects, and context
import { ShopContext } from '../context/ShopContext'; // Context for shared state management
import { assets } from '../assets/frontend_assets/assets'; // Import assets for icons/images
import Title from '../components/Title'; // Title component for headers
import ProductItem from '../components/ProductItem'; // Component to display individual products

const Collection = () => {
  // Destructuring context values
  const { products, search, showSearch } = useContext(ShopContext);

  // Local states for filtering and sorting
  const [showFilter, setShowFilter] = useState(false); // To toggle the filter visibility
  const [filterProduct, setFilterProduct] = useState([]); // Stores filtered products
  const [category, setCategory] = useState([]); // Tracks selected categories
  const [subcategory, setSubCategory] = useState([]); // Tracks selected subcategories
  const [sortType, setSortType] = useState('Relevant'); // Tracks sorting type

  // Toggles category selection and updates the state
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Toggles subcategory selection and updates the state
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Filters products based on search, category, and subcategory
  const applyFilter = () => {
    let productCopy = products.slice(); // Creates a copy of the products array to avoid mutation

    // Filter based on search input
    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter based on selected categories
    if (category.length > 0) {
      productCopy = productCopy.filter((item) => category.includes(item.category));
    }

    // Filter based on selected subcategories
    if (subcategory.length > 0) {
      productCopy = productCopy.filter((item) => subcategory.includes(item.subCategory));
    }

    setFilterProduct(productCopy); // Updates the filtered products state
  };

  // Sorts the filtered products based on the selected sort type
  const sortProduct = () => {
    const fpCopy = filterProduct.slice(); // Creates a copy of the filtered products array
    switch (sortType) {
      case 'low-high': // Sort by price (low to high)
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low': // Sort by price (high to low)
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default: // Default to the original products list
        setFilterProduct(products.slice());
    }
  };

  // Initial setup: Load all products into the filtered products state
  useEffect(() => {
    setFilterProduct(products.slice());
  }, [products]);

  // Re-apply filters whenever category, subcategory, search, or showSearch changes
  useEffect(() => {
    applyFilter();
  }, [category, subcategory, search, showSearch]);

  // Re-sort products whenever the sort type changes
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)} // Toggles filter visibility
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} // Rotates dropdown icon
            src={assets.dropdown_icon}
            alt="dropdown icon"
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Men', 'Women', 'Kids'].map((cat) => (
              <p key={cat} className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  checked={category.includes(cat)} // Checkbox checked state
                />
                {cat}
              </p>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Topwear', 'Bottomwear', 'Winterwear'].map((subcat) => (
              <p key={subcat} className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={subcat}
                  onChange={toggleSubCategory}
                  checked={subcategory.includes(subcat)} // Checkbox checked state
                />
                {subcat.toUpperCase()}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1">
        {/* Header with sorting */}
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            onChange={(e) => setSortType(e.target.value)} // Updates sort type
            className="border-2 border-grey-300 text-sm px-2"
          >
            <option value="Relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Display Filtered Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProduct.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
