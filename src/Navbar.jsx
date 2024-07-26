import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  shadow-lg">
    <div className="container">
      <a href="#" className="navbar-brand col-6">
        <img src="/updated_image_hex.png" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav col-6 ">
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_1">
           
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_2">
             
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_3">

          
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_4">
           
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_5">
         
              Contact
            </a>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar
