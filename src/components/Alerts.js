import React, { useState, useEffect, useContext } from 'react'
import "../App.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { ProductContext } from '../store/MyProductContext';

const elem2 = <IoAddCircleOutline />;
const alertUrl = "http://localhost:3004/alerts";

const Alerts = () => {

    let {setTotalAlertNumber} = useContext(ProductContext) 

    const [alerts, setAlerts] = useState([])
    const [alertFormData, setAlertFormData] = useState({
        label: "",
        message: ""
    })
    //fetching Alerts data
    useEffect(() => {
        async function getAlerts() {
          const response = await fetch(alertUrl);
          const alertData = await response.json();
          console.log(alertData);
          setAlerts(alertData);
        }
    
        getAlerts();
      }, []);
      setTotalAlertNumber(alerts.length.toString())

      const handlePostAlertData = () => {

        //posting data to the JSON server
        fetch(alertUrl, {
          method: "POST",
          body: JSON.stringify(alertFormData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then((response) => response.json());
      };

       //Changing the cards to update mode
  const [updateAlertModes, setUpdateAlertModes] = useState((Array(alerts.length).fill(false)))
  const toggleUpdateAlertMode = (index) => {
    const newUpdateAlertModes = [...updateAlertModes];
    newUpdateAlertModes[index] = !newUpdateAlertModes[index];
    setUpdateAlertModes(newUpdateAlertModes);
  };

  const butClick2 = () =>{
    toggleChangeAlertCard();
    setShowAlertForm(!showAlertForm)
    };

    //Showing only the form when the add new product button is clicked
  const [showAlertForm, setShowAlertForm] = useState(false);

  //Changing the first card to take inputs

  const [changeAlertCard, setChangeAlertCard] = useState(false);

  const toggleChangeAlertCard = () => {
    setChangeAlertCard(!changeAlertCard);
}

  return (
    <div className="main-container text-center w-full  p-2">
        <div class= "alert-header w-full text-center flex justify-between  top-0 rounded-lg">
        <div class="header-name text-3xl pl-10">Alerts</div>
        </div>
        {showAlertForm?(
            <form class="color-bluey text-black" onSubmit={handlePostAlertData}>
            <div>Alert Label:</div>
            <div>
              <input
                id="labelInput"
                value={alertFormData.label}
                onChange={(e) =>
                  setAlertFormData({
                    label: e.target.value,
                  })
                }
                placeholder="Enter alert label"
              ></input>
            </div>
            <div>Alert message:</div>
            <div>
              <input
                id="alertMessageInput"
                value={alertFormData.message}
                onChange={(e) =>
                  setAlertFormData({
                    ...alertFormData,
                    message: e.target.value,
                  })
                }
                placeholder="Enter alert message"
              ></input>
            </div>
            
            <div>
              <button type="submit">Add Alert</button>
            </div>
          </form>
        ): (
            <div  class="products-content w-full pt-4 grid grid-cols-4 gap-5 overflow-y-hidden duration-300 ease-in-out opacity-100 group-hover:opacity-50 tiny:grid-cols-1 extra-small:grid-cols-2 small:grid-cols-3 medium:grid-cols-4">
            {/* Add Product card */}
            <div class="">
              {changeAlertCard ? (
                <div class="z-[400] h-screen w-screen bg-hovery flex justify-center items-center flex-col   top-5 left-10">
                  <div class="absolute text-bluey">
                   
                  </div>
                </div>
              ) : (
                <div
                  className="alert-card bg-[#263043] h-36 flex flex-col items-center justify-center  hover:bg-hovery cursor-pointer"
                  onClick={butClick2 }
                >
                  <div className="text-2xl">Add New Alert</div>
                  <div>{elem2}</div>
                </div>
            
              )}
            </div>
            {/* Cards from json file */}
            {alerts.map((alert, index) => (
              <div key={alert.id}  class="alert-card bg-[#263043]  z-0 flex flex-col items-center justify-center">
                {updateAlertModes[index] ? ( <>
                  <div class="alert-card bg-[#263043] h-72 flex  flex-col items-center justify-center text-black">
                    <form class="space-y-3">
                      <div><input value={alert.label}></input></div>
                      
                      <div><input value={alert.message}></input></div>
                      <div class= "flex space-x-2 text-white"> <button>Update</button> <button onClick={()=>toggleUpdateAlertMode(index)}>Cancel</button></div>
                    </form>
                  </div>
                
                </>)
                : (
                  <div class="h-36"><div>{alert.label}</div>
                  <div> {alert.message}</div>
                  <div class=""><button onClick={()=>toggleUpdateAlertMode(index)}>Update</button></div></div>
                )}
              </div>
            ))}
          </div>

        )}
    </div>
  )

}

export default Alerts