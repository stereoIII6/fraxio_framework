import React, { Component } from 'react';
class ToolBox extends Component {
    state = {  }
    render() { 
        return ( <div className="alert alert-success">
            <div className="row">
                <div className="col btn">Position</div>
                <div className="col btn">Scale</div>
                <div className="col btn">Rotation</div>
                <div className="col btn">Opacity</div>
                <div className="col btn">Color</div>
                <div className="col btn">Border</div>
                <div className="col btn">BorderColor</div>
            </div><hr></hr><div className="row">
                <div className="col btn">lCut</div>
                <div className="col btn">rCut</div>
                <div className="col btn">Play</div>
                <div className="col btn">Pause</div>
                <div className="col btn">Stop</div>
                <div className="col btn">Loop</div>
                <div className="col btn">Go2Play</div>
                <div className="col btn">Go2Pause</div>
                <div className="col btn">Volume</div>
                <div className="col btn">Pan</div>
            </div><hr></hr>
            <div>
                Keyframe Toolkit
            </div>
        </div> );
    }
}
 
export default ToolBox;