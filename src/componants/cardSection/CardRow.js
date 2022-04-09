import React, {useState,useEffect} from "react";
import './CardRow.css'
import YouTube from "react-youtube";
import {imageUrl,ApiKey} from '../../constance/constance'
import axios from '../../axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function CardRow(props) {
    const [movies, setmovies] = useState([]);
    const [netflix_original, setNetflix] = useState([]);
    const [imgId, setimgId] = useState("");


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items:props.isSmall ? 6 : 4
          
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };



    useEffect(() => {
        axios.get(props.url).then(response=>{
            // setNetflix(response.data.results.filter(x=>props.t))
            
            setmovies(response.data.results)
        })
    }, []);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {

          autoplay: 1,
        },
      };

      const onClickImg=(id)=>{
       setimgId(id)
       axios.get(`/movie/${id}/videos?api_key=${ApiKey}&language=en-US`).then(response=>{
           console.log(response.data.results[0])
            setimgId(response.data.results[0])
       })
    }
    return(
        <div className="row">
            <h1>{props.title}</h1>
          
        
            <Carousel autoPlay={false} onSwipeMove preventMovementUntilSwipeScrollTolerance={false} responsive={responsive} swipeable={true} draggable={true} showThumbs={false} showIndicators={false}	showStatus={false} showArrows={false}>
                {movies.map(obj=>
           
                  
                      <img onClick={()=>onClickImg(obj.id)} className={props.isSmall ?"smallimg" :"cardImg"}  src={`${imageUrl+obj.backdrop_path}`}  alt="card" />
                     
                )}
          
          </Carousel>
           
        
          
       {  imgId &&    <YouTube opts={opts} videoId={imgId.key}/>} 
     
            
        </div>
    )
    
}export default CardRow;