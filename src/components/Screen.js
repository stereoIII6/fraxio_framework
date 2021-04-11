import React, { Component } from 'react';
import KeyFrames from './KeyFrames';
import Layers from './Layers';
import Media from './Media';
import Freezer from "./Freezer";
import { InputGroup, Input, Form, Button } from 'reactstrap';
class Screen extends Component {

    render() {
        return (
            <div id="screen" className="jumbotron mt-5 p-0">
                <div className="row p-0 m-0 ">

                    <Layers />

                    <Media />

                    <KeyFrames />

                    <div className="row">


                        <Freezer />


                    </div>

                </div>
                <div className="row p-0 m-0">

                </div>
            </div>
        );
    }
}

export default Screen;