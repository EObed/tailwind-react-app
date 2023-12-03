import { useState } from "react";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link, Outlet } from "react-router-dom";

function Layout({ children,isLightMode, toggleLightMode }) {
  const [openSideBarToggle, setOpenSideBarToggle] = useState(false);

  const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle);
  };


  

  return (
    <>
      <Header OpenSideBar={OpenSideBar} />
      <Sidebar
        openSideBarToggle={openSideBarToggle}
        OpenSideBar={OpenSideBar}
        isLightMode={isLightMode}
        toggleLightMode={toggleLightMode}
      />
      {children}
    </>
  );
}

export default Layout;
