import React from 'react';


function MovieList(props) {

    function removeMovie(id) {
        console.log(id);
        let newMovies = props.movies.filter(movies => movies.id !== id)
        props.setMovies(newMovies)
    }

    return (
      <>
      <h2> Movie Ratings </h2>
      <div align = "center" >
        {
          props.movies.map(movie =>
          <div>
            <img className="photo" src={movie.image} alt="" />
            <br />Title: {movie.title}
            <br />Release Date: {movie.release_date}
            <br />Actors: {movie.actors}
            <br />Rating: {`${movie.rating}/5`}
            <br />
            <button type="button" onClick={() => removeMovie(movie.id)}>Remove</button>
          </div>
          )
        }
        
      </div>
      </>
    )
  }

  export default MovieList;