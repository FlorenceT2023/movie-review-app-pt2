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
          <Row style={{ width: '100%', height:'100%', padding: '15px'}}>
            {props.movies.map((movie) => (
                <Col sm={12} md={6} lg={4} className='primary mb-4'>
                  <Card>
                    <Card.Img
                      className='img-responsive img-thumbnail' 
                      variant='top' 
                      src={movie.image} 
                    />
                    <Card.Body> 
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Text>Release Date: {movie.release_date}
                      <br />Actors: {movie.actors}
                      <br />Rating: {`${movie.rating}/5`}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button 
                      variant='outline-primary' 
                      type='button' 
                      onClick={() => removeTitle(movie.title)}>
                        Remove
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
        <br /><br /><center>©Florence Tat. 2023</center>
      </>
    )};

  export default MovieList;
