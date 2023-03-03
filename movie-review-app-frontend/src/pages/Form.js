import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Alert } from 'react-bootstrap';


export function LeaveReview() {

    const movieTitle = useRef();
    const movieReleaseDate = useRef();
    const movieActors = useRef();
    const movieRating = useRef();
    const [success, setSuccess] = useState(false);

    return (
        <>
        <center>
        <br/>
        <Alert show={success} variant="success">Movie added successfully!</Alert>
        <h2>Submit Review</h2>
        <Card style={{ width: '25rem', padding: '10px'}}>
        <Form method="post" action="/api/review" enctype="multipart/form-data">
                <Form.Group className="mb-3" controlId="formMovieTitle">
                    <Form.Label>Movie Title</Form.Label>
                    <Form.Control name='title' type='text' ref={movieTitle} placeholder='Enter movie title' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMovieRelease">
                    <Form.Label>Release Date (yyyy-mm-dd)</Form.Label>
                    <Form.Control name='release_date' type='text' ref={movieReleaseDate} placeholder='Enter release date' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMovieActors">
                    <Form.Label>Actors</Form.Label>
                    <Form.Control name='actors' type='text' ref={movieActors} placeholder='Enter actors' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMoviePoster">
                    <Form.Label>Upload Movie Poster</Form.Label>
                    <Form.Control name='movie_poster' type='file' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMovieRating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Select name="rating" ref={movieRating} aria-label="Default Rating">
                        <option>Please choose a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Form.Group>
                <Button onClick={() => setSuccess(true)} variant="primary" type="submit">Add</Button>
            </Form>
        </Card>          
        </center>
        </>
    )

};

