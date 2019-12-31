import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { AuthUserContext } from '../Session';
import './NavBar.css';
import { FirebaseContext } from '../Firebase';

class CustomHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <AuthUserContext.Consumer>
                {authUser =>
                 <FirebaseContext.Consumer>
                     {firebase => 
                      <Navigation authUser={authUser} firebase={firebase} />
                     }
                 </FirebaseContext.Consumer>
                 
                } 
            </AuthUserContext.Consumer>
            
         );
    }
}
function Navigation(props) {
    const isLoggedIn = (
        <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Timeclock App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="custom-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                <span id="navbar-greeter">Hello, {props.authUser?.displayName}</span>
                <Nav.Link onClick={props.firebase.doSignOut}>Logout</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
    );
    const isNotLoggedIn = (
        <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Timeclock App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="custom-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Button onClick={props.firebase.doSignIn}>Login</Button>
                </Navbar.Collapse>
            </Navbar>
    )
    if (props.authUser) {
        return isLoggedIn;
    }
    return isNotLoggedIn;
}
 
export default CustomHeader;