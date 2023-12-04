import React, { useEffect, useState } from "react";
import "../App.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";

const elem = <IoIosArrowDropdownCircle />;
const elem1 = <IoAddCircleOutline />;

const url = "http://localhost:3004/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    productName: "",
    stockNumber: "",
    soldNumber: "",
    review: "",
  });
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

  const handlePostData = () => {

    //posting data to the JSON server
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };

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
      <div class="products-header w-full text-center flex justify-between  top-0 rounded-lg ">
        <div class="header-name text-3xl pl-10">Products</div>
        {/* <div class="products-drop items-center flex">{elem}</div> */}
      </div>

      {/* Grid for cards */}
      <div  class="products-content w-full pt-4 grid grid-cols-4 gap-5 overflow-y-hidden duration-300 ease-in-out opacity-100 group-hover:opacity-50 tiny:grid-cols-1 extra-small:grid-cols-2 small:grid-cols-3 medium:grid-cols-4">
        {/* Add Product card */}
        <div class="">
          {changeCard ? (
            <div class="z-[400] h-screen w-screen bg-hovery flex justify-center items-center flex-col   top-5 left-10">
              <div class="absolute text-bluey">
                <form class="color-bluey" onSubmit={handlePostData}>
                  <div>Name of Product:</div>
                  <div>
                    <input
                      id="nameInput"
                      value={formData.productName}
                      onChange={(e) =>
                        setFormData({
                          productName: e.target.value,
                        })
                      }
                      placeholder="Enter product name"
                    ></input>
                  </div>
                  <div>Stock number:</div>
                  <div>
                    <input
                      id="stockNumInput"
                      value={formData.stockNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          stockNumber: e.target.value,
                        })
                      }
                      placeholder="Enter items' stock number"
                    ></input>
                  </div>
                  <div>Sales number:</div>
                  <div>
                    <input
                      id="soldNumInput"
                      value={formData.soldNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          soldNumber: e.target.value,
                        })
                      }
                      placeholder="Enter number of sales"
                    ></input>
                  </div>
                  <div>Ratings</div>
                  <div>
                    <input
                      id="reviewInput"
                      value={formData.review}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          review: e.target.value,
                        })
                      }
                      placeholder="Enter rating in decimal"
                    />
                  </div>
                  <div>
                    <button type="submit">Add Product</button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div
              class="product-card bg-bluey h-36 flex flex-col items-center justify-center  hover:bg-hovery cursor-pointer"
              onClick={toggleChangeCard}
            >
              <div class="text-2xl">Add New Product</div>
              <div>{elem1}</div>
            </div>
          )}
        </div>
        {/* Cards from json file */}
        {products.map((product) => (
          <div  class="product-card bg-bluey h-36 z-0 flex flex-col items-center justify-center">
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
