import React, {useState} from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
const Header = ({OpenSideBar}) => {
  //Drop down 1 for main Alerts menu
 

  return (
    
    <header className='header'>
        <div className='menu-icon'>
             <BsJustify className='icon' onClick={OpenSideBar}/>
        </div>
        {/* <div className='header-left'>
            <BsSearch className='icon' />
        </div>
         */}
    </header>
  )
}

export default Header