import React, { Component } from 'react';
import Layers from './Layers';
import Media from './Media';

class Screen extends Component {

    render() {
        return (
            <div id="screen" className="jumbotron mt-5 p-0">
                <div className="row p-0 m-0 ">

                    <Layers />

                    <Media />

                </div>
                <div className="row p-0 m-0">

                </div>
            </div>
        );
    }
}

export default Screen;