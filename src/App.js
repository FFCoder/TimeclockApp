import React, { Component } from 'react';
//import Container from 'react-bootstrap/Container' ;
//import './App.css'
import { FirebaseContext } from './components/Firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/home';

import { Container } from 'react-bootstrap';
import { AuthUserContext } from './components/Session';
import CustomHeader from './components/CustomHeader';
import VeritimeEdit from './views/veritime-edit';

class App extends Component {
  static contextType = FirebaseContext;
  constructor(props) {
    super(props);
    this.state = { 
      authUser: null
     }
  }
  componentDidMount() {
    let firebase = this.context;
    this.listener = firebase.auth.onAuthStateChanged(authUser => {
        authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null })
    });
  }
  componentWillUnmount() {
    this.listener();
  }
  render() {
    return (
      <Router>
      <AuthUserContext.Provider value={this.state.authUser}>
      <CustomHeader />
        <Container>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/edit'>
                <VeritimeEdit />
              </Route>
        </Switch>
      </Container>
      </AuthUserContext.Provider>
      
      </Router>
     );
  }
}
App.contextType = FirebaseContext;
 
export default App;
