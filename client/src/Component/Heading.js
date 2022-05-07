import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Heading() {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container style={{}}>
        <Navbar.Brand href='#home'>GWMU-M</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link
              to='/'
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '10px',
              }}
            >
              home
            </Link>

            <Link
              to='/upload'
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '10px',
              }}
            >
              upload
            </Link>

            <Link
              to='/'
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '10px',
              }}
            >
              list
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;
