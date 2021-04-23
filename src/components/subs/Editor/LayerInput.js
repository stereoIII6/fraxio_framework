import React, { Component } from 'react';
import { Button, InputGroup, Input, CustomInput, Form } from 'reactstrap';
class LayerInput extends Component {
    state = {  }
    render() { 
        return ( <Form>
            <InputGroup id="input_mask">
            <Input type="select">
                <option name="form" value="form">SVG Form</option>
                <option name="typo" value="typo">Typography</option>
                <option name="img" value="img">Images</option>
                <option name="audio" value="audio">Audio</option>
                <option name="video" value="video">Video</option>
            </Input>
            <Input type="select">
                <option name="time" value="time">Timeline</option>
                <option name="pfeed" value="pfeed">PriceFeed</option>
                <option name="sports" value="sports">Sport Results</option>
            </Input>
            <CustomInput type="file" id="IPFS" className="d-inline-block"/>
            <Input type="text" />
            <Input type="submit" />
            </InputGroup>
        </Form> );
    }
}
 
export default LayerInput;