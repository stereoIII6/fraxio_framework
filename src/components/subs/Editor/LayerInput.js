import React, { Component } from 'react';
import { Button, InputGroup, Input, CustomInput, Form } from 'reactstrap';
class LayerInput extends Component {
    state = {}
    render() {
        return (
            <div><h2 className="m-0 p-0">PYE Layer Editor</h2>
                <hr>
                </hr> <Form>
                    <InputGroup bssize="normal">
                        <Input type="select" bssize="normal">
                            <option name="form" value="form" bssize="normal">SVG Form</option>
                            <option name="typo" value="typo" bssize="normal">Typography</option>
                            <option name="img" value="img" bssize="normal">Images</option>
                            <option name="audio" value="audio" bssize="normal">Audio</option>
                            <option name="video" value="video" bssize="normal">Video</option>
                        </Input>
                        <Input type="select" bssize="normal" style={{width:"90px"}}>
                            <option name="time" value="time">Timeline</option>
                            <option name="pfeed" value="pfeed">PriceFeed</option>
                            <option name="sports" value="sports">Sport Results</option>
                        </Input>
                        <input type="file" id="file" bssize="normal" className="btn btn-info" label="x" placeholder="X" width="40px" />
                        <Button className="btn btn-info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <b>&nbsp;No File</b>
                        </Button>
                        <Input type="text" bssize="normal" placeholder="Name" />
                        <Input type="submit" value="+ Layer" bssize="normal" className="btn btn-success" />
                    </InputGroup>
                    <label>Create a new Layer</label>
                </Form>
            </div>);
    }
}

export default LayerInput;