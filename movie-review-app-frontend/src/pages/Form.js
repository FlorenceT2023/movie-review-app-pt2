import React, { useRef } from 'react';


export function LeaveReview(props) {

    const movieTitle = useRef();
    const movieReleaseDate = useRef();
    const movieActors = useRef();
    const moviePoster = useRef();
    const movieRating = useRef();
    
    // const submit = (event) => {

    //     event.preventDefault();
    //     const movieData = [];
    //     props.movies.forEach( movie => {
    //         movieData.push(movie);
    //     })

    //     const title = movieTitle.current.value;
    //     const releaseDate = movieReleaseDate.current.value;
    //     const actors = movieActors.current.value;
    //     const poster = moviePoster.current.value;
    //     const rating = movieRating.current.value;
        
    //     movieData.push({"id": id, "title": title, "release_date": releaseDate, "actors": actors, "image": poster, "rating": rating});
    //     props.setMovies(movieData);
    //     const id = props.movies.length + 1;
    //     alert(`${title} has been added!`);
    //     movieTitle.current.value = "";
    //     movieReleaseDate.current.value = "";
    //     movieActors.current.value = "";
    //     moviePoster.current.value = "";
    //     movieRating.current.value = "";
    // }


    return (
        <>
        <center>
            <h2>Submit Review</h2>
            <form method="post">
                <label> Movie Title: 
                    <input
                    name = "title"
                    ref = {movieTitle}
                    type = "text" />
                </label><br />
                <label> Release Date (yyyy-mm-dd):
                    <input
                    name = "release_date"
                    ref = {movieReleaseDate}
                    type = "text" />
                </label><br />
                <label> Actors:
                    <input
                    name="actors"
                    ref = {movieActors}
                    type = "text" />
                </label><br />
                <label> Movie Poster:
                    <select name = "image" ref={moviePoster}>
                        <option>/images/popcorn_placeholder.png</option>
                        <option>/images/terminator2.jpg</option>
                        <option>/images/grand_budapest_hotel.jpg</option>
                        <option>/images/office_space.jpg</option>
                        <option>/images/turning_red.jpg</option>
                        <option>/images/Princess_Mononoke.png</option>
                    </select>
                </label><br />
                <label> Rating:
                    <select name="rating" ref={movieRating}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </label><br />
                <input type="submit" value="ADD" />
            </form>            
        </center>
        </>
    )

};

