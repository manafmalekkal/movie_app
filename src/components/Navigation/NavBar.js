import React from "react";
import './NavBar.css';
import {BiCameraMovie} from 'react-icons/bi'

const NavBar = () => {
    return(
      <div className = 'navBar'>
          <div className='logoDiv'>
              <BiCameraMovie size={53} id='logo'/>
          </div>
          <div className='navOptions'>
            <input type='text' className='searchInput' placeholder=' Search Movies...'/>
            <i className="fa-solid fa-magnifying-glass-arrow-right" id='searchIcon'></i>
            <i className="fa-solid fa-user-astronaut" id='avatar' ></i>
          </div>
      </div>
    )
  }
  
  export default NavBar;