import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import firebase from '../firebase';

function Heading() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    firebase.auth().signOut();
    navigate('/');
  };

  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container style={{}}>
        <Navbar.Brand href='/'>GWNU-M</Navbar.Brand>
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
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
          {user.accessToken ? (
            <Navbar.Text
              style={{
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={() => {
                LogoutHandler();
              }}
            >
              logout
            </Navbar.Text>
          ) : (
            <Link
              to='/login'
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              login
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;
