import React, { useEffect,useState } from "react";
import './Home.css'
import axios from '../../axios'
import {ApiKey,imageUrl} from '../../constance/constance'

function Home(){
   const [movie, setMovie] = useState([]);

   useEffect(() => {
       axios.get(`trending/all/week?api_key=${ApiKey}&language=en-US`).then((Response=>{
           setMovie(Response.data.results[0])
        
         
       }))
    

   }, [20]);
    return(
        
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ''})`}}
         className="homeDiv">
            <div className="content" >
               <h1 className="title">{movie.title}</h1>
               <div className="buttonDiv">
                   <button className="button">play</button>
                   <button className="button">My list</button>
               </div>
               <h1 className="discription">{movie.overview}</h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}export default Home;