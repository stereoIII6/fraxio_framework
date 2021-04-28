import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
import KeyFrames from './KeyFrames';
import MediaPreview from './MediaPreview';
import ToolBox from './Toolbox';
class MaskThree extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1 className="m-0 p-0">PYE Keyframe Editor</h1>
                <hr></hr>
                <MediaPreview />
                <KeyFrames />
                <ToolBox />
            </div>
        );
    }
}

export default MaskThree;