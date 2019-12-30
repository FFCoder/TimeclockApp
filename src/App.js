import React, { Component } from 'react';
//import Container from 'react-bootstrap/Container' ;
//import './App.css'
import Firebase, { FirebaseContext } from './components/Firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import Home from './views/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      authUser: null
     }
  }
  componentDidMount() {
    console.log("Component Mounted!")
  }
  render() { 
    return ( 
      <FirebaseContext.Provider  value={new Firebase()}>
        <Container>
        <NavBar></NavBar>
        <Router>

          <Switch>
            <Route path="/"><Home /></Route>
          </Switch>

        </Router>
        </Container>
        
    </FirebaseContext.Provider>
     );
  }
}
 
export default App;
