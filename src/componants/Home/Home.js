import React, { useEffect,useState } from "react";
import './Home.css'
import axios from '../../axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {ApiKey,imageUrl} from '../../constance/constance'

function Home(){
   const [movie, setMovie] = useState([]);

   

   var index=0
   useEffect(() => {
       axios.get(`trending/all/week?api_key=${ApiKey}&language=en-US`).then((Response=>{

        setMovie(Response.data.results)
        
         
       }))
    

   }, []);

     
  

    return(
         <Carousel     interval={2000} autoPlay onSwipeMove  infiniteLoop={true}  preventMovementUntilSwipeScrollTolerance={false} showIndicators={false}	showStatus={false} showArrows={false} >
       {
        movie.filter(mov=>mov.vote_average>8.1).map((image,key)=>{ console.log(image)
            return(

               
    
           
       
        <div style={{backgroundImage:`url(${image ? imageUrl+image.backdrop_path: ''})`}}
         className="homeDiv">
            <div className="content" > 
               <h1 className="title">{image.title? image.title: image.name}</h1>
               <div className="buttonDiv">
                   <button className="button">play</button>
                   <button className="button">My list</button>
               </div>
               <h1 className="discription">{image.overview.slice(0,500)}</h1>
            </div>
            <div className="fade"></div>
        </div>       )
   
        })
   }</Carousel>  
    )
}export default Home;