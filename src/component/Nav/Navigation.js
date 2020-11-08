import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/Logo.png';
import './Navigation.css';
const Navigation = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <Navbar className='our_menu' expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/home'><img style={{width:'120px'}} src={logo} alt=""/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="Search Your Destination" className="header_input" />
                    </Form>
                    <Nav className="ml-auto">
                        <Nav.Link > <Link to='/news' className='menu_list'>News</Link> </Nav.Link>
                        <Nav.Link > <Link to='/destination' className='menu_list'>Destination</Link> </Nav.Link>
                        <Nav.Link > <Link to='/blog' className='menu_list'>Blog</Link> </Nav.Link>
                        <Nav.Link > <Link to='/contact' className='menu_list'>Contact</Link> </Nav.Link>

                        {!loggedInUser.emails ?<Link to='/login'><button className='btn menu_btn'>Login</button></Link> : <Link to='/'><button className='btn menu_btn'>sign Out</button></Link>
                       }
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;