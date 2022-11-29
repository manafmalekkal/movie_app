import React, { useEffect } from "react";
import './Banner.css';
import logo from '../Navigation/movie-app-logo.png';
import axios from 'axios';
import { API_KEY } from "../../constants/Constants";

const Banner = () => {
    // useEffect(()=>{
    //     fetch(`https://api.themoviedb.org/3/movie/550?api_key=c841605ff6c63ce4f6da0ef549a64931`,{   method: 'GET',  
       
    //    crossorigin: true,  
    //    mode: 'no-cors',   }).then((res) => res.json())  
    //    .then((data) => {  
    //      console.log("here",data);  
    //    });
    // },[])
    useEffect(()=>{
        axios.get('http://api.themoviedb.org/3/movie/550?api_key=c841605ff6c63ce4f6da0ef549a64931').then((response)=>{
            console.log(response.data);
        })
    },[])
    return(
        <div className='banner' style={{backgroundImage: `url(${logo})`} }>
            {/* <video className='backgroundVideo' >
                <source src='https://youtu.be/Ruyl8_PT_y8' type='video/mp4'/>    
            </video> */}
            {/* <iframe className='backgroundVideo' src='https://youtu.be/Ruyl8_PT_y8' title='bg-video'/> */}
            {/* <div className='backgroundVideo' style={{backgroundImage: `url(${logo})`} }>
                <img className='bgImage' src={logo} alt='logo'/>
            </div> */}
            <div className='content'>
                 <h1 className='title'>Movie Name</h1>
                 <button className='button'>Play</button>
                 <button className='button'>List</button>
                 <p className='description'>uuehuehflkejfhiuehrkwkjkjk    uiuijjgytuuiuyijkjkliuikljiojklkjiu   ijljhutiutyutiynrlkwhrouhroiewnlknfoiejfkewnlkfnewoufhwifewlnf;   kefoiewhfewnf;newurhoifjrfewnhkjiienejhijeknrjewhrijr  jhrornrjeuhriejrruhrrhhrrenjrh</p>
            </div>
            <div className='fade'></div>
        </div>
    )
}
export default Banner;