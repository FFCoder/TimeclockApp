import React, { Component, Fragment } from 'react';
import './home.css'
import {AuthUserContext} from '../../components/Session';
import { Jumbotron, Card, Button, Badge, Alert } from 'react-bootstrap';
import { FirebaseContext } from '../../components/Firebase';

class Home extends Component {
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
                        <HomeView user={authUser} firebase={firebase}/>
                    }
                </FirebaseContext.Consumer>
                }
            </AuthUserContext.Consumer>
         );
    }
}

function HomeView(props) {
    if (props.user) {
        return (
            <Fragment>
                {props.firebase.getUserVeritimeInfo(props.user.email).VeritimeRegistered ? (
                <Card>
                <Card.Body>
                    <Card.Title>Clock</Card.Title>
                    <Card.Text>Use this to manually clock in.</Card.Text>
                    <div id="clock-buttons">
                        <Button variant="success" size="lg">Clock In</Button>
                        <Button variant="danger" size="lg">Clock Out</Button>
                    </div>
                </Card.Body>
            </Card>
            ) : (
                <Alert variant="warning">Please Register Your Veritime Authentication Information.</Alert>
            )}
            <Card>
                <Card.Body>
                    <Card.Title>Edit Veritime Info</Card.Title>
                    <Card.Text>Use this page to edit your Veritime Authentication Information.</Card.Text>
                    <Button style={{"float": "right"}}>&#11166;</Button>
                </Card.Body>
            
            </Card>

            <Card>
                <Card.Title>Remove User Data</Card.Title>
                <Card.Text><strong><Badge variant="danger">WARNING!</Badge></strong> This will delete all data stored in the Timeclock App.
                            If You continue, you will have to sign back up if you wish to use it again.
                            <br></br><Button style={{"float": "right"}} variant="danger">Proceed</Button>
                </Card.Text>
            </Card>
            </Fragment>
        )
    }
    else {
        return (
            <Jumbotron>
                <h2>Hello!</h2>
                <p>
                    Please Sign In to Continue
                </p>
            </Jumbotron>
        )
    }
}

function callDeleteUser(firebase) {
    firebase.doDeleteUser();

}
Home.contextType = FirebaseContext;
 
export default Home;