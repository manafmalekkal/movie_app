import React, { useEffect, useState } from "react";
import './Poster.css';
import posterImg from '../Navigation/movie-app-logo.png';
import axios from '../../api/Link';
import { API_KEY, IMAGE_URL } from "../../constants/Constants";

const Poster=()=>{
    const[posters,setPosters]=useState([]);
    useEffect(()=>{
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
            console.log(response.data);
            setPosters(response.data.results);
        })
    },[])
    return(
        <div className='row'>
            <h3 className='category'>Category</h3>
            <div className='posterDiv'>
                {
                    posters.map((obj)=>{
                      return  <img className='posterImage' src={`${IMAGE_URL+obj.backdrop_path}`} alt={posterImg}/>
                    })
                }
            {/* <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/>
            <img className='posterImage' src={posterImg} alt='poster'/> */}
            </div>
        </div>
    )
}
export default Poster;