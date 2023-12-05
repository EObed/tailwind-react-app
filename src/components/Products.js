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


  //Changing the cards to update mode
  const [updateModes, setUpdateModes] = useState((Array(products.length).fill(false)))
  const toggleUpdateMode = (index) => {
    const newUpdateModes = [...updateModes];
    newUpdateModes[index] = !newUpdateModes[index];
    setUpdateModes(newUpdateModes);
  };

const butClick1 = () =>{
  toggleChangeCard();
  setShowForm(!showForm)
  };


//Showing only the form when the add new product button is clicked
  const [showForm, setShowForm] = useState(false);

  //Changing the first card to take inputs

  const [changeCard, setChangeCard] = useState(false);

  const toggleChangeCard = () => {
    setChangeCard(!changeCard);
    
 

  

  
}


  return (
    <div className="main-container text-center w-full padding p-2">
      <div class="products-header w-full text-center flex justify-between  top-0 rounded-lg ">
        <div class="header-name text-3xl pl-10">Products</div>
        {/* <div class="products-drop items-center flex">{elem}</div> */}
      </div>


      {/*COnditional rendering of grid */}
      
      {/* Grid for cards */}
      { showForm  ? ( <form class="color-bluey text-black" onSubmit={handlePostData}>
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
                </form>) :
                (      <div  class="products-content w-full pt-4 grid grid-cols-4 gap-5 overflow-y-hidden duration-300 ease-in-out opacity-100 group-hover:opacity-50 tiny:grid-cols-1 extra-small:grid-cols-2 small:grid-cols-3 medium:grid-cols-4">
                {/* Add Product card */}
                <div class="">
                  {changeCard ? (
                    <div class="z-[400] h-screen w-screen bg-hovery flex justify-center items-center flex-col   top-5 left-10">
                      <div class="absolute text-bluey">
                       
                      </div>
                    </div>
                  ) : (
                    <div
                      className="product-card bg-[#263043] h-36 flex flex-col items-center justify-center  hover:bg-hovery cursor-pointer"
                      onClick={butClick1 }
                    >
                      <div className="text-2xl">Add New Product</div>
                      <div>{elem1}</div>
                    </div>
                
                  )}
                </div>
                {/* Cards from json file */}
                {products.map((product, index) => (
                  <div key={product.id}  class="product-card bg-[#263043]  z-0 flex flex-col items-center justify-center">
                    {updateModes[index] ? ( <>
                      <div class="product-card bg-[#263043] h-72 flex  flex-col items-center justify-center text-black">
                        <form class="space-y-3">
                          <div><input value={product.productName}></input></div>
                          
                          <div><input value={product.stockNumber}></input></div>
                         
                          <div><input value={product.soldNumber}></input></div>
                          
                          <div><input value={product.review}></input></div>
                          <div class= "flex space-x-2 text-white"> <button>Update</button> <button onClick={()=>toggleUpdateMode(index)}>Cancel</button></div>
                        </form>
                      </div>
                    
                    </>)
                    : (
                      <div class="h-36"><div>{product.productName}</div>
                      <div>Number in Stock: {product.stockNumber}</div>
                      <div>Number Sold: {product.soldNumber}</div>
                      <div>Rating: {product.review}</div>
                      <div class=""><button onClick={()=>toggleUpdateMode(index)}>Update</button></div></div>
                    )}
                  </div>
                ))}
              </div>)
                }

    </div>
  );
};

export default Products;
