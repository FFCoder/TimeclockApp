import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class VeritimeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <VeritimeEditForm /> );
    }
}
function VeritimeEditForm(props) {
    return (
        <Form>
            <Form.Group controlId="veritime-phone">
                <Form.Label>Veritime Phone Number</Form.Label>
                <Form.Control required type="tel"></Form.Control>
                <Form.Text className="text-muted">I am still working on validation. Please enter it exactly how you would in Veritime.</Form.Text>
            </Form.Group>
            <Form.Group controlId="veritime-pass">
                <Form.Label>Pin</Form.Label>
                <Form.Control required type="password" placeholder="1234" />

            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}
 
export default VeritimeEdit;