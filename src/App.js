import React, { Component } from 'react';
//import Container from 'react-bootstrap/Container' ;
//import './App.css'
import { FirebaseContext } from './components/Firebase';

import { Container } from 'react-bootstrap';
import { AuthUserContext } from './components/Session';
import CustomHeader from './components/CustomHeader';

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
      <AuthUserContext.Provider value={this.state.authUser}>
        <Container>
          <CustomHeader />
      </Container>
      </AuthUserContext.Provider>
     );
  }
}
App.contextType = FirebaseContext;
 
export default App;
