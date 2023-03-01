import React, { useRef } from 'react';


export function LeaveReview() {

    const movieTitle = useRef();
    const movieReleaseDate = useRef();
    const movieActors = useRef();
    const movieRating = useRef();

    return (
        <>
        <center>
            <h2>Submit Review</h2>
            <form method="post" action="/api/review" enctype="multipart/form-data">
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
                    <input type="file" name="movie_poster" />
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

