import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/esm/Container';


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
        <Container align='center'>
            {props.movies.map((movie) => (
                <Col sm={12} md={6} lg={4} className='primary mb-4'>
                  <Card className='m-2 h-100'>
                    <Card.Img
                      className='img-responsive img-thumbnail' 
                      variant='top' 
                      src={movie.image} 
                    />
                    <Card.Body> 
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Text>Release Date: {movie.release_date}</Card.Text>
                      <Card.Text>Actors: {movie.actors}</Card.Text>
                      <Card.Text>Rating: {`${movie.rating}/5`}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant='outline-primary' type='button' onClick={() => removeTitle(movie.title)}>
                        Remove
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
        </Container>
        <br /><br /><center>©Florence Tat. 2023</center>
      </>
    )};

  export default MovieList;