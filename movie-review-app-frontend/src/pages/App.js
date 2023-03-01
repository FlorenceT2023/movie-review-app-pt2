import '../App.css'
import { useState, useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import { LeaveReview } from './Form';
import MovieList from './MovieList';


function App() {

  let [movies, setMovies] = useState(null);

  useEffect( () => {
    fetch("/api/movies")
    .then( response => response.json() )
    .then( setMovies )
    .catch( e => console.log(e.message))
  }, [])

  if( movies == null) {
    return <center><h1><br /><br /><br /><br />Loading...</h1></center>;
  }

  console.log(movies);
  
  return (
    // directs user to appropriate pages
    <Routes>
      <Route path="/" element={<MovieList movies={(movies)} setMovies={setMovies} />} />
      <Route path="/api/review" element={<LeaveReview movies={movies} setMovies={setMovies} />} />
    </Routes>
  )

}

export default App;

