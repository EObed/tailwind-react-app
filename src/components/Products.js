import React, { useEffect, useState } from "react";
import "../App.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";

const elem = <IoIosArrowDropdownCircle />;
const elem1 = <IoAddCircleOutline />;

const url = "http://localhost:3004/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  // fetching the data
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }

    getProducts();
  }, []);

  //Changing the first card to take inputs

  const [changeCard, setChangeCard] = useState(false);

  const toggleChangeCard = () => {
    setChangeCard(!changeCard);
    setisDisabled(isDisabled);
  };

  //Disabling the first card after click
  const [isDisabled, setisDisabled] = useState(false);

  return (
    <div className="main-container text-center w-full padding p-2">
      <div class="products-header w-full text-center flex justify-between sticky top-0 rounded-lg bg-bluey">
        <div class="header-name text-3xl pl-10">Products</div>
        <div class="products-drop items-center flex">{elem}</div>
      </div>

      {/* Grid for cards */}
      <div class="products-content w-full pt-4 grid grid-cols-4 gap-5 overflow-y-hidden">
        {/* Add Product card */}
        <div class="">
          {changeCard ? (
            <div class="z-40 h-screen w-screen bg-hovery flex justify-center items-center flex-col  abosult top-5 left-10">
                <div class="absolute">
                <div>Name of Product:</div>
                <div>
                  <input placeholder="Enter product name"></input>
                </div>
                <div>Stock number:</div>
                <div>
                  <input placeholder="Enter items' stock number"></input>
                </div>
                <div>Sales number:</div>
                <div>
                  <input placeholder="Enter number of sales"></input>
                </div>
                <div>Ratings</div>
                <div>
                  <input placeholder="Enter rating in decimal"></input>
                </div>
                <div>
                  <button>Add Product</button>
                </div>
                </div>
            </div>
          ) : (
            <div
              class="product-card bg-bluey h-72 flex flex-col items-center justify-center  hover:bg-hovery cursor-pointer"
              onClick={toggleChangeCard}
            >
              <div class="text-2xl">Add New Product</div>
              <div>{elem1}</div>
            </div>
          )}
        </div>
        {/* Cards from json file */}
        {products.map((product) => (
          <div class="product-card bg-bluey h-72 z-0">
            <div>{product.productName}</div>
            <div>Number in Stock: {product.stockNumber}</div>
            <div>Number Sold: {product.soldNumber}</div>
            <div>Rating: {product.review}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
