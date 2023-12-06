import React, { PureComponent, useContext } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { ProductContext } from "../store/MyProductContext";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Home = () => {
  const data = [
    {
      name: "Games",
      
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Shoes",
      
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Item 0",
      
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Item 1",
     
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Item 2",
     
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Item 3",
      
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Item 4",
     
      pv: 4300,
      amt: 2100,
    },
  ];

  const data1 = [
    {
      name: "8am",
      
      pv: 2100,
      amt: 2400,
    },
    {
      name: "9am",
      
      pv: 1698,
      amt: 2210,
    },
    {
      name: "10am",
      
      pv: 9000,
      amt: 2290,
    },
    {
      name: "11am",
     
      pv: 3508,
      amt: 2000,
    },
    {
      name: "12pm",
     
      pv: 4800,
      amt: 2181,
    },
    {
      name: "1pm",
      
      pv: 3800,
      amt: 2500,
    },
    {
      name: "2pm",
     
      pv: 4300,
      amt: 2100,
    },
  ];

  const {totalProductNumber} = useContext(ProductContext)
  const {totalAlertNumber} = useContext(ProductContext)
   

//   const alerts= data.alerts
//   var alertValue = data.length


  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Dashboard</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="t-card-inner">
            <h3>Products</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1 className="t-card-value">{totalProductNumber}</h1>
        </div>
        <div className="card">
          <div className="t-card-inner">
            <h3>Categories</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1 className="t-card-value">10</h1>
        </div>
        <div className="card">
          <div className="t-card-inner">
            <h3>Customers</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1 className="t-card-value">600</h1>
        </div>
        <div className="card">
          <div className="t-card-inner">
            <h3>Alerts</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1 className="t-card-value">{totalAlertNumber}</h1>
        </div>
      </div>

      <div className="charts1">
      <div className="charts">
      <div className='chart-title'>Best Selling Items</div>
        {/* Code for the bar graph */}
       
        {/* <div className="top-products-chart"> */}
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          
        </BarChart>
      </ResponsiveContainer>
        {/* </div> */}
        </div> 

        <div className="charts">
        <div className='chart-title'>Peak Hours</div>
        {/*Code for the line chart */}
        
        {/* <div className="hours-chart"> */}
       
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data1}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                
                </LineChart>
            </ResponsiveContainer>

        </div>
        {/* </div> */}
      </div>
    </main>
  );
};

export default Home;
