import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Movie Review App</Navbar.Brand>
                    <Nav className="me-auto">                 
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/api/review">Submit Review</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;