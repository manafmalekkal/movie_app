import React from "react";
import './NavBar.css';
import logo from './movie-app-logo.png';

const NavBar = () => {
    return(
      <div className = 'navBar'>
          <div className='logoDiv'>
              <img className='logo' src={logo} alt='logo'/>
              
          </div>
          <div className='navOptions'>
            <input type='text' className='searchInput'/>
            <i class="fa-solid fa-magnifying-glass-arrow-right" style={{color:'white',fontSize: 22, cursor:"pointer", marginTop:28, position:'absolute'}}></i>
            <i class="fa-solid fa-user-astronaut" style={{color:'white',float:'right',fontSize: 40,cursor:"pointer",marginTop:20}}></i>
          </div>
      </div>
    )
  }
  
  export default NavBar;