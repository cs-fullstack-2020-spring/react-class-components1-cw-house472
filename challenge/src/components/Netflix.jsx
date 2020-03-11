import React, { Component } from "react"
import DisplayMovies from './DisplayMovies';
class Netflix extends Component{
    
    render(){
        const movies =[
            {movie_name: "Dolomite",
            Year_Released: 2019,
            Genre: "Biography"
        
        }
        ]
        return(
            <div>
                <DisplayMovies ></DisplayMovies>
            </div>
        )
    }
}

export default Netflix;
 