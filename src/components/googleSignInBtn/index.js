import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class GoogleSignInBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.firebase = this.props.firebase;
    }
    render() { 
        return ( <Button onClick={() => {this.firebase.doSignIn()}}>
            Sign In
        </Button> );
    }
}
 
export default GoogleSignInBtn;