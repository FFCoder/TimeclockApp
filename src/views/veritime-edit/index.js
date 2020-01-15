import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FirebaseContext } from '../../components/Firebase';

class VeritimeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
        this.submitInfo = this.submitInfo.bind(this);
    }

    handleChange_pNum = (e) =>{ 
        this.setState({vt_pnum: e.target.value});
      }
    handleChange_pass = (e) =>{ 
    this.setState({vt_pass: e.target.value});
    }

    async submitInfo(e) {
        e.preventDefault();
        var firebase = this.context;
        var db = await firebase.db;
        var currentUser_uid = await firebase.auth.currentUser.uid;
        var doc = await db.collection('users').doc(currentUser_uid);
        await doc.update({
            VeritimePhoneNumber: this.state.vt_pnum,
            VeritimePassword: this.state.vt_pass
        }).then(r => {
            alert("Updated")
        }).catch(err => {
            console.error("Error Thrown: ", err);
            console.log(doc);
        })
        
        
    }

    VeritimeEditForm() {
        return (
            <Form>
                <Form.Group controlId="veritime-phone">
                    <Form.Label>Veritime Phone Number</Form.Label>
                    <Form.Control value={this.state.vt_pnum} onChange={this.handleChange_pNum} required type="tel"></Form.Control>
                    <Form.Text className="text-muted">I am still working on validation. Please enter it exactly how you would in Veritime.</Form.Text>
                </Form.Group>
                <Form.Group controlId="veritime-pass">
                    <Form.Label>Pin</Form.Label>
                    <Form.Control value={this.state.vt_pin} onChange={this.handleChange_pass} required type="password" placeholder="1234" />
    
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.submitInfo}>Submit</Button>
            </Form>
        )
    }
    
    render() { 
        return this.VeritimeEditForm();
    }
}

function VeritimeEditForm(props, state) {
    
}
VeritimeEdit.contextType = FirebaseContext;
 
export default VeritimeEdit;