import React, {useState,useEffect} from "react";
import './CardRow.css'
import {imageUrl} from '../../constance/constance'
import axios from '../../axios'

function CardRow(props) {
    const [movies, setmovies] = useState([]);
    useEffect(() => {
        axios.get(props.url).then(response=>{
            setmovies(response.data.results)
        })
    }, []);
    return(
        <div className="row">
            <h1>{props.title}</h1>
            <div className="cardDiv">

                {movies.map(obj=>
                      
                      <img className={props.isSmall ?"smallimg" :"cardImg"}  src={`${imageUrl+obj.backdrop_path}`}  alt="card" />
                )}

           
            </div>
            
        </div>
    )
    
}export default CardRow;