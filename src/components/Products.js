import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { ProductContext } from "../store/MyProductContext";
import { dataBase1 } from "../firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";

const elem = <IoIosArrowDropdownCircle />;
const elem1 = <IoAddCircleOutline />;

const url = "http://localhost:3004/products";

const Products = () => {
  //Showing only the form when the add new product button is clicked
  const [showForm, setShowForm] = useState(false);

  let { setTotalProductNumber } = useContext(ProductContext);

  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const [products, setProducts] = useState([]);
  const productsCollectionref = collection(dataBase1, "products");
  const [formData, setFormData] = useState({
    prodName: "",
    stockNum: "",
    soldNum: "",
    review: "",
  });

  const postData = {
    prodName: formData.prodName,
    stockNum: parseInt(formData.stockNum),
    soldNum: parseInt(formData.soldNum),
    review: formData.review,
  };

  // console.log(postData)
  // fetching the data
  useEffect(() => {
    async function getProducts() {
      const response = await getDocs(productsCollectionref);
      // const data = await response.json();
      // console.log(response);
      // setProducts(data);
      setProducts(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTotalProductNumber(response.docs.length.toString());

      // console.log(products);
    }

    getProducts();
  }, [showForm]);

  setTotalProductNumber(products.length.toString());
  // products.length===0 ?(console.error('error')):(console.log(products.length))
  const handlePostData = async (e) => {
    e.preventDefault();

    //posting data to the JSON server
    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // }).then((response) => response.json());
    const data = await addDoc(collection(dataBase1, "products"), {
      prodName: postData.prodName,
      stockNum: postData.stockNum,
      review: postData.review,
      soldNum: postData.soldNum,
    });
    console.log("data is" + data.id);

    setFormData({
      prodName: "",
      stockNum: "",
      soldNum: "",
      review: "",
    });

    setShowForm(!showForm);
  };

  //Changing the cards to update mode
  const [updateModes, setUpdateModes] = useState(
    Array(products.length).fill(false)
  );
  const toggleUpdateMode = (index) => {
    const newUpdateModes = [...updateModes];
    newUpdateModes[index] = !newUpdateModes[index];

      // Set the selectedProductIndex when update button is clicked
  if (newUpdateModes[index]) {
    setSelectedProductIndex(index);
  } else {
    // Clear the selectedProductIndex when cancel button is clicked
    setSelectedProductIndex(null);
  }

    setUpdateModes(newUpdateModes);

  };

  const butClick1 = () => {
    toggleChangeCard();
    setShowForm(!showForm);
  };

  //Changing the first card to take inputs

  const [changeCard, setChangeCard] = useState(false);

  const toggleChangeCard = () => {
    setChangeCard(!changeCard);
  };

  //Update functionality

  useEffect(() => {
    if (selectedProductIndex !== null) {
      // Set formData based on the selected product
      const selectedProduct = products[selectedProductIndex];
      setFormData({
        prodName: selectedProduct.prodName,
        stockNum: selectedProduct.stockNum.toString(),
        soldNum: selectedProduct.soldNum.toString(),
        review: selectedProduct.review,
      });
    } else {
      // Reset formData when no product is selected
      setFormData({
        prodName: "",
        stockNum: "",
        soldNum: "",
        review: "",
      });
    }
  }, [selectedProductIndex]);

  const handleUpdateData = async (index) => {
    try {
      setIsUpdating(true);
  
      // Get the ID of the selected product
      const productId = products[index].id;
  
      // Perform the update operation in Firestore
      await updateDoc(doc(dataBase1, "products", productId), {
        prodName: formData.prodName,
        stockNum: parseInt(formData.stockNum),
        soldNum: parseInt(formData.soldNum),
        review: formData.review,
      });
  
      // Clear the form data and toggle update mode
      setFormData({
        prodName: "",
        stockNum: "",
        soldNum: "",
        review: "",
      });
      toggleUpdateMode(index);
  
      // Refetch the updated data from Firestore
      const updatedResponse = await getDocs(productsCollectionref);
      setProducts(updatedResponse.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Error updating data:", error);
    } finally {
      setIsUpdating(false);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <div className="main-container text-center w-full padding p-2">
      <div className="products-header w-full text-center flex justify-between  top-0 rounded-lg ">
        <div className="header-name text-3xl pl-10">Products</div>
        {/* <div className="products-drop items-center flex">{elem}</div> */}
      </div>

      {/*COnditional rendering of grid */}

      {/* Grid for cards */}
      {showForm ? (
        <form className="color-bluey text-black" onSubmit={handlePostData}>
          <div>Name of Product:</div>
          <div>
            <input
              id="nameInput"
              value={formData.prodName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  prodName: e.target.value,
                })
              }
              placeholder="Enter product name"
            ></input>
          </div>
          <div>Stock number:</div>
          <div>
            <input
              type="number"
              id="stockNumInput"
              value={formData.stockNum}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  stockNum: e.target.value,
                })
              }
              placeholder="Enter items' stock number"
            ></input>
          </div>
          <div>Sales number:</div>
          <div>
            <input
              type="number"
              id="soldNumInput"
              value={formData.soldNum}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  soldNum: e.target.value,
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
      ) : (
        <div className="products-content w-full pt-4 grid grid-cols-4 gap-5 overflow-y-hidden duration-300 ease-in-out opacity-100 group-hover:opacity-50 tiny:grid-cols-1 extra-small:grid-cols-2 small:grid-cols-3 medium:grid-cols-4">
          {/* Add Product card */}
          <div className="">
            {changeCard ? (
              <div className="z-[400] h-screen w-screen bg-hovery flex justify-center items-center flex-col   top-5 left-10">
                <div className="absolute text-bluey"></div>
              </div>
            ) : (
              <div
                className="product-card bg-[#263043] h-36 flex flex-col items-center justify-center  hover:bg-hovery cursor-pointer"
                onClick={butClick1}
              >
                <div className="text-2xl">Add New Product</div>
                <div>{elem1}</div>
              </div>
            )}
          </div>
          {/* Cards from json file */}
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card bg-[#263043]  z-0 flex flex-col items-center justify-center"
            >
              {updateModes[index] ? (
                
                /*This block of code is for when one item is being updated */ <> 
                  <div className="product-card bg-[#263043] h-72 flex  flex-col items-center justify-center text-black">
                    <form className="space-y-3">
                      <div>
                      <input
                         name="prodName"
                         onChange={handleChange}
                         value={formData.prodName}
                      />
                      </div>

                      <div>
                        <input
                        name="stockNum"
                        onChange={handleChange}
                        value={formData.stockNum}
                        />
                      </div>

                      <div>
                        <input
                           name="soldNum"
                           onChange={handleChange}
                           value={formData.soldNum}
                        />
                      </div>

                      <div>
                        <input
                          name="review"
                          onChange={handleChange}
                          value={formData.review}
                        />
                      </div>
                      <div className="flex space-x-2 text-white">
                        {" "}
                        <button type="submit" onClick={() => handleUpdateData(index)} disabled={isUpdating}>Update</button>{" "}
                        <button onClick={() => toggleUpdateMode(index)}>
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              ) : (
                //this block of code is for when the all the items are being displayed
                <div className="h-36">
                  <div className="font-bold">{product.prodName}</div>
                  <div>Number in Stock: {product.stockNum}</div>
                  <div>Number Sold: {product.soldNum}</div>
                  <div>Rating: {product.review}</div>
                  <div className="flex w-auto justify-between">
                    <button  onClick={() => toggleUpdateMode(index)}>
                      Update
                    </button>
                    <button >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
