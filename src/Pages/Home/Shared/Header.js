import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
import img from '../../../images/dp.png'

const Header = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <div id="navBar" className='p-5'>
            < Navbar className="px-5" bg="dark" fixed="top" collapseOnSelect expand="lg" >
                <Navbar.Brand as={Link} to="/home" className="text-white" href="#"><span className="display-4">X</span>CLUSIVE GYM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="text-white navName" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-white navName" as={Link} to="/programs">Programs</Nav.Link>
                        <Nav.Link className="text-white navName" as={Link} to="/suppliments">Supplements</Nav.Link>
                        <Nav.Link className="text-white navName" as={Link} to="/results">Results</Nav.Link>
                        <Nav.Link className="text-white navName" as={Link} to="/articles">Articles</Nav.Link>
                        {
                            user?.displayName && <Navbar.Text id="userDisplayName" className="text-white bg-secondary rounded p-2" >
                                Hello <a style={{ textDecoration: 'none' }} className="text-warning" href="#login">{user.displayName} <img width="30px" height="25px" src={user.photoURL || img} style={{ position: 'relative' }} className="rounded-circle" alt="" /></a>
                            </Navbar.Text>
                        }

                        {
                            !user?.displayName ? <Nav.Link className="text-white navName" as={Link} to="/login">Login/sign up</Nav.Link> :
                                <Button onClick={handleSignOut} variant="primary">Log out</Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </div >
    );
};

export default Header;