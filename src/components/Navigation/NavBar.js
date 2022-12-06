import React from "react";
import './NavBar.css';
import logo from './movie-app-logo.png';
import {BiCameraMovie} from 'react-icons/bi'

const NavBar = () => {
    return(
      <div className = 'navBar'>
          <div className='logoDiv'>
              {/* <img className='logo' src={logo} alt='logo'/> */}
              {/* <i className="ssfa-camera-movie" style={{color:'white',fontSize: 40,cursor:"pointer",marginTop:28, padding:2}}></i> */}
              {/* <i class="fa-sharp fa-solid fa-camera-movie"></i> */}
              <BiCameraMovie size={53} />
          </div>
          <div className='navOptions'>
            <input type='text' className='searchInput'/>
            <i className="fa-solid fa-magnifying-glass-arrow-right" style={{color:'white',fontSize: 22, cursor:"pointer", marginTop:28, position:'absolute'}}></i>
            <i className="fa-solid fa-user-astronaut" style={{color:'white',float:'right',fontSize: 40,cursor:"pointer",marginTop:20}}></i>
          </div>
      </div>
    )
  }
  
  export default NavBar;