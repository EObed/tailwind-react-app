import React, { useState, useEffect } from 'react'
import "../App.css";


const alertUrl = "http://localhost:3004/alerts";

const Alerts = () => {

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


  return (
    <div className="main-container text-center w-full padding p-2">
        <div class= "products-header w-full text-center flex justify-between  top-0 rounded-lg">
        <div class="header-name text-3xl pl-10">Alerts</div>
        </div>
        <div class= "">

        </div>
    </div>
  )
}

export default Alerts