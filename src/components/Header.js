import React, {useState} from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
const Header = ({OpenSideBar}) => {

  const [isDropDownOpen, setDropDownOpen] = useState(false)

  const toggleDropDown = () => {
    setDropDownOpen(!isDropDownOpen)
  }

  const closeDropDown = () => {
    setDropDownOpen(false)
  }


  return (
    
    <header className='header'>
        <div className='menu-icon'>
             <BsJustify className='icon' onClick={OpenSideBar}/>
        </div>
        <div className='header-left'>
            <BsSearch className='icon' />
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon' id='header-icon' onClick={toggleDropDown}/>
            {/*Drop down functionality */
            isDropDownOpen && (
              <div class="absolute bg-hovery shadow-sm w-auto h-auto right-9 mt-7">
                <div>View Alerts</div>
                <div>Create Alert</div>
              </div>
            )
            
            
            }
            {/* <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon' /> */}
        </div>
    </header>
  )
}

export default Header