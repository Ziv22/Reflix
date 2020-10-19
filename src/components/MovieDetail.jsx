import React, { Component } from 'react';

export class MovieDetail extends Component {
    render() {
        const   movies  = this.props.movies,
                movieId = this.props.match.params.id,
                movie   = movies.find(m => m.id == movieId)
      return(
        <div className="movie-detail">
            <p>{movie.title}</p>
            <img src={movie.img}/>
            <h2>{movie.title}</h2>
            <h2>{movie.year}</h2>
            <p>{movie.descrShort}</p>
        </div>
      )
    }
  }
  
  export default MovieDetail; 