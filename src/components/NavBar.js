import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
const NavBar = (props) => {
  return (
     <nav className={`navbar mb-5 bg-${props.bgMode}`}>
    <div  className="container">
      <Link className="navbar-brand" to="/">
        <div className="nav-items">
        
        <li><img src="https://logodix.com/logo/1677266.png" alt="TextUtils" style={{width:"40px",height:"34px"}}/></li>
        <li className={`text-${props.textMode} me-5`}>textUtils</li>
        <ul className={`text-${props.textMode}`}>
          {/* <Link className={`text-${props.textMode}`} to="/home" >home</Link> */}
          {/* <Link className={`text-${props.textMode}`} to="/about" >about us</Link>
          <Link className={`text-${props.textMode}`}  to="/contact" > contact</Link> */}
        </ul>
        </div>
      </Link>
      <div className="form-check form-switch">
  <input onClick={props.toggleModeFunction} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`text-${props.textMode} form-check-label` }htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </nav>
  )
}

export default NavBar

