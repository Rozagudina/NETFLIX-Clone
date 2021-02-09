import React, { useState,useEffect } from 'react'
import instance from './axios'
import './Row.css'
import axios from'./axios'
import request from './requests'
const base_url="https://image.tmdb.org/t/p/original/"
const Row = ({title,fetchUrl}) => {
    const [movies,setMovies]= useState([]);
    useEffect(() =>{
        async function fetchData() {
        const request= await axios.get(fetchUrl)
         console.log(movies)
        setMovies(request.data.results);
        return request;
    }
    fetchData();
},[fetchUrl])
 
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
            {movies.map((movie)=>(
               <img className ="row__poster" src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
            ))}
             </div>
            {/* {instance.fetcherUrl} */}
        </div>
    )
}

export default Row
