import React, { Component } from 'react';
import { Button, Form, Input, InputGroup } from 'reactstrap';
class Contact extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Form>
                <InputGroup>
                <Input type="text" placeholder="First Name" style={{height: "2em", fontSize: "2em"}}/>
                <Input type="text" placeholder="Last Name" style={{height: "2em", fontSize: "2em"}}/>
                </InputGroup>
                <InputGroup style={{marginBottom: "2em"}}>
                <Input type="text" placeholder="Email Address" style={{height: "2em", fontSize: "2em"}}/>
                </InputGroup>

                <InputGroup>
                    <Input type="select" style={{height: "2em", fontSize: "2em"}}>
                        <option>Choose Topic</option>
                        <option>Investor Related</option>
                        <option>Code Related</option>
                        <option>Security Related</option>
                        <option>Content Related</option>
                    </Input>
                </InputGroup>
                <InputGroup style={{marginBottom: "2em"}}>
                <Input type="text" placeholder="Subject" style={{height: "2em", fontSize: "2em"}}/>
                </InputGroup>
                <InputGroup style={{marginBottom: "2em"}}>
                <Input type="textarea" placeholder="Your message here ..." style={{height: "10em", textAlign: "top", fontSize: "2em"}}/>
                </InputGroup>
                <InputGroup>
                <Input type="button" value="Send" style={{color:"lightgrey", 
                    background:"#9f95c3", height: "2em", textAlign: "top", fontSize: "2em"}}/>
                </InputGroup>
            </Form>
        </div> );
    }
}
 
export default Contact;