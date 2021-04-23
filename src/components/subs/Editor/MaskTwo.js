import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
import Layers from './Layers';
class MaskTwo extends Component {
    state = {}
    render() {
        return (
            <div>
                <h2 className="m-0 p-0">PYE Layer Editor</h2>
                <Layers />
                
            </div>
        );
    }
}

export default MaskTwo;