import React from 'react';


function MovieList(props) {

      const removeTitle = async (title) => {

        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

        var urlencoded = new URLSearchParams();
        urlencoded.append('title', title);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        }
      
        try {
          let response = await fetch('/api/removeMovie', requestOptions)
          if( response.status === 200 ) {
            props.setMovies( props.movies.filter(movies => movies.title !== title))
          }
        }

        catch (e) {
          console.log('error', e);
        }

        
    }

    return (
      <>
      <h2> Movie Ratings </h2>
      <div align = 'center' >
        {
          props.movies.map(movie =>
          <div>
            <img className='photo' src={movie.image} alt={movie.image} />
            <br />Title: {movie.title}
            <br />Release Date: {movie.release_date}
            <br />Actors: {movie.actors}
            <br />Rating: {`${movie.rating}/5`}
            <br />
            <button type='button' onClick={() => removeTitle(movie.title)}>Remove</button>
          </div>
          )
        }
        
      </div>
      </>
    )
  }

  export default MovieList;