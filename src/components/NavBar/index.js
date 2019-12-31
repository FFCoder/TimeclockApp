import React, { Component } from 'react';
import './navBar.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext } from '../Session';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() {
        return (
            <Router>
            <FirebaseContext.Consumer>
            {firebase => 
                <AuthUserContext.Consumer>
                    {user => 
                       user
                        ? HeaderSignedIn(user, firebase)
                        : HeaderNotSignedIn(firebase)
                    }
                </AuthUserContext.Consumer>
            }
            </FirebaseContext.Consumer>
            </Router> );
    }
}

function HeaderSignedIn(user, firebase) {
    return (
        <div className="navBar">
            <h2>Barcode App</h2>
            <div className="linkHolder">
            <Link to="/">Home</Link>
            </div>
            
            <span>Hello {user.displayName}</span>
            <Button onClick={firebase.doSignOut}>Sign Out</Button>
        </div>
    )
}

function HeaderNotSignedIn(firebase) {
    return (
        <div className="navBar">
            <h2>Barcode App</h2>
            <div className="linkHolder">
            <Link to="/">Home</Link>
            </div>
            <Button onClick={firebase.doSignIn}>Sign In</Button>
        </div>
    )
}
 
export default NavBar;