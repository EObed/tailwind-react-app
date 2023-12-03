import React, { PureComponent } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

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
      name: "Clothes",
      
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
     
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
     
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
     
      pv: 4300,
      amt: 2100,
    },
  ];

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
          <h1 className="t-card-value">300</h1>
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
          <h1 className="t-card-value">7</h1>
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
                <Bar dataKey="pv" fill="#8884d8" />
                
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
