import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom';


const Topbar = () => {
  const user = false;
  return (
    <>
    <div className='top'>
    <div className='topleft'>
            <i className="topIcons fa-brands fa-facebook-f"></i>
          <i className="topIcons fa-brands fa-instagram"></i>
         <i className="topIcons fa-brands fa-twitter"></i>
          <i className="topIcons fa-brands fa-linkedin-in"></i>
    </div>
    
    <div className='topcenter'>
        <ul className="toplist">
        <li className='toplistitem'><Link to='/'>HOME</Link></li>
        <li className='toplistitem'><Link to='/settings'>ABOUT</Link></li>
        <li className='toplistitem'><Link to='/Single'>CONTACT</Link></li>
        <li className='toplistitem'><Link to='/write'>WRITE</Link></li>
        <li className='toplistitem'>{user &&"lOGOUT"}</li>
        </ul>
        </div>
    <div className='topright'>
      {
        user ?
        (
          <img className='topimg' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

        ):(
          <>
          <Link className='link' to='/Login'>Login </Link>
          <Link className='link' to='/Register'>Register </Link>
          </>
        )
      }
      
        <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
    </>
  )
}

export default Topbar