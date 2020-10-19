import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Movie extends Component {
    render() {
        const movie = this.props.movie
        const changeRent = () => {
            this.props.changeRent(movie.id)

        }
      return(
        <div key={movie.id} className="movie">
            <Link to={`/movies/${movie.id}`}>
                <h2>{movie.title}</h2>
                <img className="poster" src={movie.img} alt=""/>
            </Link>
            {<button onClick={changeRent}>{movie.isRented ? "Remove" :"ADD"}</button> }
                
            
        </div>
      )
    }
  }
  
  export default Movie; 