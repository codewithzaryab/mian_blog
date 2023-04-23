import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
    <div className='sidebar'>
        <div className="sidebaritem">
            <span className='sidebartitle'>ABOUT ME</span>
            <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">CATEGORIES</span>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">Life</li>
                <li className="sidebarlistitem">Music</li>
                <li className="sidebarlistitem">Style</li>
                <li className="sidebarlistitem">Sport</li>
                <li className="sidebarlistitem">Tech</li>
                <li className="sidebarlistitem">Cinema</li>
            </ul>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitle">Follow Us</span>
        <div className="sidebarsocial">
        <i className="sidebarIcons fa-brands fa-facebook-f"></i>
          <i className="sidebarIcons fa-brands fa-instagram"></i>
         <i className="sidebarIcons fa-brands fa-twitter"></i>
          <i className="sidebarIcons fa-brands fa-linkedin-in"></i>
        </div>

        </div>
    </div>
    </>
  )
}

export default Sidebar