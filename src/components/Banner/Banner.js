import React, { useEffect, useState } from "react";
import './Banner.css';
import logo from '../Navigation/movie-app-logo.png';
import axios from 'axios';
import { API_KEY, IMAGE_URL } from "../../constants/Constants";

const Banner = () => {
    const[movieList,setMovieList]=useState([]);
    // useEffect(()=>{
    //     fetch(`https://api.themoviedb.org/3/movie/550?api_key=c841605ff6c63ce4f6da0ef549a64931`,{   method: 'GET',  
       
    //    crossorigin: true,  
    //    mode: 'no-cors',   }).then((res) => res.json())  
    //    .then((data) => {  
    //      console.log("here",data);  
    //    });
    // },[])
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data); 
            setMovieList(response.data.results[0]);
        })
    },[])
    return(
        <div className='banner' style={{backgroundImage: `url(${movieList?IMAGE_URL+movieList.backdrop_path:logo})`} }>
            <div className='content'>
                 <h1 className='title'>{movieList?movieList.title:'title not found'}</h1>
                 <button className='button'>Play</button>
                 <button className='button'>List</button>
                 <p className='description'>{movieList?movieList.overview:'no description found'}</p>
            </div>
            <div className='fade'></div>
        </div>
    )
}
export default Banner;